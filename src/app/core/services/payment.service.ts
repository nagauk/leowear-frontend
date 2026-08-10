import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Order } from '../models/models';

export interface PaymentSession {
  orderId: number;
  orderNumber: string;
  amount: number;
  currency: string;
  keyId?: string;
  razorpayOrderId?: string;
  companyName?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  mock: boolean;
  message?: string;
  /** true when this session is collecting COD advance (deducted from order total) */
  codPlatformFee?: boolean;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  /** Single in-flight script load so parallel callers share one network request. */
  private scriptPromise: Promise<void> | null = null;

  constructor(private http: HttpClient) {}

  createSession(orderId: number): Observable<ApiResponse<PaymentSession>> {
    return this.http.post<ApiResponse<PaymentSession>>(
      `${environment.apiUrl}/payments/create/${orderId}`, {}
    );
  }

  verify(body: {
    orderId: number;
    razorpayOrderId?: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    mockConfirm?: boolean;
  }): Observable<ApiResponse<Order>> {
    return this.http.post<ApiResponse<Order>>(`${environment.apiUrl}/payments/verify`, body);
  }

  /** Start loading checkout.js early (cart / payment page). Safe to call many times. */
  preloadRazorpayScript(): void {
    void this.loadRazorpayScript();
  }

  loadRazorpayScript(): Promise<void> {
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('No window'));
    }
    if (window.Razorpay) {
      return Promise.resolve();
    }
    if (this.scriptPromise) {
      return this.scriptPromise;
    }

    this.scriptPromise = new Promise<void>((resolve, reject) => {
      // Already injected by a previous attempt
      const existing = document.querySelector('script[data-razorpay-checkout]') as HTMLScriptElement | null;
      if (existing) {
        if (window.Razorpay) {
          resolve();
          return;
        }
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => {
          this.scriptPromise = null;
          reject(new Error('Failed to load Razorpay SDK'));
        });
        return;
      }

      const s = document.createElement('script');
      s.src = 'https://checkout.razorpay.com/v1/checkout.js';
      s.async = true;
      s.dataset['razorpayCheckout'] = '1';
      s.onload = () => resolve();
      s.onerror = () => {
        this.scriptPromise = null;
        s.remove();
        reject(new Error('Failed to load Razorpay SDK'));
      };
      document.head.appendChild(s);
    });

    return this.scriptPromise;
  }
}
