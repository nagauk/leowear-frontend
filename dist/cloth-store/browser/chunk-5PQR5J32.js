import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/support.service.ts
var SupportService = class _SupportService {
  constructor(http) {
    this.http = http;
  }
  submitComplaint(data) {
    return this.http.post(`${environment.apiUrl}/complaints`, data);
  }
  myComplaints(page = 0, size = 10) {
    return this.http.get(`${environment.apiUrl}/complaints/my`, {
      params: { page, size }
    });
  }
  allComplaints(page = 0, size = 20) {
    return this.http.get(`${environment.apiUrl}/complaints`, {
      params: { page, size }
    });
  }
  updateComplaint(id, status, adminResponse) {
    return this.http.patch(`${environment.apiUrl}/complaints/${id}/status`, {
      status,
      adminResponse
    });
  }
  submitFeedback(data) {
    return this.http.post(`${environment.apiUrl}/feedback`, data);
  }
  allFeedback(page = 0, size = 20) {
    return this.http.get(`${environment.apiUrl}/feedback`, {
      params: { page, size }
    });
  }
  static {
    this.\u0275fac = function SupportService_Factory(t) {
      return new (t || _SupportService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupportService, factory: _SupportService.\u0275fac, providedIn: "root" });
  }
};

export {
  SupportService
};
//# sourceMappingURL=chunk-5PQR5J32.js.map
