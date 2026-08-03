import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  Router,
  RouterLink,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/auth/forgot-password.component.ts
function ForgotPasswordComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ForgotPasswordComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.info);
  }
}
function ForgotPasswordComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function ForgotPasswordComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 8);
    \u0275\u0275text(2, "Email or mobile *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.identifier, $event) || (ctx_r1.identifier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ForgotPasswordComponent_Conditional_7_Conditional_4_Template, 2, 1, "div", 10)(5, ForgotPasswordComponent_Conditional_7_Conditional_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendOtp());
    });
    \u0275\u0275template(7, ForgotPasswordComponent_Conditional_7_Conditional_7_Template, 1, 0, "span", 13);
    \u0275\u0275text(8, " Send OTP ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.identifier);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.error ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r1.info ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sending || !ctx_r1.identifier);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r1.sending ? 7 : -1);
  }
}
function ForgotPasswordComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ForgotPasswordComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success);
  }
}
function ForgotPasswordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 8);
    \u0275\u0275text(2, "OTP *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.code, $event) || (ctx_r1.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
    \u0275\u0275text(6, "New password *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "label", 8);
    \u0275\u0275text(10, "Confirm password *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_8_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirm, $event) || (ctx_r1.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ForgotPasswordComponent_Conditional_8_Conditional_12_Template, 2, 1, "div", 10)(13, ForgotPasswordComponent_Conditional_8_Conditional_13_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_8_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(15, " Reset password ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 18);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_8_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step = 1);
    });
    \u0275\u0275text(17, "Resend OTP");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirm);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r1.error ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r1.success ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.resetting);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(auth, router, seo) {
    this.auth = auth;
    this.router = router;
    this.seo = seo;
    this.step = 1;
    this.identifier = "";
    this.code = "";
    this.newPassword = "";
    this.confirm = "";
    this.sending = false;
    this.resetting = false;
    this.error = "";
    this.info = "";
    this.success = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Reset Password",
      description: "Reset your Leo Wear account password securely using a one-time code.",
      canonicalPath: "/forgot-password"
    });
  }
  sendOtp() {
    this.sending = true;
    this.error = "";
    this.info = "";
    this.auth.forgotPassword(this.identifier.trim()).subscribe({
      next: () => {
        this.sending = false;
        this.step = 2;
        this.info = "OTP sent. In development, check backend console logs for the code.";
      },
      error: (e) => {
        this.sending = false;
        this.error = e.error?.message || "Failed to send OTP";
      }
    });
  }
  reset() {
    if (this.newPassword !== this.confirm) {
      this.error = "Passwords do not match";
      return;
    }
    this.resetting = true;
    this.error = "";
    this.auth.resetPassword(this.identifier.trim(), this.code.trim(), this.newPassword).subscribe({
      next: () => {
        this.resetting = false;
        this.success = "Password updated. Redirecting to login\u2026";
        setTimeout(() => this.router.navigate(["/login"]), 1500);
      },
      error: (e) => {
        this.resetting = false;
        this.error = e.error?.message || "Reset failed";
      }
    });
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "page-container"], [1, "container", 2, "max-width", "440px"], [1, "cs-card", "p-4"], [1, "section-title", "mb-1"], [1, "text-muted", "small", "mb-4"], [1, "text-center", "mt-3"], ["routerLink", "/login"], [1, "mb-3"], [1, "form-label"], ["name", "identifier", "placeholder", "you@example.com or 9876543210", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-info", "small"], [1, "btn", "btn-cs-primary", "w-100", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["name", "code", "maxlength", "6", "placeholder", "6-digit code", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "np", "placeholder", "Min 8 chars, upper, lower, number, special", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "cp", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-success", "small"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "mt-2", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Reset password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "We'll send a one-time code to your email or mobile.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ForgotPasswordComponent_Conditional_7_Template, 9, 5)(8, ForgotPasswordComponent_Conditional_8_Template, 18, 6);
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "Back to login");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.step === 1 ? 7 : 8);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\features\\auth\\forgot-password.component.ts", lineNumber: 60 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-25FI2DPK.js.map
