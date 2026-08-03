import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  constructor(http) {
    this.http = http;
  }
  placeOrder(data) {
    return this.http.post(`${environment.apiUrl}/orders`, data);
  }
  getMyOrders(page = 0, size = 10) {
    return this.http.get(`${environment.apiUrl}/orders/my`, {
      params: { page, size }
    });
  }
  getOrder(id) {
    return this.http.get(`${environment.apiUrl}/orders/${id}`);
  }
  getAllOrders(page = 0, size = 20, filter) {
    let params = new HttpParams().set("page", String(page)).set("size", String(size));
    if (filter?.status)
      params = params.set("status", filter.status);
    if (filter?.keyword?.trim())
      params = params.set("keyword", filter.keyword.trim());
    if (filter?.fromDate)
      params = params.set("fromDate", filter.fromDate);
    if (filter?.toDate)
      params = params.set("toDate", filter.toDate);
    return this.http.get(`${environment.apiUrl}/orders`, { params });
  }
  updateOrderStatus(id, status) {
    return this.http.patch(`${environment.apiUrl}/orders/${id}/status`, null, {
      params: { status }
    });
  }
  /** Staff-only: set courier / tracking / AWB info on a CONFIRMED order. */
  updateShippingDetails(id, shippingDetails) {
    return this.http.put(`${environment.apiUrl}/orders/${id}/shipping-details`, { shippingDetails });
  }
  /** Staff-only: download the currently filtered orders as a PDF. */
  exportOrdersPdf(filter) {
    let params = new HttpParams();
    if (filter.status)
      params = params.set("status", filter.status);
    if (filter.keyword?.trim())
      params = params.set("keyword", filter.keyword.trim());
    if (filter.fromDate)
      params = params.set("fromDate", filter.fromDate);
    if (filter.toDate)
      params = params.set("toDate", filter.toDate);
    if (filter.payment)
      params = params.set("payment", filter.payment);
    return this.http.get(`${environment.apiUrl}/orders/export/pdf`, {
      params,
      responseType: "blob"
    });
  }
  createReturn(data) {
    return this.http.post(`${environment.apiUrl}/returns`, data);
  }
  getMyReturns(page = 0, size = 10) {
    return this.http.get(`${environment.apiUrl}/returns/my`, {
      params: { page, size }
    });
  }
  getAllReturns(page = 0, size = 10) {
    return this.http.get(`${environment.apiUrl}/returns`, {
      params: { page, size }
    });
  }
  updateReturnStatus(id, status, adminNotes, refundTransactionId) {
    return this.http.patch(`${environment.apiUrl}/returns/${id}/status`, {
      status,
      adminNotes,
      refundTransactionId
    });
  }
  getDashboard() {
    return this.http.get(`${environment.apiUrl}/admin/dashboard`);
  }
  static {
    this.\u0275fac = function OrderService_Factory(t) {
      return new (t || _OrderService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};

export {
  OrderService
};
//# sourceMappingURL=chunk-2PGALH47.js.map
