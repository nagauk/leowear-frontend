import {
  isLeoWearBrand
} from "./chunk-RP5B7XTV.js";
import {
  ProductService
} from "./chunk-WYUEELP6.js";
import {
  SettingsService
} from "./chunk-QNYGSO35.js";
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
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  DecimalPipe,
  NgTemplateOutlet,
  Router,
  RouterLink,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ search: "Leo Wear" });
var _c1 = (a0) => ({ $implicit: a0 });
var _c2 = () => ["/products"];
var _c3 = (a0) => ({ category: a0 });
var _c4 = (a0) => ["/products", a0];
function HomeComponent_Conditional_68_For_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HomeComponent_Conditional_68_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HomeComponent_Conditional_68_For_13_ng_container_1_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const card_r2 = \u0275\u0275reference(115);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", card_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, p_r1));
  }
}
function HomeComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "div", 23)(2, "div", 28)(3, "div")(4, "h2", 29);
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275text(6, "Your Loved Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Saved for later");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 41);
    \u0275\u0275text(10, "Wishlist");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26);
    \u0275\u0275repeaterCreate(12, HomeComponent_Conditional_68_For_13_Template, 2, 4, "div", 27, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.lovedProducts);
  }
}
function HomeComponent_Conditional_69_For_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HomeComponent_Conditional_69_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HomeComponent_Conditional_69_For_11_ng_container_1_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const card_r2 = \u0275\u0275reference(115);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", card_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, p_r4));
  }
}
function HomeComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 23)(2, "div", 28)(3, "div")(4, "h2", 29);
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275text(6, "Recently Viewed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Pick up where you left off");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275repeaterCreate(10, HomeComponent_Conditional_69_For_11_Template, 2, 4, "div", 27, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.recentProducts);
  }
}
function HomeComponent_Conditional_70_For_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HomeComponent_Conditional_70_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HomeComponent_Conditional_70_For_13_ng_container_1_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const card_r2 = \u0275\u0275reference(115);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", card_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, p_r5));
  }
}
function HomeComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "div", 23)(2, "div", 28)(3, "div")(4, "h2", 29);
    \u0275\u0275element(5, "i", 44);
    \u0275\u0275text(6, "Most Sold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Customer favourites");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 31);
    \u0275\u0275text(10, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26);
    \u0275\u0275repeaterCreate(12, HomeComponent_Conditional_70_For_13_Template, 2, 4, "div", 27, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r2.recentProducts.length ? "" : "#fff");
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.bestsellers);
  }
}
function HomeComponent_For_79_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c2))("queryParams", \u0275\u0275pureFunction1(4, _c3, sub_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r6.name, " ");
  }
}
function HomeComponent_For_79_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, HomeComponent_For_79_Conditional_5_For_2_Template, 2, 6, "a", 49, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(cat_r7.children);
  }
}
function HomeComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 45)(2, "a", 46)(3, "h5", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, HomeComponent_For_79_Conditional_5_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c2))("queryParams", \u0275\u0275pureFunction1(5, _c3, cat_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r7.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, (cat_r7.children == null ? null : cat_r7.children.length) ? 5 : -1);
  }
}
function HomeComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 50);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_91_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HomeComponent_Conditional_91_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HomeComponent_Conditional_91_For_2_ng_container_1_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const card_r2 = \u0275\u0275reference(115);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", card_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, p_r8));
  }
}
function HomeComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_91_For_2_Template, 2, 4, "div", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products);
  }
}
function HomeComponent_ng_template_114_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Our Choice");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_ng_template_114_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "SALE");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_ng_template_114_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "Leo Wear");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "a", 52)(2, "div", 53);
    \u0275\u0275element(3, "img", 54);
    \u0275\u0275template(4, HomeComponent_ng_template_114_Conditional_4_Template, 2, 0, "span", 55)(5, HomeComponent_ng_template_114_Conditional_5_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 57)(7, "div", 58);
    \u0275\u0275text(8);
    \u0275\u0275template(9, HomeComponent_ng_template_114_Conditional_9_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 52)(11, "div", 60);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 61);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c4, p_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r9.imageUrl || "https://via.placeholder.com/400x500?text=Leo+Wear", \u0275\u0275sanitizeUrl)("alt", p_r9.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r2.isLeo(p_r9.brand) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, p_r9.originalPrice && p_r9.originalPrice > p_r9.price ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r9.brand || "Leo Wear", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r2.isLeo(p_r9.brand) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c4, p_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(15, 10, p_r9.price, "1.0-0"), "");
  }
}
var HomeComponent = class _HomeComponent {
  constructor(productService, cart, router, wishlist, history, settings, seo) {
    this.productService = productService;
    this.cart = cart;
    this.router = router;
    this.wishlist = wishlist;
    this.history = history;
    this.settings = settings;
    this.seo = seo;
    this.products = [];
    this.bestsellers = [];
    this.lovedProducts = [];
    this.recentProducts = [];
    this.categoryTree = [];
    this.loading = true;
    this.loadingBest = true;
    this.freeDeliveryMin = 999;
    this.totalProducts = 0;
    this.categoryCount = 0;
    this.isLeo = isLeoWearBrand;
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Leo Wear \u2014 Premium Fashion for Men, Women & Kids",
      description: "Shop premium fashion for men, women & kids at Leo Wear. Trendy apparel, easy returns, secure checkout, and free shipping over " + this.freeDeliveryMin + " INR.",
      keywords: "Leo Wear, clothing, fashion, men, women, kids, t-shirts, jeans, online clothing store",
      canonicalPath: "/",
      type: "website",
      jsonLd: this.buildHomeJsonLd()
    });
    this.settings.getDelivery().subscribe({
      next: (res) => {
        if (res.data?.freeDeliveryMinAmount != null) {
          this.freeDeliveryMin = Number(res.data.freeDeliveryMinAmount);
        }
      }
    });
    this.productService.getCategoryTree().subscribe({
      next: (res) => {
        this.categoryTree = res.data || [];
        this.categoryCount = this.categoryTree.length;
      },
      error: () => {
        this.productService.getCategories().subscribe((r) => {
          this.categoryTree = r.data || [];
          this.categoryCount = this.categoryTree.length;
        });
      }
    });
    this.productService.getBestsellers(8).subscribe({
      next: (res) => {
        this.bestsellers = res.data || [];
        this.loadingBest = false;
      },
      error: () => this.loadingBest = false
    });
    this.productService.getProducts(0, 8).subscribe({
      next: (res) => {
        this.products = res.data?.content || [];
        this.totalProducts = res.data?.totalElements ?? this.products.length;
        this.loading = false;
      },
      error: () => this.loading = false
    });
    const lovedIds = this.wishlist.items().map((i) => i.productId).slice(0, 8);
    this.hydrateProducts(lovedIds, (list) => this.lovedProducts = list);
    const recentIds = this.history.recentViews().map((v) => v.productId).slice(0, 8);
    this.hydrateProducts(recentIds, (list) => this.recentProducts = list);
  }
  hydrateProducts(ids, assign) {
    if (!ids.length) {
      assign([]);
      return;
    }
    const unique = [...new Set(ids.map(Number))];
    const results = [];
    let pending = unique.length;
    unique.forEach((id) => {
      this.productService.getProduct(id).subscribe({
        next: (res) => {
          if (res.data)
            results.push(res.data);
          if (--pending === 0)
            assign(results);
        },
        error: () => {
          if (--pending === 0)
            assign(results);
        }
      });
    });
  }
  buildHomeJsonLd() {
    const base = (environment.siteUrl || "").replace(/\/$/, "");
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: "Leo Wear",
          url: base || "/",
          potentialAction: {
            "@type": "SearchAction",
            target: `${base}/products?search={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(HistoryService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 116, vars: 20, consts: [["card", ""], [1, "hero-section"], [1, "container", "position-relative"], [1, "row", "align-items-center", "g-4"], [1, "col-lg-6"], [1, "hero-eyebrow"], [1, "d-flex", "gap-3", "mt-4", "flex-wrap"], ["routerLink", "/products", 1, "btn", "btn-cs-primary", "btn-lg"], ["routerLink", "/products", 1, "btn", "btn-outline-light", "btn-lg", 3, "queryParams"], [1, "hero-stats"], [1, "col-lg-6", "d-none", "d-lg-block"], [1, "hero-collage"], [1, "hero-card", "hero-card-1"], [1, "bi", "bi-stars"], [1, "hero-card", "hero-card-2"], [1, "bi", "bi-truck"], [1, "hero-card", "hero-card-3"], [1, "bi", "bi-arrow-repeat"], [1, "hero-card", "hero-card-4"], [1, "bi", "bi-shield-check"], [1, "py-5"], [1, "py-5", 2, "background", "#fff"], [1, "py-5", 3, "background"], [1, "container"], [1, "section-title", "text-center"], [1, "section-subtitle", "text-center"], [1, "row", "g-4"], [1, "col-6", "col-md-3"], [1, "d-flex", "justify-content-between", "align-items-end", "mb-4"], [1, "section-title", "mb-1"], [1, "section-subtitle", "mb-0"], ["routerLink", "/products", 1, "btn", "btn-cs-outline", "btn-sm"], [1, "text-center", "py-5"], [1, "row", "g-4", "text-center"], [1, "col-md-4"], [1, "bi", "bi-truck", "fs-1", 2, "color", "var(--cs-accent)"], [1, "mt-3"], [1, "text-muted", "small"], [1, "bi", "bi-arrow-repeat", "fs-1", 2, "color", "var(--cs-accent)"], [1, "bi", "bi-shield-check", "fs-1", 2, "color", "var(--cs-accent)"], [1, "bi", "bi-heart-fill", "text-danger", "me-2"], ["routerLink", "/wishlist", 1, "btn", "btn-cs-outline", "btn-sm"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "bi", "bi-clock-history", "me-2"], [1, "bi", "bi-fire", "me-2", "text-danger"], [1, "cs-card", "p-3", "h-100"], [1, "text-decoration-none", 3, "routerLink", "queryParams"], [1, "mb-2", 2, "color", "var(--cs-text)"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "badge", "rounded-pill", "text-bg-light", "border", "text-decoration-none", 3, "routerLink", "queryParams"], [1, "spinner-border", "text-danger"], [1, "cs-card", "product-card", "h-100"], [1, "text-decoration-none", 3, "routerLink"], [1, "product-img-wrap", "position-relative"], ["loading", "lazy", 3, "src", "alt"], [1, "badge-leo"], [1, "badge-sale"], [1, "product-body"], [1, "product-brand"], [1, "leo-tag"], [1, "product-name"], [1, "product-price", "mt-1"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
        \u0275\u0275text(5, "New Season \xB7 Spring '26");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "Elevate Your");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, "Style Everyday");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "Discover ");
        \u0275\u0275elementStart(12, "strong");
        \u0275\u0275text(13, "Leo Wear");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " \u2014 premium fashion for men, women & kids. Comfort meets timeless design.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "a", 7);
        \u0275\u0275text(17, "Shop Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 8);
        \u0275\u0275text(19, "Leo Wear Picks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "div")(22, "strong");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div")(27, "strong");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div")(32, "strong");
        \u0275\u0275text(33, "Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "number");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 11)(39, "div", 12);
        \u0275\u0275element(40, "i", 13);
        \u0275\u0275elementStart(41, "div")(42, "strong");
        \u0275\u0275text(43, "Our Choice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "Hand-picked Leo Wear styles");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 14);
        \u0275\u0275element(47, "i", 15);
        \u0275\u0275elementStart(48, "div")(49, "strong");
        \u0275\u0275text(50, "Free Shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 16);
        \u0275\u0275element(55, "i", 17);
        \u0275\u0275elementStart(56, "div")(57, "strong");
        \u0275\u0275text(58, "Easy Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span");
        \u0275\u0275text(60, "30-day window");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 18);
        \u0275\u0275element(62, "i", 19);
        \u0275\u0275elementStart(63, "div")(64, "strong");
        \u0275\u0275text(65, "Secure Checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "span");
        \u0275\u0275text(67, "Verified payments");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275template(68, HomeComponent_Conditional_68_Template, 14, 0, "section", 20)(69, HomeComponent_Conditional_69_Template, 12, 0, "section", 21)(70, HomeComponent_Conditional_70_Template, 14, 2, "section", 22);
        \u0275\u0275elementStart(71, "section", 20)(72, "div", 23)(73, "h2", 24);
        \u0275\u0275text(74, "Shop by Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p", 25);
        \u0275\u0275text(76, "Men, Women, Kids & more");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 26);
        \u0275\u0275repeaterCreate(78, HomeComponent_For_79_Template, 6, 7, "div", 27, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "section", 21)(81, "div", 23)(82, "div", 28)(83, "div")(84, "h2", 29);
        \u0275\u0275text(85, "Featured");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "p", 30);
        \u0275\u0275text(87, "Handpicked for you");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "a", 31);
        \u0275\u0275text(89, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(90, HomeComponent_Conditional_90_Template, 2, 0, "div", 32)(91, HomeComponent_Conditional_91_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "section", 20)(93, "div", 23)(94, "div", 33)(95, "div", 34);
        \u0275\u0275element(96, "i", 35);
        \u0275\u0275elementStart(97, "h5", 36);
        \u0275\u0275text(98, "Free Shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "p", 37);
        \u0275\u0275text(100);
        \u0275\u0275pipe(101, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 34);
        \u0275\u0275element(103, "i", 38);
        \u0275\u0275elementStart(104, "h5", 36);
        \u0275\u0275text(105, "Easy Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p", 37);
        \u0275\u0275text(107, "30-day return policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 34);
        \u0275\u0275element(109, "i", 39);
        \u0275\u0275elementStart(110, "h5", 36);
        \u0275\u0275text(111, "Secure Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "p", 37);
        \u0275\u0275text(113, "100% secure checkout");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(114, HomeComponent_ng_template_114_Template, 16, 17, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(19, _c0));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalProducts);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.categoryCount);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Over \u20B9", \u0275\u0275pipeBind2(36, 10, ctx.freeDeliveryMin, "1.0-0"), "");
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate("Over \u20B9" + \u0275\u0275pipeBind2(53, 13, ctx.freeDeliveryMin, "1.0-0"));
        \u0275\u0275advance(16);
        \u0275\u0275conditional(68, ctx.lovedProducts.length ? 68 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(69, ctx.recentProducts.length ? 69 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(70, !ctx.loadingBest && ctx.bestsellers.length ? 70 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.categoryTree);
        \u0275\u0275advance(12);
        \u0275\u0275conditional(90, ctx.loading ? 90 : 91);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("On orders over \u20B9", \u0275\u0275pipeBind2(101, 16, ctx.freeDeliveryMin, "1.0-0"), "");
      }
    }, dependencies: [CommonModule, NgTemplateOutlet, DecimalPipe, RouterLink], styles: ['\n\n.badge-leo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e,\n      #e94560);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 10px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(233, 69, 96, 0.35);\n}\n.leo-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #e94560;\n  border: 1px solid #e94560;\n  border-radius: 4px;\n  padding: 0 5px;\n  vertical-align: middle;\n}\n.badge-sale[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #e94560;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--cs-gold);\n  border: 1px solid rgba(212, 163, 115, 0.4);\n  background: rgba(212, 163, 115, 0.08);\n  padding: 4px 12px;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-top: 2rem;\n  flex-wrap: wrap;\n}\n.hero-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.hero-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: "Playfair Display", serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--cs-gold);\n}\n.hero-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-top: 2px;\n}\n.hero-collage[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  max-width: 520px;\n  margin-left: auto;\n}\n.hero-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--cs-radius);\n  padding: 1.25rem 1.1rem;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  transition: var(--cs-transition);\n}\n.hero-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  background: rgba(255, 255, 255, 0.14);\n  border-color: var(--cs-gold);\n}\n.hero-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: var(--cs-gold);\n  flex-shrink: 0;\n}\n.hero-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.hero-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-top: 2px;\n}\n.hero-card-1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n.hero-card-2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n.hero-card-3[_ngcontent-%COMP%] {\n  grid-area: 2/1/3/2;\n}\n.hero-card-4[_ngcontent-%COMP%] {\n  grid-area: 2/2/3/3;\n}\n@media (max-width: 991.98px) {\n  .hero-collage[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 1rem auto 0;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 338 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-HQE5HEK5.js.map
