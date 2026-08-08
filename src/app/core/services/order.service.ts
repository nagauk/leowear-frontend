import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Order, Page, ReturnRequest, DashboardStats } from '../models/models';

export interface OrderFilter {
  page?: number;
  size?: number;
  status?: string;
  keyword?: string;
  fromDate?: string;
  toDate?: string;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  placeOrder(data: any): Observable<ApiResponse<Order>> {
    return this.http.post<ApiResponse<Order>>(`${environment.apiUrl}/orders`, data);
  }

  getMyOrders(page = 0, size = 10): Observable<ApiResponse<Page<Order>>> {
    return this.http.get<ApiResponse<Page<Order>>>(`${environment.apiUrl}/orders/my`, {
      params: { page, size }
    });
  }

  getOrder(id: number): Observable<ApiResponse<Order>> {
    return this.http.get<ApiResponse<Order>>(`${environment.apiUrl}/orders/${id}`);
  }

  getAllOrders(page = 0, size = 20, filter?: Partial<OrderFilter>): Observable<ApiResponse<Page<Order>>> {
    let params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size));

    if (filter?.status) params = params.set('status', filter.status);
    if (filter?.keyword?.trim()) params = params.set('keyword', filter.keyword.trim());
    if (filter?.fromDate) params = params.set('fromDate', filter.fromDate);
    if (filter?.toDate) params = params.set('toDate', filter.toDate);

    return this.http.get<ApiResponse<Page<Order>>>(`${environment.apiUrl}/orders`, { params });
  }

  updateOrderStatus(id: number, status: string): Observable<ApiResponse<Order>> {
    return this.http.patch<ApiResponse<Order>>(`${environment.apiUrl}/orders/${id}/status`, null, {
      params: { status }
    });
  }

  /** Staff-only: set courier / tracking / AWB info on a CONFIRMED order. */
  updateShippingDetails(id: number, shippingDetails: string): Observable<ApiResponse<Order>> {
    return this.http.put<ApiResponse<Order>>(
      `${environment.apiUrl}/orders/${id}/shipping-details`,
      { shippingDetails }
    );
  }

  /** Staff-only: download the currently filtered orders as a PDF. */
  exportOrdersPdf(filter: Partial<OrderFilter> & { payment?: string }): Observable<Blob> {
    let params = new HttpParams();
    if (filter.status) params = params.set('status', filter.status);
    if (filter.keyword?.trim()) params = params.set('keyword', filter.keyword.trim());
    if (filter.fromDate) params = params.set('fromDate', filter.fromDate);
    if (filter.toDate) params = params.set('toDate', filter.toDate);
    if (filter.payment) params = params.set('payment', filter.payment);

    return this.http.get(`${environment.apiUrl}/orders/export/pdf`, {
      params,
      responseType: 'blob'
    });
  }

  /** Staff-only: download single-order invoice PDF (A6 packing/shipping invoice). */
  downloadInvoice(orderId: number): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/orders/${orderId}/invoice`, {
      responseType: 'blob'
    });
  }

  createReturn(data: { orderId: number; reason: string; orderItemId?: number; quantity?: number }): Observable<ApiResponse<ReturnRequest>> {
    return this.http.post<ApiResponse<ReturnRequest>>(`${environment.apiUrl}/returns`, data);
  }

  getMyReturns(page = 0, size = 10): Observable<ApiResponse<Page<ReturnRequest>>> {
    return this.http.get<ApiResponse<Page<ReturnRequest>>>(`${environment.apiUrl}/returns/my`, {
      params: { page, size }
    });
  }

  getAllReturns(page = 0, size = 10): Observable<ApiResponse<Page<ReturnRequest>>> {
    return this.http.get<ApiResponse<Page<ReturnRequest>>>(`${environment.apiUrl}/returns`, {
      params: { page, size }
    });
  }

  updateReturnStatus(id: number, status: string, adminNotes?: string, refundTransactionId?: string): Observable<ApiResponse<ReturnRequest>> {
    return this.http.patch<ApiResponse<ReturnRequest>>(`${environment.apiUrl}/returns/${id}/status`, {
      status, adminNotes, refundTransactionId
    });
  }

  getDashboard(): Observable<ApiResponse<DashboardStats>> {
    return this.http.get<ApiResponse<DashboardStats>>(`${environment.apiUrl}/admin/dashboard`);
  }
}
