import {
  AuthService
} from "./chunk-TKTZKSCX.js";
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
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/auth/change-password.component.ts
function ChangePasswordComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ChangePasswordComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(auth, seo) {
    this.auth = auth;
    this.seo = seo;
    this.current = "";
    this.next = "";
    this.confirm = "";
    this.saving = false;
    this.error = "";
    this.success = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Change Password",
      description: "Update your Leo Wear account password.",
      canonicalPath: "/change-password",
      noindex: true
    });
  }
  save() {
    if (this.next !== this.confirm) {
      this.error = "Passwords do not match";
      return;
    }
    this.saving = true;
    this.error = "";
    this.success = "";
    this.auth.changePassword(this.current, this.next).subscribe({
      next: () => {
        this.saving = false;
        this.success = "Password changed. Please login again if sessions were revoked.";
        this.current = "";
        this.next = "";
        this.confirm = "";
      },
      error: (e) => {
        this.saving = false;
        this.error = e.error?.message || "Failed";
      }
    });
  }
  static {
    this.\u0275fac = function ChangePasswordComponent_Factory(t) {
      return new (t || _ChangePasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 6, consts: [[1, "page-container"], [1, "container", 2, "max-width", "440px"], [1, "cs-card", "p-4"], [1, "section-title", "mb-3"], [1, "mb-3"], [1, "form-label"], ["type", "password", "name", "cur", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "next", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirm", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-success", "small"], [1, "btn", "btn-cs-primary", "w-100", 3, "click", "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/"]], template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Change password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Current password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.current, $event) || (ctx.current = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
        \u0275\u0275text(11, "New password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.next, $event) || (ctx.next = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 4)(14, "label", 5);
        \u0275\u0275text(15, "Confirm new password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirm, $event) || (ctx.confirm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, ChangePasswordComponent_Conditional_17_Template, 2, 1, "div", 9)(18, ChangePasswordComponent_Conditional_18_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_19_listener() {
          return ctx.save();
        });
        \u0275\u0275text(20, "Update password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
        \u0275\u0275text(23, "Home");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.current);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.next);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirm);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.error ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.success ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.saving);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src\\app\\features\\auth\\change-password.component.ts", lineNumber: 38 });
})();
export {
  ChangePasswordComponent
};
//# sourceMappingURL=chunk-OTVRBHUO.js.map
