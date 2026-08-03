import {
  HistoryService
} from "./chunk-WVM67IF3.js";
import {
  WishlistService
} from "./chunk-6IPBKY2M.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/wishlist/wishlist.component.ts
var _forTrack0 = ($index, $item) => $item.productId;
var _c0 = (a0) => ["/products", a0];
var _c1 = () => ["/products"];
var _c2 = (a0) => ({ search: a0 });
function WishlistComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.wishlist.clear());
    });
    \u0275\u0275text(1, "Clear all");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "h5", 20);
    \u0275\u0275text(3, "No loved items yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, "Tap the heart on a product to save it here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 22);
    \u0275\u0275text(7, "Browse Shop");
    \u0275\u0275elementEnd()();
  }
}
function WishlistComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "a", 26)(3, "div", 27);
    \u0275\u0275element(4, "img", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 26)(9, "div", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 32)(12, "div", 33);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 34);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_12_For_2_Template_button_click_15_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wishlist.remove(item_r4.productId));
    });
    \u0275\u0275element(16, "i", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, item_r4.productId));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r4.imageUrl || "https://via.placeholder.com/400x500", \u0275\u0275sanitizeUrl)("alt", item_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.brand || "Leo Wear");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, item_r4.productId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 7, item_r4.price, "1.0-0"), "");
  }
}
function WishlistComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, WishlistComponent_Conditional_12_For_2_Template, 17, 14, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.wishlist.items());
  }
}
function WishlistComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.history.clearSearches());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Your recent searches will appear here.");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1))("queryParams", \u0275\u0275pureFunction1(4, _c2, s_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r6, " ");
  }
}
function WishlistComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, WishlistComponent_Conditional_21_For_2_Template, 2, 6, "a", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.history.searches());
  }
}
function WishlistComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.history.clearViews());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Products you open will show up here.");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, v_r8.productId));
    \u0275\u0275advance();
    \u0275\u0275property("src", v_r8.imageUrl || "https://via.placeholder.com/48", \u0275\u0275sanitizeUrl)("alt", v_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 5, v_r8.price, "1.0-0"), "");
  }
}
function WishlistComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275repeaterCreate(1, WishlistComponent_Conditional_29_For_2_Template, 8, 10, "a", 40, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.history.recentViews());
  }
}
var WishlistComponent = class _WishlistComponent {
  constructor(wishlist, history, seo) {
    this.wishlist = wishlist;
    this.history = history;
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Your Wishlist",
      description: "Items you love, saved for later at Leo Wear.",
      canonicalPath: "/wishlist"
    });
  }
  static {
    this.\u0275fac = function WishlistComponent_Factory(t) {
      return new (t || _WishlistComponent)(\u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(HistoryService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 7, consts: [[1, "page-container"], [1, "container"], [1, "section-title", "mb-4"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0"], [1, "bi", "bi-heart-fill", "text-danger", "me-2"], [1, "btn", "btn-sm", "btn-outline-secondary"], [1, "empty-state", "cs-card", "p-5"], [1, "col-lg-4"], [1, "cs-card", "p-3", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "bi", "bi-clock-history", "me-2"], [1, "btn", "btn-link", "btn-sm", "p-0"], [1, "text-muted", "small", "mb-0"], [1, "cs-card", "p-3"], [1, "bi", "bi-eye", "me-2"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-heart", "d-block", "fs-1", "text-muted"], [1, "mt-2"], [1, "text-muted"], ["routerLink", "/products", 1, "btn", "btn-cs-primary", "mt-2"], [1, "row", "g-3"], [1, "col-6", "col-md-4"], [1, "cs-card", "product-card", "h-100"], [1, "text-decoration-none", 3, "routerLink"], [1, "product-img-wrap"], [3, "src", "alt"], [1, "product-body"], [1, "product-brand"], [1, "product-name"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "product-price"], ["title", "Remove", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-heart-fill"], [1, "btn", "btn-link", "btn-sm", "p-0", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "badge", "rounded-pill", "text-bg-light", "border", "text-decoration-none", 3, "routerLink", "queryParams"], [1, "d-flex", "flex-column", "gap-2"], [1, "d-flex", "gap-2", "align-items-center", "text-decoration-none", "text-dark", 3, "routerLink"], ["width", "48", "height", "56", 2, "object-fit", "cover", "border-radius", "6px", 3, "src", "alt"], [1, "flex-grow-1"], [1, "small", "fw-medium"], [1, "text-muted", "small"]], template: function WishlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Wishlist & Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
        \u0275\u0275element(8, "i", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, WishlistComponent_Conditional_10_Template, 2, 0, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, WishlistComponent_Conditional_11_Template, 8, 0, "div", 9)(12, WishlistComponent_Conditional_12_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h6", 6);
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275text(18, "Search history");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, WishlistComponent_Conditional_19_Template, 2, 0, "button", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, WishlistComponent_Conditional_20_Template, 2, 0, "p", 15)(21, WishlistComponent_Conditional_21_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 16)(23, "div", 12)(24, "h6", 6);
        \u0275\u0275element(25, "i", 17);
        \u0275\u0275text(26, "Recently viewed");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, WishlistComponent_Conditional_27_Template, 2, 0, "button", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, WishlistComponent_Conditional_28_Template, 2, 0, "p", 15)(29, WishlistComponent_Conditional_29_Template, 3, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("Loved items (", ctx.wishlist.count(), ")");
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.wishlist.count() > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.wishlist.count() === 0 ? 11 : 12);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(19, ctx.history.searches().length ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.history.searches().length === 0 ? 20 : 21);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(27, ctx.history.recentViews().length ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(28, ctx.history.recentViews().length === 0 ? 28 : 29);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src\\app\\features\\wishlist\\wishlist.component.ts", lineNumber: 118 });
})();
export {
  WishlistComponent
};
//# sourceMappingURL=chunk-3QVRVXB4.js.map
