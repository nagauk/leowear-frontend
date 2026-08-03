import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/wishlist.service.ts
var WishlistService = class _WishlistService {
  constructor() {
    this.KEY = "cs_wishlist";
    this.itemsSignal = signal(this.load());
    this.items = this.itemsSignal.asReadonly();
    this.count = computed(() => this.itemsSignal().length);
  }
  isLoved(productId) {
    return this.itemsSignal().some((i) => i.productId === Number(productId));
  }
  toggle(product) {
    const id = Number(product.id);
    if (this.isLoved(id)) {
      this.remove(id);
      return false;
    }
    const next = {
      productId: id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      addedAt: Date.now()
    };
    this.save([next, ...this.itemsSignal().filter((i) => i.productId !== id)]);
    return true;
  }
  remove(productId) {
    this.save(this.itemsSignal().filter((i) => i.productId !== Number(productId)));
  }
  clear() {
    this.save([]);
  }
  save(items) {
    this.itemsSignal.set(items);
    localStorage.setItem(this.KEY, JSON.stringify(items));
  }
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function WishlistService_Factory(t) {
      return new (t || _WishlistService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
  }
};

export {
  WishlistService
};
//# sourceMappingURL=chunk-6IPBKY2M.js.map
