import {
  OrderService
} from "./chunk-2PGALH47.js";
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
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/admin/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item["id"];
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_For_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1["orderNumber"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1["username"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 6, o_r1["totalAmount"], "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap((o_r1["status"] || "").toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1["status"]);
  }
}
function DashboardComponent_Conditional_14_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2["name"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2["stock"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 3, item_r2["price"], "1.0-0"), "");
  }
}
function DashboardComponent_Conditional_14_ForEmpty_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "All stocked up!");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275element(4, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9, "Total Sales");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 11)(11, "div", 12)(12, "div", 17);
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 16);
    \u0275\u0275text(17, "Total Orders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "div", 19);
    \u0275\u0275element(21, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16);
    \u0275\u0275text(25, "Active Products");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 11)(27, "div", 12)(28, "div", 21);
    \u0275\u0275element(29, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 15);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 16);
    \u0275\u0275text(33, "Customers");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 10)(35, "div", 11)(36, "div", 12)(37, "div", 23);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 16);
    \u0275\u0275text(40, "Pending Orders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "div", 24);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 16);
    \u0275\u0275text(46, "Delivered");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 11)(48, "div", 12)(49, "div", 25);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 16);
    \u0275\u0275text(52, "Low Stock Items");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 11)(54, "div", 12)(55, "div", 26);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 16);
    \u0275\u0275text(58, "Pending Returns");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 27)(60, "div", 28)(61, "div", 29)(62, "div", 30)(63, "h5", 31);
    \u0275\u0275text(64, "Recent Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "a", 32);
    \u0275\u0275text(66, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 33)(68, "table", 34)(69, "thead")(70, "tr")(71, "th");
    \u0275\u0275text(72, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "tbody");
    \u0275\u0275repeaterCreate(80, DashboardComponent_Conditional_14_For_81_Template, 12, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(82, "div", 35)(83, "div", 29)(84, "div", 36)(85, "h5", 31);
    \u0275\u0275text(86, "Low Stock Alert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 33)(88, "table", 34)(89, "thead")(90, "tr")(91, "th");
    \u0275\u0275text(92, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "th");
    \u0275\u0275text(94, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "th");
    \u0275\u0275text(96, "Price");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "tbody");
    \u0275\u0275repeaterCreate(98, DashboardComponent_Conditional_14_For_99_Template, 9, 6, "tr", null, _forTrack0, false, DashboardComponent_Conditional_14_ForEmpty_100_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 9, ctx_r2.stats.totalSales, "1.0-0"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalOrders);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalProducts);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalCustomers);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.stats.pendingOrders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.stats.deliveredOrders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.stats.lowStockProducts);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.stats.pendingReturns);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r2.stats.recentOrders);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.stats.lowStockItems);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(orderService, seo) {
    this.orderService = orderService;
    this.seo = seo;
    this.stats = null;
    this.loading = true;
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Admin Dashboard",
      description: "Leo Wear admin dashboard \u2014 sales, orders, products, and customers.",
      canonicalPath: "/admin",
      noindex: true
    });
    this.orderService.getDashboard().subscribe({
      next: (res) => {
        this.stats = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [[1, "page-container"], [1, "container-fluid", "px-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-cs-dark", "btn-sm"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/orders", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/returns", 1, "btn", "btn-outline-dark", "btn-sm"], [1, "section-title", "mb-4"], [1, "text-center", "py-5"], [1, "spinner-border", "text-danger"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "stat-card"], [1, "stat-icon", 2, "background", "#fef2f2", "color", "#e94560"], [1, "bi", "bi-currency-rupee"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", 2, "background", "#ecfdf5", "color", "#10b981"], [1, "bi", "bi-box-seam"], [1, "stat-icon", 2, "background", "#eff6ff", "color", "#3b82f6"], [1, "bi", "bi-bag"], [1, "stat-icon", 2, "background", "#fefce8", "color", "#eab308"], [1, "bi", "bi-people"], [1, "stat-value", "text-warning"], [1, "stat-value", "text-success"], [1, "stat-value", "text-danger"], [1, "stat-value", 2, "color", "var(--cs-accent)"], [1, "row", "g-4"], [1, "col-lg-7"], [1, "cs-card", "p-0", "overflow-hidden"], [1, "p-3", "border-bottom", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["routerLink", "/admin/orders", 1, "btn", "btn-sm", "btn-outline-dark"], [1, "table-responsive"], [1, "table", "cs-table", "mb-0"], [1, "col-lg-5"], [1, "p-3", "border-bottom"], [1, "badge-status"], [1, "badge", "bg-danger"], ["colspan", "3", 1, "text-center", "text-muted"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 4);
        \u0275\u0275text(6, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 5);
        \u0275\u0275text(8, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275text(10, "Returns");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "h2", 7);
        \u0275\u0275text(12, "Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, DashboardComponent_Conditional_13_Template, 2, 0, "div", 8)(14, DashboardComponent_Conditional_14_Template, 101, 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(13, ctx.loading ? 13 : ctx.stats ? 14 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\admin\\dashboard.component.ts", lineNumber: 147 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-Q24JKLDG.js.map
