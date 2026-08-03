import {
  SettingsService
} from "./chunk-QNYGSO35.js";
import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  SupportService
} from "./chunk-5PQR5J32.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/admin/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSettingsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.settingsMsg);
  }
}
function AdminSettingsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function AdminSettingsComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveSettings());
    });
    \u0275\u0275text(1, "Save settings");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.saving);
  }
}
function AdminSettingsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No complaints yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_37_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", c_r4.orderNumber, " ");
  }
}
function AdminSettingsComponent_Conditional_37_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275template(8, AdminSettingsComponent_Conditional_37_For_1_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 25);
    \u0275\u0275listener("ngModelChange", function AdminSettingsComponent_Conditional_37_For_1_Template_select_ngModelChange_9_listener($event) {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateComplaint(c_r4, $event));
    });
    \u0275\u0275elementStart(10, "option", 26);
    \u0275\u0275text(11, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 27);
    \u0275\u0275text(13, "In progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 28);
    \u0275\u0275text(15, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 29);
    \u0275\u0275text(17, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "p", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 31)(21, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Conditional_37_For_1_Template_input_ngModelChange_21_listener($event) {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(c_r4.adminResponse, $event) || (c_r4.adminResponse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 33);
    \u0275\u0275listener("click", function AdminSettingsComponent_Conditional_37_For_1_Template_button_click_22_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateComplaint(c_r4, c_r4.status || "IN_PROGRESS", true));
    });
    \u0275\u0275text(23, " Reply ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r4.username, " \xB7 ", \u0275\u0275pipeBind2(7, 8, c_r4.createdAt, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, c_r4.orderNumber ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", c_r4.status);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(c_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", c_r4.adminResponse);
    \u0275\u0275property("name", "resp" + c_r4.id);
  }
}
function AdminSettingsComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminSettingsComponent_Conditional_37_For_1_Template, 24, 11, "div", 22, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.complaints);
  }
}
function AdminSettingsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No feedback yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_42_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.comment);
  }
}
function AdminSettingsComponent_Conditional_42_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminSettingsComponent_Conditional_42_For_1_Conditional_9_Template, 2, 1, "p", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.username || f_r5.guestName || "Guest");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.stars(f_r5.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 4, f_r5.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, f_r5.comment ? 9 : -1);
  }
}
function AdminSettingsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminSettingsComponent_Conditional_42_For_1_Template, 10, 7, "div", 34, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.feedback);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor(settingsService, support, auth, seo) {
    this.settingsService = settingsService;
    this.support = support;
    this.auth = auth;
    this.seo = seo;
    this.settings = { deliveryCharge: 49, freeDeliveryMinAmount: 999 };
    this.settingsMsg = "";
    this.saving = false;
    this.complaints = [];
    this.feedback = [];
    this.isAdmin = this.auth.isAdmin;
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Complaints & Feedback",
      description: "Leo Wear admin \u2014 manage complaints, feedback, and delivery settings.",
      canonicalPath: "/admin/settings",
      noindex: true
    });
    this.settingsService.getDelivery().subscribe((res) => {
      if (res.data)
        this.settings = res.data;
    });
    this.support.allComplaints().subscribe((res) => this.complaints = res.data?.content || []);
    this.support.allFeedback().subscribe((res) => this.feedback = res.data?.content || []);
  }
  saveSettings() {
    this.saving = true;
    this.settingsService.updateDelivery(this.settings).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.data)
          this.settings = res.data;
        this.settingsMsg = "Delivery settings saved";
        setTimeout(() => this.settingsMsg = "", 2500);
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  updateComplaint(c, status, withReply = false) {
    this.support.updateComplaint(c.id, status, withReply ? c.adminResponse : void 0).subscribe({
      next: (res) => {
        if (res.data)
          Object.assign(c, res.data);
      }
    });
  }
  stars(n) {
    return "\u2605".repeat(n || 0) + "\u2606".repeat(5 - (n || 0));
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(SupportService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 6, consts: [[1, "page-container"], [1, "container-fluid", "px-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/orders", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/returns", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/settings", 1, "btn", "btn-cs-dark", "btn-sm"], [1, "section-title", "mb-4"], [1, "row", "g-4"], [1, "col-lg-4"], [1, "cs-card", "p-4"], [1, "mb-3"], [1, "form-label"], ["type", "number", "min", "0", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "form-text"], [1, "alert", "alert-success", "small", "py-2"], [1, "btn", "btn-cs-primary", 3, "disabled"], [1, "col-lg-8"], [1, "cs-card", "p-4", "mb-4"], [1, "text-muted", "small"], [1, "btn", "btn-cs-primary", 3, "click", "disabled"], [1, "border", "rounded", "p-3", "mb-2"], [1, "d-flex", "justify-content-between", "flex-wrap", "gap-2"], [1, "small", "text-muted"], [1, "form-select", "form-select-sm", 2, "width", "140px", 3, "ngModelChange", "ngModel"], ["value", "OPEN"], ["value", "IN_PROGRESS"], ["value", "RESOLVED"], ["value", "CLOSED"], [1, "small", "mb-2", "mt-2"], [1, "input-group", "input-group-sm"], ["placeholder", "Admin response", 1, "form-control", 3, "ngModelChange", "ngModel", "name"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "border-bottom", "py-2"], [1, "d-flex", "justify-content-between"], [1, "text-warning"], [1, "small", "mb-0", "mt-1"]], template: function AdminSettingsComponent_Template(rf, ctx) {
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
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12, "Settings & Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "h2", 8);
        \u0275\u0275text(14, "Settings & Customer Voice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
        \u0275\u0275text(19, "Delivery charges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
        \u0275\u0275text(22, "Default delivery charge (\u20B9)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings.deliveryCharge, $event) || (ctx.settings.deliveryCharge = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 12)(25, "label", 13);
        \u0275\u0275text(26, "Free delivery above order amount (\u20B9)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings.freeDeliveryMinAmount, $event) || (ctx.settings.freeDeliveryMinAmount = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 15);
        \u0275\u0275text(29, "If cart subtotal \u2265 this amount, delivery is free.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, AdminSettingsComponent_Conditional_30_Template, 2, 1, "div", 16)(31, AdminSettingsComponent_Conditional_31_Template, 2, 1, "button", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "h5", 12);
        \u0275\u0275text(35, "Complaints");
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, AdminSettingsComponent_Conditional_36_Template, 2, 0, "p", 20)(37, AdminSettingsComponent_Conditional_37_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 11)(39, "h5", 12);
        \u0275\u0275text(40, "Customer feedback");
        \u0275\u0275elementEnd();
        \u0275\u0275template(41, AdminSettingsComponent_Conditional_41_Template, 2, 0, "p", 20)(42, AdminSettingsComponent_Conditional_42_Template, 2, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings.deliveryCharge);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings.freeDeliveryMinAmount);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(30, ctx.settingsMsg ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.isAdmin() ? 31 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(36, ctx.complaints.length === 0 ? 36 : 37);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(41, ctx.feedback.length === 0 ? 41 : 42);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src\\app\\features\\admin\\admin-settings.component.ts", lineNumber: 111 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=chunk-RR7QXLKU.js.map
