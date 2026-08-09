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

  loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = 'https://checkout.razorpay.com/v1/checkout.js';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
      document.body.appendChild(s);
    });
  }
}
