import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/settings.service.ts
var SettingsService = class _SettingsService {
  constructor(http) {
    this.http = http;
  }
  getDelivery() {
    return this.http.get(`${environment.apiUrl}/settings/delivery`);
  }
  updateDelivery(data) {
    return this.http.put(`${environment.apiUrl}/settings/delivery`, data);
  }
  validatePincode(pincode) {
    return this.http.get(`${environment.apiUrl}/pincode/${pincode}`);
  }
  static {
    this.\u0275fac = function SettingsService_Factory(t) {
      return new (t || _SettingsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};

export {
  SettingsService
};
//# sourceMappingURL=chunk-QNYGSO35.js.map
