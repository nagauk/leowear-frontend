import {
  OrderService
} from "./chunk-2PGALH47.js";
import {
  SupportService
} from "./chunk-5PQR5J32.js";
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
  CommonModule,
  DatePipe,
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/support/complaints.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ComplaintsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", o_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", o_r1.orderNumber, " \xB7 \u20B9", \u0275\u0275pipeBind2(2, 3, o_r1.totalAmount, "1.0-0"), "");
  }
}
function ComplaintsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ComplaintsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success);
  }
}
function ComplaintsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function ComplaintsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 19);
    \u0275\u0275text(2, "No complaints yet.");
    \u0275\u0275elementEnd()();
  }
}
function ComplaintsComponent_Conditional_32_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 Order ", c_r3.orderNumber, " ");
  }
}
function ComplaintsComponent_Conditional_32_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "strong");
    \u0275\u0275text(2, "Support:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r3.adminResponse, " ");
  }
}
function ComplaintsComponent_Conditional_32_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275template(9, ComplaintsComponent_Conditional_32_For_1_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ComplaintsComponent_Conditional_32_For_1_Conditional_12_Template, 4, 1, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 6, c_r3.createdAt, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, c_r3.orderNumber ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, c_r3.adminResponse ? 12 : -1);
  }
}
function ComplaintsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ComplaintsComponent_Conditional_32_For_1_Template, 13, 9, "div", 20, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.list);
  }
}
var ComplaintsComponent = class _ComplaintsComponent {
  constructor(support, orderService, seo) {
    this.support = support;
    this.orderService = orderService;
    this.seo = seo;
    this.form = { subject: "", message: "", orderId: void 0 };
    this.list = [];
    this.orders = [];
    this.loading = false;
    this.loadingList = true;
    this.error = "";
    this.success = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Complaints",
      description: "Submit a complaint about a Leo Wear order. We respond within 24 hours.",
      canonicalPath: "/complaints"
    });
    this.load();
    this.orderService.getMyOrders(0, 20).subscribe({
      next: (res) => this.orders = res.data?.content || []
    });
  }
  load() {
    this.loadingList = true;
    this.support.myComplaints().subscribe({
      next: (res) => {
        this.list = res.data?.content || [];
        this.loadingList = false;
      },
      error: () => this.loadingList = false
    });
  }
  submit() {
    if (!this.form.subject?.trim() || !this.form.message?.trim()) {
      this.error = "Subject and message are required";
      return;
    }
    this.loading = true;
    this.error = "";
    this.success = "";
    this.support.submitComplaint(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Complaint submitted. We will respond soon.";
        this.form = { subject: "", message: "", orderId: void 0 };
        this.load();
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || "Failed to submit";
      }
    });
  }
  static {
    this.\u0275fac = function ComplaintsComponent_Factory(t) {
      return new (t || _ComplaintsComponent)(\u0275\u0275directiveInject(SupportService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplaintsComponent, selectors: [["app-complaints"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 8, consts: [[1, "page-container"], [1, "container"], [1, "section-title", "mb-4"], [1, "row", "g-4"], [1, "col-lg-5"], [1, "cs-card", "p-4"], [1, "mb-3"], [1, "form-label"], ["name", "orderId", 1, "form-select", "cs-form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["name", "subject", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "name", "message", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-success", "small"], [1, "btn", "btn-cs-primary", 3, "click", "disabled"], [1, "col-lg-7"], [1, "text-center", "py-4"], [1, "spinner-border", "text-danger"], [1, "empty-state"], [1, "text-muted"], [1, "cs-card", "p-3", "mb-3"], [1, "d-flex", "justify-content-between"], [1, "badge", "bg-secondary"], [1, "small", "text-muted", "mb-1"], [1, "mb-1"], [1, "alert", "alert-light", "border", "small", "mb-0", "mt-2"]], template: function ComplaintsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "My Complaints");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
        \u0275\u0275text(8, "Raise a complaint");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
        \u0275\u0275text(11, "Related order (optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ComplaintsComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.orderId, $event) || (ctx.form.orderId = $event);
          return $event;
        });
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "\u2014 None \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(15, ComplaintsComponent_For_16_Template, 3, 6, "option", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 6)(18, "label", 7);
        \u0275\u0275text(19, "Subject *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ComplaintsComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.subject, $event) || (ctx.form.subject = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6)(22, "label", 7);
        \u0275\u0275text(23, "Details *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "textarea", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ComplaintsComponent_Template_textarea_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, ComplaintsComponent_Conditional_25_Template, 2, 1, "div", 12)(26, ComplaintsComponent_Conditional_26_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(27, "button", 14);
        \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_27_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(28, "Submit complaint");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275template(30, ComplaintsComponent_Conditional_30_Template, 2, 0, "div", 16)(31, ComplaintsComponent_Conditional_31_Template, 3, 0)(32, ComplaintsComponent_Conditional_32_Template, 2, 0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.orderId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.orders);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.subject);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.message);
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.error ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ctx.success ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(30, ctx.loadingList ? 30 : ctx.list.length === 0 ? 31 : 32);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplaintsComponent, { className: "ComplaintsComponent", filePath: "src\\app\\features\\support\\complaints.component.ts", lineNumber: 77 });
})();
export {
  ComplaintsComponent
};
//# sourceMappingURL=chunk-7L7WRKYT.js.map
