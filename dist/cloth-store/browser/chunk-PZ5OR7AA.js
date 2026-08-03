import {
  OrderService
} from "./chunk-2PGALH47.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.id || $index;
var _c0 = () => [];
var _c1 = (a0) => ["/pay", a0];
var _c2 = (a0) => ({ orderId: a0 });
function OrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 6);
    \u0275\u0275listener("click", function OrdersComponent_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(3, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function OrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3, "No orders yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Start shopping to see your orders here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 9);
    \u0275\u0275text(7, "Browse Products");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_7_For_1_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", item_r3.size, "", item_r3.size && item_r3.color ? " / " : "", "", item_r3.color, " \xB7 ");
  }
}
function OrdersComponent_Conditional_7_For_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275template(6, OrdersComponent_Conditional_7_For_1_For_12_Conditional_6_Template, 2, 3, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.productImage || "https://via.placeholder.com/50", \u0275\u0275sanitizeUrl)("alt", item_r3.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, item_r3.size || item_r3.color ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Qty: ", item_r3.quantity, " \xD7 \u20B9", \u0275\u0275pipeBind2(8, 7, item_r3.unitPrice, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 10, item_r3.subtotal, "1.0-0"), "");
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 28);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", order_r4.shippingAddress, " ");
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", order_r4.paymentRef, "");
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, OrdersComponent_Conditional_7_For_1_Conditional_19_Conditional_2_Template, 2, 1, "span", 30);
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, order_r4.paymentRef ? 2 : -1);
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", order_r4.paymentMethod, ")");
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, OrdersComponent_Conditional_7_For_1_Conditional_20_Conditional_2_Template, 2, 1, "span", 30);
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r4.paymentStatus || "PENDING");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, order_r4.paymentMethod ? 2 : -1);
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, " Pay Now ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, order_r4.id));
  }
}
function OrdersComponent_Conditional_7_For_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1, " Request Return ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c2, order_r4.id));
  }
}
function OrdersComponent_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div")(3, "h6", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275repeaterCreate(11, OrdersComponent_Conditional_7_For_1_For_12_Template, 12, 13, "div", 16, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 13);
    \u0275\u0275template(15, OrdersComponent_Conditional_7_For_1_Conditional_15_Template, 2, 1);
    \u0275\u0275elementStart(16, "div", 18)(17, "span", 19);
    \u0275\u0275text(18, "Payment:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, OrdersComponent_Conditional_7_For_1_Conditional_19_Template, 3, 1)(20, OrdersComponent_Conditional_7_For_1_Conditional_20_Template, 3, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 21);
    \u0275\u0275template(25, OrdersComponent_Conditional_7_For_1_Conditional_25_Template, 3, 3, "a", 22)(26, OrdersComponent_Conditional_7_For_1_Conditional_26_Template, 2, 3, "a", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order ", order_r4.orderNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, order_r4.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap((order_r4.status || "").toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(order_r4.items || \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(15, order_r4.shippingAddress ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(19, (order_r4.paymentStatus || "").toUpperCase() === "PAID" ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(23, 13, order_r4.totalAmount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(25, ctx_r1.canPay(order_r4) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(26, order_r4.status === "DELIVERED" ? 26 : -1);
  }
}
function OrdersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrdersComponent_Conditional_7_For_1_Template, 27, 17, "div", 10, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.orders);
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(orderService, seo) {
    this.orderService = orderService;
    this.seo = seo;
    this.orders = [];
    this.loading = true;
    this.error = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "My Orders",
      description: "Track your Leo Wear orders and view order history.",
      canonicalPath: "/orders"
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.error = "";
    this.orderService.getMyOrders(0, 50).subscribe({
      next: (res) => {
        const data = res?.data;
        if (Array.isArray(data)) {
          this.orders = data;
        } else if (data?.content && Array.isArray(data.content)) {
          this.orders = data.content;
        } else if (data?.orders && Array.isArray(data.orders)) {
          this.orders = data.orders;
        } else {
          this.orders = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.orders = [];
        this.loading = false;
        this.error = err.error?.message || "Could not load orders. Please try again.";
      }
    });
  }
  canPay(order) {
    const paid = (order.paymentStatus || "").toUpperCase() === "PAID";
    const cancelled = ["CANCELLED", "RETURNED"].includes((order.status || "").toUpperCase());
    return !paid && !cancelled && order.needsPayment !== false;
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-container"], [1, "container"], [1, "section-title", "mb-4"], [1, "text-center", "py-5"], [1, "spinner-border", "text-danger"], [1, "alert", "alert-danger"], [1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click"], [1, "empty-state"], [1, "bi", "bi-box-seam", "d-block"], ["routerLink", "/products", 1, "btn", "btn-cs-primary", "mt-2"], [1, "cs-card", "p-4", "mb-3"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-start", "mb-3"], [1, "mb-1"], [1, "text-muted", "small"], [1, "badge-status"], [1, "row", "g-2", "mb-3"], [1, "col-12", "d-flex", "align-items-center", "gap-3"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "border-top", "pt-3", "gap-2"], [1, "mt-1"], [1, "me-2"], [1, "fw-bold", "fs-5"], [1, "mt-3", "d-flex", "flex-wrap", "gap-2"], [1, "btn", "btn-sm", "btn-cs-primary", 3, "routerLink"], ["routerLink", "/returns", 1, "btn", "btn-sm", "btn-outline-danger", 3, "queryParams"], ["width", "50", "height", "60", 2, "object-fit", "cover", "border-radius", "6px", 3, "src", "alt"], [1, "flex-grow-1"], [1, "fw-medium"], [1, "fw-semibold"], [1, "bi", "bi-geo-alt", "me-1"], [1, "badge", "bg-success"], [1, "text-muted", "ms-1"], [1, "badge", "bg-warning", "text-dark"], [1, "bi", "bi-credit-card", "me-1"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "My Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, OrdersComponent_Conditional_4_Template, 2, 0, "div", 3)(5, OrdersComponent_Conditional_5_Template, 4, 1)(6, OrdersComponent_Conditional_6_Template, 8, 0)(7, OrdersComponent_Conditional_7_Template, 2, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading ? 4 : ctx.error ? 5 : ctx.orders.length === 0 ? 6 : 7);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\features\\orders\\orders.component.ts", lineNumber: 97 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-PZ5OR7AA.js.map
