import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/history.service.ts
var HistoryService = class _HistoryService {
  constructor() {
    this.SEARCH_KEY = "cs_search_history";
    this.VIEW_KEY = "cs_recent_views";
    this.MAX_SEARCH = 12;
    this.MAX_VIEWS = 12;
    this.searchesSignal = signal(this.loadSearches());
    this.viewsSignal = signal(this.loadViews());
    this.searches = this.searchesSignal.asReadonly();
    this.recentViews = this.viewsSignal.asReadonly();
  }
  addSearch(query) {
    const q = (query || "").trim();
    if (!q || q.length < 2)
      return;
    const next = [q, ...this.searchesSignal().filter((s) => s.toLowerCase() !== q.toLowerCase())].slice(0, this.MAX_SEARCH);
    this.searchesSignal.set(next);
    localStorage.setItem(this.SEARCH_KEY, JSON.stringify(next));
  }
  removeSearch(query) {
    const next = this.searchesSignal().filter((s) => s !== query);
    this.searchesSignal.set(next);
    localStorage.setItem(this.SEARCH_KEY, JSON.stringify(next));
  }
  clearSearches() {
    this.searchesSignal.set([]);
    localStorage.removeItem(this.SEARCH_KEY);
  }
  addView(product) {
    if (!product?.id)
      return;
    const id = Number(product.id);
    const entry = {
      productId: id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      viewedAt: Date.now()
    };
    const next = [entry, ...this.viewsSignal().filter((v) => v.productId !== id)].slice(0, this.MAX_VIEWS);
    this.viewsSignal.set(next);
    localStorage.setItem(this.VIEW_KEY, JSON.stringify(next));
  }
  clearViews() {
    this.viewsSignal.set([]);
    localStorage.removeItem(this.VIEW_KEY);
  }
  loadSearches() {
    try {
      const raw = localStorage.getItem(this.SEARCH_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  loadViews() {
    try {
      const raw = localStorage.getItem(this.VIEW_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function HistoryService_Factory(t) {
      return new (t || _HistoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoryService, factory: _HistoryService.\u0275fac, providedIn: "root" });
  }
};

export {
  HistoryService
};
//# sourceMappingURL=chunk-WVM67IF3.js.map
