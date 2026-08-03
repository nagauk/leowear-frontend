import {
  OrderService
} from "./chunk-2PGALH47.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/admin/admin-returns.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminReturnsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No return requests");
    \u0275\u0275elementEnd()();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", r_r1.size, "", r_r1.size && r_r1.color ? " / " : "", "", r_r1.color, "");
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Qty ", r_r1.quantity, "");
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, AdminReturnsComponent_Conditional_15_For_27_Conditional_9_Conditional_1_Template, 2, 3, "div", 17)(2, AdminReturnsComponent_Conditional_15_For_27_Conditional_9_Conditional_2_Template, 2, 1, "div", 17);
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", r_r1.productName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(1, r_r1.size || r_r1.color ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, r_r1.quantity ? 2 : -1);
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Paid");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.orderPaymentStatus || "PENDING");
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Txn: ", r_r1.orderPaymentRef, "");
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Refunded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.refundTransactionId);
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "N/A (COD)");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Reversal pending");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function AdminReturnsComponent_Conditional_15_For_27_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const r_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.update(r_r1, "APPROVED"));
    });
    \u0275\u0275text(1, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275listener("click", function AdminReturnsComponent_Conditional_15_For_27_Conditional_32_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const r_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.update(r_r1, "REJECTED"));
    });
    \u0275\u0275text(3, "Reject");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const r_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.refundTxn[r_r1.id], $event) || (ctx_r2.refundTxn[r_r1.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.completeWithRefund(r_r1));
    });
    \u0275\u0275text(3, " Complete + save reversal ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.refundTxn[r_r1.id]);
    \u0275\u0275property("name", "refund" + r_r1.id);
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.update(r_r1, "COMPLETED"));
    });
    \u0275\u0275text(1, "Complete");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_0_Template, 4, 2)(1, AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r2.needsRefund(r_r1) ? 0 : 1);
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminReturnsComponent_Conditional_15_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275template(9, AdminReturnsComponent_Conditional_15_For_27_Conditional_9_Template, 3, 3)(10, AdminReturnsComponent_Conditional_15_For_27_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 15)(12, "div");
    \u0275\u0275template(13, AdminReturnsComponent_Conditional_15_For_27_Conditional_13_Template, 2, 0, "span", 16)(14, AdminReturnsComponent_Conditional_15_For_27_Conditional_14_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminReturnsComponent_Conditional_15_For_27_Conditional_17_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 20);
    \u0275\u0275template(21, AdminReturnsComponent_Conditional_15_For_27_Conditional_21_Template, 4, 1)(22, AdminReturnsComponent_Conditional_15_For_27_Conditional_22_Template, 2, 0)(23, AdminReturnsComponent_Conditional_15_For_27_Conditional_23_Template, 2, 0)(24, AdminReturnsComponent_Conditional_15_For_27_Conditional_24_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 21);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 22);
    \u0275\u0275template(32, AdminReturnsComponent_Conditional_15_For_27_Conditional_32_Template, 4, 0)(33, AdminReturnsComponent_Conditional_15_For_27_Conditional_33_Template, 2, 1)(34, AdminReturnsComponent_Conditional_15_For_27_Conditional_34_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.username);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, r_r1.productName ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(13, (r_r1.orderPaymentStatus || "").toUpperCase() === "PAID" ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.orderPaymentMethod || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(17, r_r1.orderPaymentRef ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, r_r1.refundTransactionId ? 21 : (r_r1.refundStatus || "") === "NOT_APPLICABLE" ? 22 : (r_r1.refundStatus || "") === "PENDING" ? 23 : 24);
    \u0275\u0275advance(5);
    \u0275\u0275classMap((r_r1.status || "").toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 14, r_r1.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(32, r_r1.status === "PENDING" ? 32 : r_r1.status === "APPROVED" ? 33 : 34);
  }
}
function AdminReturnsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "table", 14)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Order payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Refund / reversal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, AdminReturnsComponent_Conditional_15_For_27_Template, 35, 17, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r2.returns);
  }
}
var AdminReturnsComponent = class _AdminReturnsComponent {
  constructor(orderService, seo) {
    this.orderService = orderService;
    this.seo = seo;
    this.returns = [];
    this.loading = true;
    this.refundTxn = {};
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Manage Returns",
      description: "Leo Wear admin \u2014 manage return and refund requests.",
      canonicalPath: "/admin/returns",
      noindex: true
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.orderService.getAllReturns(0, 50).subscribe({
      next: (res) => {
        this.returns = res.data.content;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  /** Prepaid + paid orders need a reversal txn when completing return */
  needsRefund(r) {
    if (r.refundTransactionId)
      return false;
    if ((r.refundStatus || "") === "NOT_APPLICABLE")
      return false;
    const paid = (r.orderPaymentStatus || "").toUpperCase() === "PAID";
    const prepaid = (r.orderPaymentMethod || "").toUpperCase() === "PREPAID";
    return paid && prepaid;
  }
  update(r, status) {
    this.orderService.updateReturnStatus(r.id, status).subscribe(() => this.load());
  }
  completeWithRefund(r) {
    const txn = (this.refundTxn[r.id] || "").trim();
    if (!txn) {
      alert("Enter the reversal / refund transaction ID from your payment gateway or bank.");
      return;
    }
    this.orderService.updateReturnStatus(r.id, "COMPLETED", void 0, txn).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function AdminReturnsComponent_Factory(t) {
      return new (t || _AdminReturnsComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminReturnsComponent, selectors: [["app-admin-returns"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 1, consts: [[1, "page-container"], [1, "container-fluid", "px-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/orders", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/returns", 1, "btn", "btn-cs-dark", "btn-sm"], [1, "section-title", "mb-4"], [1, "text-center", "py-5"], [1, "spinner-border", "text-danger"], [1, "empty-state"], [1, "bi", "bi-arrow-return-left", "d-block"], [1, "cs-card", "p-0", "overflow-hidden"], [1, "table-responsive"], [1, "table", "cs-table", "mb-0", "align-middle"], [1, "small"], [1, "badge", "bg-success"], [1, "text-muted"], [1, "font-monospace", "text-muted", 2, "font-size", "0.7rem"], [1, "small", 2, "max-width", "160px"], [1, "small", 2, "min-width", "160px"], [1, "badge-status"], [2, "min-width", "200px"], [1, "badge", "bg-warning", "text-dark"], [1, "font-monospace", "text-muted", "mt-1", 2, "font-size", "0.7rem"], [1, "btn", "btn-sm", "btn-success", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "mb-1"], ["placeholder", "Reversal / refund Txn ID", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "text-muted", "small"]], template: function AdminReturnsComponent_Template(rf, ctx) {
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
        \u0275\u0275text(12, "Manage Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, AdminReturnsComponent_Conditional_13_Template, 2, 0, "div", 8)(14, AdminReturnsComponent_Conditional_14_Template, 4, 0)(15, AdminReturnsComponent_Conditional_15_Template, 28, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(13, ctx.loading ? 13 : ctx.returns.length === 0 ? 14 : 15);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminReturnsComponent, { className: "AdminReturnsComponent", filePath: "src\\app\\features\\admin\\admin-returns.component.ts", lineNumber: 124 });
})();
export {
  AdminReturnsComponent
};
//# sourceMappingURL=chunk-B6YSV4RH.js.map
