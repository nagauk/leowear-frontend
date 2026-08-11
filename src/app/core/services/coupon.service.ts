import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Page } from '../models/models';

export interface Coupon {
  id?: number;
  code: string;
  description?: string;
  discountPercent: number;
  minOrderAmount?: number | null;
  expiresAt?: string | null;
  usageLimit?: number | null;
  usagePerUser?: number | null;
  firstTimeUserOnly?: boolean;
  active?: boolean;
  timesUsed?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CouponValidation {
  code: string;
  description?: string;
  discountPercent: number;
  discountAmount: number;
  finalTotal: number;
  expiresAt?: string | null;
}

@Injectable({ providedIn: 'root' })
export class CouponService {
  constructor(private http: HttpClient) {}

  /**
   * Customer-side: validate a typed coupon code against the current cart
   * subtotal. Returns the discount preview used by the cart UI.
   * Authentication required (CUSTOMER role).
   */
  validate(code: string, subtotal: number): Observable<ApiResponse<CouponValidation>> {
    return this.http.post<ApiResponse<CouponValidation>>(
      `${environment.apiUrl}/coupons/validate`,
      { code, subtotal }
    );
  }

  // ============ Admin ============

  listAll(page = 0, size = 50): Observable<ApiResponse<Page<Coupon>>> {
    return this.http.get<ApiResponse<Page<Coupon>>>(`${environment.apiUrl}/coupons`, {
      params: { page, size }
    });
  }

  getOne(id: number): Observable<ApiResponse<Coupon>> {
    return this.http.get<ApiResponse<Coupon>>(`${environment.apiUrl}/coupons/${id}`);
  }

  create(data: Partial<Coupon>): Observable<ApiResponse<Coupon>> {
    return this.http.post<ApiResponse<Coupon>>(`${environment.apiUrl}/coupons`, data);
  }

  update(id: number, data: Partial<Coupon>): Observable<ApiResponse<Coupon>> {
    return this.http.put<ApiResponse<Coupon>>(`${environment.apiUrl}/coupons/${id}`, data);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${environment.apiUrl}/coupons/${id}`);
  }
}