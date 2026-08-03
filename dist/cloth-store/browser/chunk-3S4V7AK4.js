import {
  HttpClient,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  environment,
  firstValueFrom,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this.CART_KEY = "cs_cart";
    this.itemsSignal = signal(this.load());
    this.http = inject(HttpClient);
    this.items = this.itemsSignal.asReadonly();
    this.itemCount = computed(() => this.itemsSignal().reduce((s, i) => s + i.quantity, 0));
    this.total = computed(() => this.itemsSignal().reduce((s, i) => {
      const price = i.unitPrice ?? i.product?.price ?? 0;
      return s + price * i.quantity;
    }, 0));
  }
  add(product, quantity = 1, opts) {
    const productId = Number(product.id);
    const hasVariants = !!(product.variants && product.variants.length > 0) || !!(product.availableSizes && product.availableSizes.length) || !!(product.availableColors && product.availableColors.length);
    const variantId = opts?.variantId != null ? Number(opts.variantId) : void 0;
    const size = (opts?.size || "").trim() || void 0;
    const color = (opts?.color || "").trim() || void 0;
    if (hasVariants && (!size || !color)) {
      return false;
    }
    const items = [...this.itemsSignal()];
    const maxStock = opts?.maxStock ?? product.stock ?? 99;
    const existing = items.find((i) => Number(i.product.id) === productId && (i.variantId != null ? Number(i.variantId) : null) === (variantId ?? null) && (i.size || "") === (size || "") && (i.color || "") === (color || ""));
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, maxStock);
    } else {
      items.push({
        product: __spreadProps(__spreadValues({}, product), { id: productId }),
        quantity: Math.min(quantity, maxStock),
        variantId,
        size,
        color,
        imageUrl: opts?.imageUrl || product.imageUrl,
        unitPrice: opts?.unitPrice ?? product.price
      });
    }
    this.save(items);
    return true;
  }
  updateQuantity(key, quantity) {
    const items = this.itemsSignal().map((i) => {
      if (this.matches(i, key)) {
        const max = i.product.variants?.find((v) => Number(v.id) === Number(i.variantId))?.stock ?? i.product.stock ?? 99;
        return __spreadProps(__spreadValues({}, i), { quantity: Math.max(1, Math.min(quantity, max)) });
      }
      return i;
    });
    this.save(items);
  }
  remove(key) {
    this.save(this.itemsSignal().filter((i) => !this.matches(i, key)));
  }
  clear() {
    this.save([]);
  }
  /**
   * Drop cart lines whose product no longer exists (e.g. after H2 restart).
   * Returns list of removed product names/ids for UI message.
   */
  validateAgainstServer() {
    return __async(this, null, function* () {
      const items = this.itemsSignal();
      if (!items.length)
        return [];
      const removed = [];
      const valid = [];
      for (const item of items) {
        const id = Number(item.product?.id);
        if (!id || Number.isNaN(id)) {
          removed.push("Invalid item");
          continue;
        }
        try {
          const res = yield firstValueFrom(this.http.get(`${environment.apiUrl}/products/${id}`));
          if (res?.success && res.data) {
            const p = res.data;
            const needsVariant = !!(p.variants && p.variants.length > 0) || !!(p.availableSizes && p.availableSizes.length) || !!(p.availableColors && p.availableColors.length);
            if (needsVariant && (!(item.size || "").trim() || !(item.color || "").trim())) {
              removed.push((item.product?.name || p.name || `Product #${id}`) + " (select size & color)");
              continue;
            }
            valid.push(__spreadProps(__spreadValues({}, item), {
              product: __spreadProps(__spreadValues({}, p), { id: Number(p.id) }),
              variantId: item.variantId != null ? Number(item.variantId) : void 0,
              size: item.size,
              color: item.color
            }));
          } else {
            removed.push(item.product?.name || `Product #${id}`);
          }
        } catch {
          removed.push(item.product?.name || `Product #${id}`);
        }
      }
      this.save(valid);
      return removed;
    });
  }
  matches(i, key) {
    return Number(i.product.id) === Number(key.productId) && (i.variantId != null ? Number(i.variantId) : null) === (key.variantId != null ? Number(key.variantId) : null) && (i.size || "") === (key.size || "") && (i.color || "") === (key.color || "");
  }
  save(items) {
    this.itemsSignal.set(items);
    localStorage.setItem(this.CART_KEY, JSON.stringify(items));
  }
  load() {
    try {
      const raw = localStorage.getItem(this.CART_KEY);
      if (!raw)
        return [];
      const parsed = JSON.parse(raw);
      return (parsed || []).map((i) => __spreadProps(__spreadValues({}, i), {
        product: i.product ? __spreadProps(__spreadValues({}, i.product), { id: Number(i.product.id) }) : i.product,
        variantId: i.variantId != null ? Number(i.variantId) : void 0,
        quantity: Number(i.quantity) || 1
      })).filter((i) => i.product && i.product.id);
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function CartService_Factory(t) {
      return new (t || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-3S4V7AK4.js.map
