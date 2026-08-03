import {
  OrderService
} from "./chunk-2PGALH47.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  DecimalPipe,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/returns/returns.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReturnsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", o_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", o_r1.orderNumber, " \xB7 \u20B9", \u0275\u0275pipeBind2(2, 4, o_r1.totalAmount, "1.0-0"), " \xB7 ", \u0275\u0275pipeBind2(3, 7, o_r1.createdAt, "mediumDate"), " ");
  }
}
function ReturnsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "No delivered orders available for return.");
    \u0275\u0275elementEnd();
  }
}
function ReturnsComponent_Conditional_22_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate3(" (", item_r4.size, "", item_r4.size && item_r4.color ? " / " : "", "", item_r4.color, ") ");
  }
}
function ReturnsComponent_Conditional_22_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReturnsComponent_Conditional_22_For_7_Conditional_2_Template, 1, 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.productName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, item_r4.size || item_r4.color ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 Qty ", item_r4.quantity, " \xB7 \u20B9", \u0275\u0275pipeBind2(4, 5, item_r4.unitPrice, "1.0-0"), " ");
  }
}
function ReturnsComponent_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 7);
    \u0275\u0275text(2, "Quantity to return *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ReturnsComponent_Conditional_22_Conditional_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.quantity, $event) || (ctx_r2.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.quantity);
    \u0275\u0275property("max", ctx_r2.selectedItem.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Max ", ctx_r2.selectedItem.quantity, "");
  }
}
function ReturnsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 7);
    \u0275\u0275text(2, "Item to return *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ReturnsComponent_Conditional_22_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.orderItemId, $event) || (ctx_r2.orderItemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReturnsComponent_Conditional_22_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemChange($event));
    });
    \u0275\u0275elementStart(4, "option", 9);
    \u0275\u0275text(5, "\u2014 Select item \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ReturnsComponent_Conditional_22_For_7_Template, 5, 8, "option", 9, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ReturnsComponent_Conditional_22_Conditional_8_Template, 6, 3, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.orderItemId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selectedOrder.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, ctx_r2.selectedItem ? 8 : -1);
  }
}
function ReturnsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function ReturnsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Return request submitted successfully!");
    \u0275\u0275elementEnd();
  }
}
function ReturnsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
function ReturnsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementEnd();
  }
}
function ReturnsComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275elementStart(2, "p", 31);
    \u0275\u0275text(3, "No return requests yet");
    \u0275\u0275elementEnd()();
  }
}
function ReturnsComponent_Conditional_51_For_1_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate3(" \xB7 ", r_r6.size, "", r_r6.size && r_r6.color ? " / " : "", "", r_r6.color, " ");
  }
}
function ReturnsComponent_Conditional_51_For_1_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" \xB7 Qty ", r_r6.quantity, " ");
  }
}
function ReturnsComponent_Conditional_51_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReturnsComponent_Conditional_51_For_1_Conditional_5_Conditional_2_Template, 1, 3)(3, ReturnsComponent_Conditional_51_For_1_Conditional_5_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r6.productName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, r_r6.size || r_r6.color ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, r_r6.quantity ? 3 : -1);
  }
}
function ReturnsComponent_Conditional_51_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Admin: ", r_r6.adminNotes, "");
  }
}
function ReturnsComponent_Conditional_51_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReturnsComponent_Conditional_51_For_1_Conditional_5_Template, 4, 3, "div", 34);
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ReturnsComponent_Conditional_51_For_1_Conditional_11_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", r_r6.orderNumber, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, r_r6.productName ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, r_r6.createdAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.reason);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, r_r6.adminNotes ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap((r_r6.status || "").toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.status);
  }
}
function ReturnsComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReturnsComponent_Conditional_51_For_1_Template, 14, 11, "div", 32, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.returns);
  }
}
var ReturnsComponent = class _ReturnsComponent {
  get returnableOrders() {
    return this.orders.filter((o) => (o.status || "").toUpperCase() === "DELIVERED");
  }
  get selectedOrder() {
    if (this.orderId == null)
      return null;
    return this.orders.find((o) => Number(o.id) === Number(this.orderId)) || null;
  }
  get selectedItem() {
    if (!this.selectedOrder || this.orderItemId == null)
      return null;
    return (this.selectedOrder.items || []).find((i) => Number(i.id) === Number(this.orderItemId)) || null;
  }
  get canSubmit() {
    return !!this.orderId && !!this.orderItemId && !!this.reason?.trim() && this.quantity >= 1 && (!this.selectedItem || this.quantity <= (this.selectedItem.quantity || 1));
  }
  constructor(orderService, route, seo) {
    this.orderService = orderService;
    this.route = route;
    this.seo = seo;
    this.returns = [];
    this.orders = [];
    this.loading = true;
    this.ordersLoaded = false;
    this.orderId = null;
    this.orderItemId = null;
    this.quantity = 1;
    this.reason = "";
    this.reasonPreset = "";
    this.submitting = false;
    this.error = "";
    this.success = false;
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Returns & Refunds",
      description: "Manage returns and refunds for your Leo Wear orders.",
      canonicalPath: "/returns"
    });
    this.route.queryParams.subscribe((p) => {
      if (p["orderId"])
        this.orderId = +p["orderId"];
    });
    this.loadReturns();
    this.loadOrders();
  }
  loadOrders() {
    this.orderService.getMyOrders(0, 50).subscribe({
      next: (res) => {
        this.orders = res.data?.content || [];
        this.ordersLoaded = true;
        if (this.orderId)
          this.onOrderChange(this.orderId);
      },
      error: () => {
        this.ordersLoaded = true;
      }
    });
  }
  loadReturns() {
    this.orderService.getMyReturns().subscribe({
      next: (res) => {
        this.returns = res.data?.content || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  onOrderChange(id) {
    this.orderId = id;
    this.orderItemId = null;
    this.quantity = 1;
    const order = this.selectedOrder;
    if (order?.items?.length === 1 && order.items[0].id != null) {
      this.orderItemId = Number(order.items[0].id);
      this.quantity = 1;
    }
  }
  onItemChange(_id) {
    this.quantity = 1;
  }
  onReasonPreset(val) {
    if (val && val !== "Other") {
      this.reason = val;
    } else if (val === "Other") {
      this.reason = "";
    }
  }
  submitReturn() {
    if (!this.canSubmit || this.orderId == null || this.orderItemId == null)
      return;
    this.submitting = true;
    this.error = "";
    this.success = false;
    this.orderService.createReturn({
      orderId: Number(this.orderId),
      orderItemId: Number(this.orderItemId),
      quantity: Number(this.quantity) || 1,
      reason: this.reason.trim()
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.success = true;
        this.reason = "";
        this.reasonPreset = "";
        this.orderId = null;
        this.orderItemId = null;
        this.quantity = 1;
        this.loadReturns();
      },
      error: (err) => {
        this.submitting = false;
        this.error = err.error?.message || "Failed to submit return";
      }
    });
  }
  static {
    this.\u0275fac = function ReturnsComponent_Factory(t) {
      return new (t || _ReturnsComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReturnsComponent, selectors: [["app-returns"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 11, consts: [[1, "page-container"], [1, "container", 2, "max-width", "820px"], [1, "section-title", "mb-4"], [1, "cs-card", "p-4", "mb-4"], [1, "mb-3"], [1, "text-muted", "small", "mb-3"], [3, "ngSubmit"], [1, "form-label"], ["name", "orderId", "required", "", 1, "form-select", "cs-form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "form-text", "text-muted"], ["name", "reasonPreset", 1, "form-select", "cs-form-control", "mb-2", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Wrong size"], ["value", "Wrong color / item received"], ["value", "Damaged / defective"], ["value", "Not as described"], ["value", "Changed mind"], ["value", "Other"], ["name", "reason", "rows", "3", "required", "", "placeholder", "Add more details (required)", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-success", "small"], ["type", "submit", 1, "btn", "btn-cs-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4"], ["name", "orderItemId", "required", "", 1, "form-select", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "quantity", "min", "1", "required", "", 1, "form-control", "cs-form-control", 2, "max-width", "120px", 3, "ngModelChange", "ngModel", "max"], [1, "form-text"], [1, "spinner-border", "text-danger"], [1, "empty-state", "py-4"], [1, "bi", "bi-arrow-return-left", "d-block"], [1, "mb-0"], [1, "cs-card", "p-3", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-start", "gap-2"], [1, "small", "mt-1"], [1, "text-muted", "small"], [1, "mt-1"], [1, "text-muted", "small", "mt-1"], [1, "badge-status"]], template: function ReturnsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "h5", 4);
        \u0275\u0275text(6, "Request a Return");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " Only ");
        \u0275\u0275elementStart(9, "strong");
        \u0275\u0275text(10, "delivered");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " orders can be returned. Select an order and the item you want to return. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "form", 6);
        \u0275\u0275listener("ngSubmit", function ReturnsComponent_Template_form_ngSubmit_12_listener() {
          return ctx.submitReturn();
        });
        \u0275\u0275elementStart(13, "div", 4)(14, "label", 7);
        \u0275\u0275text(15, "Order *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ReturnsComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.orderId, $event) || (ctx.orderId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ReturnsComponent_Template_select_ngModelChange_16_listener($event) {
          return ctx.onOrderChange($event);
        });
        \u0275\u0275elementStart(17, "option", 9);
        \u0275\u0275text(18, "\u2014 Select order \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, ReturnsComponent_For_20_Template, 4, 10, "option", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, ReturnsComponent_Conditional_21_Template, 2, 0, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, ReturnsComponent_Conditional_22_Template, 9, 3);
        \u0275\u0275elementStart(23, "div", 4)(24, "label", 7);
        \u0275\u0275text(25, "Reason *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ReturnsComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.reasonPreset, $event) || (ctx.reasonPreset = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ReturnsComponent_Template_select_ngModelChange_26_listener($event) {
          return ctx.onReasonPreset($event);
        });
        \u0275\u0275elementStart(27, "option", 12);
        \u0275\u0275text(28, "\u2014 Choose a reason \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 13);
        \u0275\u0275text(30, "Wrong size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 14);
        \u0275\u0275text(32, "Wrong color / item received");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 15);
        \u0275\u0275text(34, "Damaged / defective");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 16);
        \u0275\u0275text(36, "Not as described");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 17);
        \u0275\u0275text(38, "Changed mind");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 18);
        \u0275\u0275text(40, "Other");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "textarea", 19);
        \u0275\u0275twoWayListener("ngModelChange", function ReturnsComponent_Template_textarea_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, ReturnsComponent_Conditional_42_Template, 2, 1, "div", 20)(43, ReturnsComponent_Conditional_43_Template, 2, 0, "div", 21);
        \u0275\u0275elementStart(44, "button", 22);
        \u0275\u0275template(45, ReturnsComponent_Conditional_45_Template, 1, 0, "span", 23);
        \u0275\u0275text(46, " Submit Return Request ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "h5", 4);
        \u0275\u0275text(48, "My Return Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, ReturnsComponent_Conditional_49_Template, 2, 0, "div", 24)(50, ReturnsComponent_Conditional_50_Template, 4, 0)(51, ReturnsComponent_Conditional_51_Template, 2, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.orderId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.returnableOrders);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(21, ctx.ordersLoaded && ctx.returnableOrders.length === 0 ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.selectedOrder ? 22 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.reasonPreset);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.reason);
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.error ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(43, ctx.success ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.submitting || !ctx.canSubmit);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.submitting ? 45 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(49, ctx.loading ? 49 : ctx.returns.length === 0 ? 50 : 51);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReturnsComponent, { className: "ReturnsComponent", filePath: "src\\app\\features\\returns\\returns.component.ts", lineNumber: 133 });
})();
export {
  ReturnsComponent
};
//# sourceMappingURL=chunk-ITKQX7SS.js.map
