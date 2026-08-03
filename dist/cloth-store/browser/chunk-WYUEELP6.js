import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor(http) {
    this.http = http;
  }
  getProducts(page = 0, size = 12, categoryId, search) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (categoryId)
      params = params.set("categoryId", categoryId);
    if (search)
      params = params.set("search", search);
    return this.http.get(`${environment.apiUrl}/products`, { params });
  }
  getProduct(id) {
    return this.http.get(`${environment.apiUrl}/products/${id}`);
  }
  getCategories() {
    return this.http.get(`${environment.apiUrl}/categories`);
  }
  getCategoryTree() {
    return this.http.get(`${environment.apiUrl}/categories/tree`);
  }
  getBestsellers(limit = 8) {
    return this.http.get(`${environment.apiUrl}/products/bestsellers`, {
      params: { limit }
    });
  }
  // Admin
  getAllProductsAdmin(page = 0, size = 10) {
    return this.http.get(`${environment.apiUrl}/admin/products`, {
      params: { page, size }
    });
  }
  createProduct(product) {
    return this.http.post(`${environment.apiUrl}/admin/products`, product);
  }
  updateProduct(id, product) {
    return this.http.put(`${environment.apiUrl}/admin/products/${id}`, product);
  }
  /**
   * Staff-only flag flip (PATCH /admin/products/{id}/active). Used to
   * activate or deactivate a product without going through the full edit
   * endpoint, so the reactivation path is easy to audit.
   */
  setProductActive(id, active) {
    return this.http.patch(`${environment.apiUrl}/admin/products/${id}/active`, null, { params: { active } });
  }
  updateStock(id, stock) {
    return this.http.patch(`${environment.apiUrl}/admin/products/${id}/stock`, null, {
      params: { stock }
    });
  }
  createCategory(cat) {
    return this.http.post(`${environment.apiUrl}/admin/categories`, cat);
  }
  static {
    this.\u0275fac = function ProductService_Factory(t) {
      return new (t || _ProductService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-WYUEELP6.js.map
