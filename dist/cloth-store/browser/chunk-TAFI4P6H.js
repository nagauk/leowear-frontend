import {
  ProductService
} from "./chunk-WYUEELP6.js";
import {
  CartService
} from "./chunk-3S4V7AK4.js";
import {
  HistoryService
} from "./chunk-WVM67IF3.js";
import {
  WishlistService
} from "./chunk-6IPBKY2M.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  Router,
  RouterLink,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/products/product-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function ProductListComponent_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_10_For_6_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.useSearch(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function ProductListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3, "Recent searches");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275repeaterCreate(5, ProductListComponent_Conditional_10_For_6_Template, 2, 1, "button", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.history.searches());
  }
}
function ProductListComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.name);
  }
}
function ProductListComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.name);
  }
}
function ProductListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.breadcrumb);
  }
}
function ProductListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Try adjusting your filters");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_40_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Our Choice");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_40_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "SALE");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_40_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Sold Out");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_40_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.categoryName);
  }
}
function ProductListComponent_Conditional_40_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, p_r7.originalPrice, "1.0-0"), "");
  }
}
function ProductListComponent_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 31)(2, "a", 32)(3, "div", 33);
    \u0275\u0275element(4, "img", 34);
    \u0275\u0275template(5, ProductListComponent_Conditional_40_For_2_Conditional_5_Template, 2, 0, "span", 35)(6, ProductListComponent_Conditional_40_For_2_Conditional_6_Template, 2, 0, "span", 36)(7, ProductListComponent_Conditional_40_For_2_Conditional_7_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "div", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProductListComponent_Conditional_40_For_2_Conditional_11_Template, 2, 1, "div", 40);
    \u0275\u0275elementStart(12, "a", 32)(13, "div", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "div", 43);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275template(19, ProductListComponent_Conditional_40_For_2_Conditional_19_Template, 3, 4, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 45)(21, "button", 46);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_40_For_2_Template_button_click_21_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleLove(p_r7));
    });
    \u0275\u0275element(22, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 48);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_40_For_2_Template_button_click_23_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(p_r7));
    });
    \u0275\u0275element(24, "i", 49);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, p_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r7.imageUrl || "https://via.placeholder.com/400x500?text=Leo+Wear", \u0275\u0275sanitizeUrl)("alt", p_r7.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r2.isLeo(p_r7.brand) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, p_r7.originalPrice && p_r7.originalPrice > p_r7.price ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, p_r7.stock === 0 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.brand || "Leo Wear");
    \u0275\u0275advance();
    \u0275\u0275conditional(11, p_r7.categoryName ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, p_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(18, 17, p_r7.price, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, p_r7.originalPrice && p_r7.originalPrice > p_r7.price ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bi-heart-fill", ctx_r2.wishlist.isLoved(p_r7.id))("bi-heart", !ctx_r2.wishlist.isLoved(p_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", p_r7.stock === 0);
  }
}
function ProductListComponent_Conditional_40_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 51)(1, "button", 52);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_40_Conditional_3_For_6_Template_button_click_1_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goPage(p_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r10 === ctx_r2.page);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10 + 1);
  }
}
function ProductListComponent_Conditional_40_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 30)(1, "ul", 50)(2, "li", 51)(3, "button", 52);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_40_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.page - 1));
    });
    \u0275\u0275text(4, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, ProductListComponent_Conditional_40_Conditional_3_For_6_Template, 3, 3, "li", 53, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(7, "li", 51)(8, "button", 52);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_40_Conditional_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.page + 1));
    });
    \u0275\u0275text(9, "Next");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.page >= ctx_r2.totalPages - 1);
  }
}
function ProductListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, ProductListComponent_Conditional_40_For_2_Template, 25, 24, "div", 29, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductListComponent_Conditional_40_Conditional_3_Template, 10, 4, "nav", 30);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.totalPages > 1 ? 3 : -1);
  }
}
var ProductListComponent = class _ProductListComponent {
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
  constructor(productService, cart, wishlist, history, route, router, seo) {
    this.productService = productService;
    this.cart = cart;
    this.wishlist = wishlist;
    this.history = history;
    this.route = route;
    this.router = router;
    this.seo = seo;
    this.products = [];
    this.rootCategories = [];
    this.subcategories = [];
    this.categoryId = null;
    this.subcategoryId = null;
    this.search = "";
    this.page = 0;
    this.size = 12;
    this.total = 0;
    this.totalPages = 0;
    this.loading = true;
    this.title = "All Products";
    this.breadcrumb = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Shop All Products",
      description: "Browse our full collection of premium clothing for men, women & kids. Filter by category, brand, and size to find your fit.",
      canonicalPath: "/products",
      keywords: "shop, clothing, men, women, kids, t-shirts, jeans, apparel"
    });
    this.productService.getCategoryTree().subscribe({
      next: (res) => {
        this.rootCategories = res.data || [];
        this.syncSubcategories();
      },
      error: () => {
        this.productService.getCategories().subscribe((r) => {
          this.rootCategories = (r.data || []).filter((c) => !c.parentId);
        });
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.categoryId = params["category"] ? +params["category"] : null;
      this.subcategoryId = params["subcategory"] ? +params["subcategory"] : null;
      this.search = params["search"] || "";
      this.page = 0;
      this.syncSubcategories();
      this.load();
    });
  }
  /** Subcategories of selected parent — always from DB tree */
  syncSubcategories() {
    if (!this.categoryId) {
      this.subcategories = [];
      return;
    }
    const root = this.rootCategories.find((c) => c.id === this.categoryId);
    this.subcategories = root?.children || [];
    if (this.subcategoryId && !this.subcategories.some((s) => s.id === this.subcategoryId)) {
      this.subcategoryId = null;
    }
  }
  onCategoryChange() {
    this.subcategoryId = null;
    this.syncSubcategories();
    this.applyFilters();
  }
  /** Effective category id sent to API: subcategory if set, else parent */
  filterCategoryId() {
    if (this.subcategoryId)
      return this.subcategoryId;
    if (this.categoryId)
      return this.categoryId;
    return void 0;
  }
  load() {
    this.loading = true;
    if (this.search?.trim()) {
      this.history.addSearch(this.search.trim());
    }
    const catId = this.filterCategoryId();
    this.productService.getProducts(this.page, this.size, catId, this.search || void 0).subscribe({
      next: (res) => {
        this.products = res.data?.content || [];
        this.total = res.data?.totalElements || 0;
        this.totalPages = res.data?.totalPages || 0;
        this.loading = false;
        this.updateTitle();
      },
      error: () => this.loading = false
    });
  }
  updateTitle() {
    const root = this.rootCategories.find((c) => c.id === this.categoryId);
    const sub = this.subcategories.find((s) => s.id === this.subcategoryId);
    if (sub && root) {
      this.title = sub.name;
      this.breadcrumb = `${root.name} \u203A ${sub.name}`;
    } else if (root) {
      this.title = root.name;
      this.breadcrumb = `${root.name} \xB7 all subcategories`;
    } else if (this.search) {
      this.title = `Results for "${this.search}"`;
      this.breadcrumb = "";
    } else {
      this.title = "All Products";
      this.breadcrumb = "";
    }
    const desc = this.search ? `Search results for "${this.search}" at Leo Wear \u2014 ${this.total} products.` : sub ? `Shop ${sub.name} from ${root?.name || "Leo Wear"} \u2014 ${this.total} styles, premium quality clothing.` : root ? `Shop ${root.name} clothing \u2014 ${this.total} products at Leo Wear.` : `Browse ${this.total} premium clothing products at Leo Wear. Men, women & kids, free returns, secure checkout.`;
    this.seo.setPage({
      title: this.title,
      description: desc,
      canonicalPath: "/products",
      keywords: root ? `${root.name}, ${root.name} clothing, Leo Wear` : void 0,
      jsonLd: this.buildItemListJsonLd()
    });
  }
  buildItemListJsonLd() {
    const base = (environment.siteUrl || "").replace(/\/$/, "");
    const items = (this.products || []).slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${base}/products/${p.id}`,
      name: p.name
    }));
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: items
    };
  }
  goPage(p) {
    if (p < 0 || p >= this.totalPages)
      return;
    this.page = p;
    this.load();
  }
  reset() {
    this.categoryId = null;
    this.subcategoryId = null;
    this.search = "";
    this.page = 0;
    this.subcategories = [];
    this.router.navigate(["/products"]);
    this.load();
  }
  applyFilters() {
    if (this.search?.trim()) {
      this.history.addSearch(this.search.trim());
    }
    this.page = 0;
    this.router.navigate(["/products"], {
      queryParams: {
        category: this.categoryId || null,
        subcategory: this.subcategoryId || null,
        search: this.search?.trim() || null
      }
    });
    this.load();
  }
  useSearch(q) {
    this.search = q;
    this.applyFilters();
  }
  isLeo(brand) {
    return !!brand && brand.toLowerCase().replace(/\s/g, "").includes("leowear");
  }
  toggleLove(p) {
    this.wishlist.toggle(p);
  }
  addToCart(p) {
    const needsOptions = !!(p.variants && p.variants.length) || !!(p.availableSizes && p.availableSizes.length) || !!(p.availableColors && p.availableColors.length);
    if (needsOptions) {
      this.router.navigate(["/products", p.id]);
      return;
    }
    this.cart.add(p);
  }
  static {
    this.\u0275fac = function ProductListComponent_Factory(t) {
      return new (t || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(HistoryService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 12, consts: [[1, "page-container"], [1, "container"], [1, "row", "g-4"], [1, "col-lg-3"], [1, "cs-card", "p-3", "sticky-top", 2, "top", "1rem"], [1, "fw-semibold", "mb-3"], [1, "form-label", "small", "mb-1"], ["type", "text", "placeholder", "Search products...", 1, "form-control", "cs-form-control", "mb-3", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "mb-3"], [1, "form-select", "cs-form-control", "mb-3", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "form-select", "cs-form-control", "mb-3", 3, "ngModelChange", "ngModel", "disabled"], [1, "d-grid", "gap-2"], [1, "btn", "btn-cs-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "col-lg-9"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "section-title", "mb-0"], [1, "text-muted", "small", "mt-1"], [1, "text-muted", "small"], [1, "text-center", "py-5"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "small", "text-muted"], [1, "d-flex", "flex-wrap", "gap-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", 3, "click"], [1, "spinner-border", "text-danger"], [1, "empty-state"], [1, "bi", "bi-search", "d-block"], [1, "col-6", "col-md-4"], [1, "mt-4", "d-flex", "justify-content-center"], [1, "cs-card", "product-card", "h-100"], [1, "text-decoration-none", 3, "routerLink"], [1, "product-img-wrap", "position-relative"], ["loading", "lazy", 3, "src", "alt"], [1, "badge", "bg-dark", "position-absolute", "top-0", "start-0", "m-2", 2, "font-size", "0.65rem"], [1, "badge-sale"], [1, "badge-stock"], [1, "product-body"], [1, "product-brand"], [1, "text-muted", 2, "font-size", "0.7rem"], [1, "product-name"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "product-price"], [1, "original"], [1, "d-flex", "gap-1"], ["title", "Wishlist", 1, "btn", "btn-sm", "btn-link", "text-danger", "p-0", 3, "click"], [1, "bi"], [1, "btn", "btn-sm", "btn-cs-primary", 3, "click", "disabled"], [1, "bi", "bi-bag-plus"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
        \u0275\u0275text(6, "Search & filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "label", 6);
        \u0275\u0275text(8, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ProductListComponent_Template_input_keyup_enter_9_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, ProductListComponent_Conditional_10_Template, 7, 0, "div", 8);
        \u0275\u0275elementStart(11, "label", 6);
        \u0275\u0275text(12, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.categoryId, $event) || (ctx.categoryId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_select_ngModelChange_13_listener() {
          return ctx.onCategoryChange();
        });
        \u0275\u0275elementStart(14, "option", 10);
        \u0275\u0275text(15, "All categories");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(16, ProductListComponent_For_17_Template, 2, 2, "option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "label", 6);
        \u0275\u0275text(19, "Subcategory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.subcategoryId, $event) || (ctx.subcategoryId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_select_ngModelChange_20_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(21, "option", 10);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(23, ProductListComponent_For_24_Template, 2, 2, "option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 12)(26, "button", 13);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_26_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(27, "Apply");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 14);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_28_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(29, "Clear all");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "div")(33, "h2", 17);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, ProductListComponent_Conditional_35_Template, 2, 1, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 19);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, ProductListComponent_Conditional_38_Template, 2, 0, "div", 20)(39, ProductListComponent_Conditional_39_Template, 6, 0)(40, ProductListComponent_Conditional_40_Template, 4, 1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.history.searches().length ? 10 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.categoryId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rootCategories);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.subcategoryId);
        \u0275\u0275property("disabled", !ctx.categoryId || ctx.subcategories.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", !ctx.categoryId ? "Select a category first" : ctx.subcategories.length ? "All subcategories" : "No subcategories", " ");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.subcategories);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.breadcrumb ? 35 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.total, " products");
        \u0275\u0275advance();
        \u0275\u0275conditional(38, ctx.loading ? 38 : ctx.products.length === 0 ? 39 : 40);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src\\app\\features\\products\\product-list.component.ts", lineNumber: 168 });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=chunk-TAFI4P6H.js.map
