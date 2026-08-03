import {
  CartService
} from "./chunk-3S4V7AK4.js";
import {
  WishlistService
} from "./chunk-6IPBKY2M.js";
import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  CommonModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  switchMap,
  throwError,
  withInterceptors,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4SLSDIZ.js";

// src/app/app.component.ts
var _c0 = () => ({ category: 1 });
var _c1 = () => ({ category: 2 });
var _c2 = () => ({ category: 3 });
var _c3 = () => ({ exact: true });
function AppComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "a", 28);
    \u0275\u0275text(2, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li", 27)(4, "a", 29);
    \u0275\u0275text(5, "Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 27)(7, "a", 30);
    \u0275\u0275text(8, "Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li", 27)(10, "a", 31);
    \u0275\u0275text(11, "Returns");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 27)(13, "a", 32);
    \u0275\u0275text(14, "Complaints & Feedback");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 27)(16, "a", 33);
    \u0275\u0275text(17, "Employees");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "a", 29);
    \u0275\u0275text(2, "Products & Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li", 27)(4, "a", 30);
    \u0275\u0275text(5, "Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 27)(7, "a", 32);
    \u0275\u0275text(8, "Complaints");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "a", 37);
    \u0275\u0275text(2, "My Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li", 27)(4, "a", 38);
    \u0275\u0275text(5, "Returns");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "a", 34);
    \u0275\u0275text(2, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li", 27)(4, "a", 35);
    \u0275\u0275text(5, "Shop");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AppComponent_Conditional_12_Conditional_6_Template, 6, 0);
    \u0275\u0275elementStart(7, "li", 27)(8, "a", 36);
    \u0275\u0275text(9, "Feedback");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c3));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(6, ctx_r0.auth.isLoggedIn() ? 6 : -1);
  }
}
function AppComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.wishlist.count());
  }
}
function AppComponent_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cart.itemCount());
  }
}
function AppComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275template(2, AppComponent_Conditional_14_Conditional_2_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 42);
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275template(5, AppComponent_Conditional_14_Conditional_5_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r0.wishlist.count() > 0 ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, ctx_r0.cart.itemCount() > 0 ? 5 : -1);
  }
}
function AppComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 49);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275text(3, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 51);
    \u0275\u0275element(6, "i", 52);
    \u0275\u0275text(7, "Employees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275element(9, "hr", 53);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 54);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275text(3, "Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 56);
    \u0275\u0275element(6, "i", 57);
    \u0275\u0275text(7, "Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275element(9, "hr", 53);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 58);
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275text(3, "My Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 60);
    \u0275\u0275element(6, "i", 61);
    \u0275\u0275text(7, "Returns");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li")(9, "a", 62);
    \u0275\u0275element(10, "i", 63);
    \u0275\u0275text(11, "Complaints");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275element(13, "hr", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li")(15, "a", 64);
    \u0275\u0275element(16, "i", 65);
    \u0275\u0275text(17, "Verify account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 66);
    \u0275\u0275element(20, "i", 67);
    \u0275\u0275text(21, "Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275element(23, "hr", 53);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 44);
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 46);
    \u0275\u0275template(5, AppComponent_Conditional_15_Conditional_5_Template, 10, 0)(6, AppComponent_Conditional_15_Conditional_6_Template, 10, 0)(7, AppComponent_Conditional_15_Conditional_7_Template, 24, 0);
    \u0275\u0275elementStart(8, "li")(9, "button", 47);
    \u0275\u0275listener("click", function AppComponent_Conditional_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.auth.logout());
    });
    \u0275\u0275element(10, "i", 48);
    \u0275\u0275text(11, "Logout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_1_0.fullName) || ((tmp_1_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_1_0.username) || "Account", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, ctx_r0.auth.isAdmin() ? 5 : ctx_r0.auth.isEmployee() ? 6 : 7);
  }
}
function AppComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 69);
    \u0275\u0275text(3, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
var AppComponent = class _AppComponent {
  constructor(auth, cart, wishlist) {
    this.auth = auth;
    this.cart = cart;
    this.wishlist = wishlist;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(WishlistService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 9, consts: [[1, "navbar", "navbar-expand-lg", "cs-navbar"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navMain", 1, "navbar-toggler", "border-0"], [1, "bi", "bi-list", "text-white", "fs-3"], ["id", "navMain", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "ms-lg-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "dropdown"], [1, "cs-footer"], [1, "row", "g-4"], [1, "col-md-4"], [1, "small"], [1, "col-md-2"], [1, "list-unstyled", "small"], ["routerLink", "/products"], ["routerLink", "/products", 3, "queryParams"], [1, "col-md-3"], ["routerLink", "/orders"], ["routerLink", "/returns"], ["routerLink", "/wishlist"], ["routerLink", "/feedback"], ["routerLink", "/complaints"], [1, "small", "mb-1"], [1, "bi", "bi-envelope", "me-2"], [1, "bi", "bi-telephone", "me-2"], [1, "footer-bottom", "text-center"], [1, "nav-item"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin/returns", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin/settings", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin/employees", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/products", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/feedback", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/orders", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/returns", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/wishlist", "title", "Wishlist", 1, "btn", "btn-link", "text-white", "text-decoration-none", "btn-cart", "position-relative"], [1, "bi", "bi-heart", "fs-5"], [1, "badge"], ["routerLink", "/cart", "title", "Cart", 1, "btn", "btn-link", "text-white", "text-decoration-none", "btn-cart", "position-relative"], [1, "bi", "bi-bag", "fs-5"], ["type", "button", "id", "userMenuBtn", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-outline-light", "dropdown-toggle"], [1, "bi", "bi-person-circle", "me-1"], ["aria-labelledby", "userMenuBtn", 1, "dropdown-menu", "dropdown-menu-end", "shadow"], ["type", "button", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], ["routerLink", "/admin", 1, "dropdown-item"], [1, "bi", "bi-speedometer2", "me-2"], ["routerLink", "/admin/employees", 1, "dropdown-item"], [1, "bi", "bi-people", "me-2"], [1, "dropdown-divider"], ["routerLink", "/admin/products", 1, "dropdown-item"], [1, "bi", "bi-box-seam", "me-2"], ["routerLink", "/admin/orders", 1, "dropdown-item"], [1, "bi", "bi-receipt", "me-2"], ["routerLink", "/orders", 1, "dropdown-item"], [1, "bi", "bi-bag-check", "me-2"], ["routerLink", "/returns", 1, "dropdown-item"], [1, "bi", "bi-arrow-return-left", "me-2"], ["routerLink", "/complaints", 1, "dropdown-item"], [1, "bi", "bi-chat-left-text", "me-2"], ["routerLink", "/verify", 1, "dropdown-item"], [1, "bi", "bi-shield-check", "me-2"], ["routerLink", "/change-password", 1, "dropdown-item"], [1, "bi", "bi-key", "me-2"], ["routerLink", "/login", 1, "btn", "btn-sm", "btn-outline-light"], ["routerLink", "/register", 1, "btn", "btn-sm", "btn-cs-primary"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "Leo");
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "Wear");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275element(7, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "ul", 6);
        \u0275\u0275template(10, AppComponent_Conditional_10_Template, 18, 0)(11, AppComponent_Conditional_11_Template, 9, 0)(12, AppComponent_Conditional_12_Template, 10, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275template(14, AppComponent_Conditional_14_Template, 6, 2)(15, AppComponent_Conditional_15_Template, 12, 2, "div", 8)(16, AppComponent_Conditional_16_Template, 4, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "main");
        \u0275\u0275element(18, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "footer", 9)(20, "div", 1)(21, "div", 10)(22, "div", 11)(23, "h5");
        \u0275\u0275text(24, "Leo Wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 12);
        \u0275\u0275text(26, "Premium fashion for everyone. Quality clothing for men, women, and kids.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 13)(28, "h5");
        \u0275\u0275text(29, "Shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "ul", 14)(31, "li")(32, "a", 15);
        \u0275\u0275text(33, "All Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "li")(35, "a", 16);
        \u0275\u0275text(36, "Men");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "li")(38, "a", 16);
        \u0275\u0275text(39, "Women");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "li")(41, "a", 16);
        \u0275\u0275text(42, "Kids");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 17)(44, "h5");
        \u0275\u0275text(45, "Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ul", 14)(47, "li")(48, "a", 18);
        \u0275\u0275text(49, "Track Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "li")(51, "a", 19);
        \u0275\u0275text(52, "Returns");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "li")(54, "a", 20);
        \u0275\u0275text(55, "Wishlist");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "li")(57, "a", 21);
        \u0275\u0275text(58, "Feedback");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "li")(60, "a", 22);
        \u0275\u0275text(61, "Complaints");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 17)(63, "h5");
        \u0275\u0275text(64, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p", 23);
        \u0275\u0275element(66, "i", 24);
        \u0275\u0275text(67, "hello@clothstore.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 12);
        \u0275\u0275element(69, "i", 25);
        \u0275\u0275text(70, "+1 (555) 123-4567");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 26);
        \u0275\u0275text(72, " \xA9 2026 Leo Wear. All rights reserved. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.auth.isAdmin() ? 10 : ctx.auth.isEmployee() ? 11 : 12);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(14, !ctx.auth.isStaff() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.auth.isLoggedIn() ? 15 : 16);
        \u0275\u0275advance(20);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(7, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(8, _c2));
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 139 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  return router.createUrlTree(["/login"]);
};
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isAdmin())
    return true;
  if (auth.isLoggedIn() && auth.isEmployee())
    return router.createUrlTree(["/admin/products"]);
  return router.createUrlTree(["/login"]);
};
var staffGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isStaff())
    return true;
  return router.createUrlTree(["/login"]);
};
var customerOnlyGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isStaff()) {
    return router.createUrlTree([auth.isAdmin() ? "/admin" : "/admin/products"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-HQE5HEK5.js").then((m) => m.HomeComponent), canActivate: [customerOnlyGuard] },
  { path: "products", loadComponent: () => import("./chunk-TAFI4P6H.js").then((m) => m.ProductListComponent), canActivate: [customerOnlyGuard] },
  { path: "products/:id", loadComponent: () => import("./chunk-2QY3DH5X.js").then((m) => m.ProductDetailComponent), canActivate: [customerOnlyGuard] },
  { path: "cart", loadComponent: () => import("./chunk-5UMCURUA.js").then((m) => m.CartComponent), canActivate: [customerOnlyGuard] },
  { path: "wishlist", loadComponent: () => import("./chunk-3QVRVXB4.js").then((m) => m.WishlistComponent), canActivate: [customerOnlyGuard] },
  { path: "feedback", loadComponent: () => import("./chunk-RL2DHAVP.js").then((m) => m.FeedbackComponent), canActivate: [customerOnlyGuard] },
  { path: "complaints", loadComponent: () => import("./chunk-7L7WRKYT.js").then((m) => m.ComplaintsComponent), canActivate: [authGuard, customerOnlyGuard] },
  { path: "login", loadComponent: () => import("./chunk-7AHIT5UK.js").then((m) => m.LoginComponent) },
  { path: "register", loadComponent: () => import("./chunk-CBUPDAD5.js").then((m) => m.RegisterComponent) },
  { path: "forgot-password", loadComponent: () => import("./chunk-25FI2DPK.js").then((m) => m.ForgotPasswordComponent) },
  { path: "change-password", loadComponent: () => import("./chunk-OTVRBHUO.js").then((m) => m.ChangePasswordComponent), canActivate: [authGuard] },
  { path: "verify", loadComponent: () => import("./chunk-UDZH752Z.js").then((m) => m.VerifyComponent), canActivate: [authGuard] },
  { path: "orders", loadComponent: () => import("./chunk-PZ5OR7AA.js").then((m) => m.OrdersComponent), canActivate: [authGuard, customerOnlyGuard] },
  { path: "pay/:orderId", loadComponent: () => import("./chunk-EH56SG2A.js").then((m) => m.PaymentComponent), canActivate: [authGuard, customerOnlyGuard] },
  { path: "returns", loadComponent: () => import("./chunk-ITKQX7SS.js").then((m) => m.ReturnsComponent), canActivate: [authGuard, customerOnlyGuard] },
  {
    path: "admin",
    canActivate: [staffGuard],
    children: [
      { path: "", loadComponent: () => import("./chunk-Q24JKLDG.js").then((m) => m.DashboardComponent), canActivate: [adminGuard] },
      { path: "products", loadComponent: () => import("./chunk-PRXOWE2K.js").then((m) => m.AdminProductsComponent) },
      { path: "orders", loadComponent: () => import("./chunk-ARICUZ7K.js").then((m) => m.AdminOrdersComponent) },
      { path: "returns", loadComponent: () => import("./chunk-B6YSV4RH.js").then((m) => m.AdminReturnsComponent), canActivate: [adminGuard] },
      { path: "settings", loadComponent: () => import("./chunk-RR7QXLKU.js").then((m) => m.AdminSettingsComponent) },
      { path: "employees", loadComponent: () => import("./chunk-MJX325AT.js").then((m) => m.AdminEmployeesComponent), canActivate: [adminGuard] }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const isAuthEndpoint = req.url.includes("/auth/login") || req.url.includes("/auth/register") || req.url.includes("/auth/refresh");
  const token = auth.getAccessToken();
  let authReq = req;
  if (token && !isAuthEndpoint) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401 && !isAuthEndpoint && auth.getRefreshToken()) {
      return auth.refreshToken().pipe(switchMap((newAccessToken) => {
        const retryReq = req.clone({
          setHeaders: { Authorization: `Bearer ${newAccessToken}` }
        });
        return next(retryReq);
      }), catchError((refreshError) => throwError(() => refreshError)));
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
