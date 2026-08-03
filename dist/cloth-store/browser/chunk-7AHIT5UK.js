import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
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
  ɵɵclassProp,
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

// src/app/features/auth/login.component.ts
function LoginComponent_Conditional_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LoginComponent_Conditional_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_14_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogin());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "label", 12);
    \u0275\u0275text(3, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.username, $event) || (ctx_r1.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "label", 12);
    \u0275\u0275text(7, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_14_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "a", 16);
    \u0275\u0275text(11, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, LoginComponent_Conditional_14_Conditional_12_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(13, "button", 18);
    \u0275\u0275template(14, LoginComponent_Conditional_14_Conditional_14_Template, 1, 0, "span", 19);
    \u0275\u0275text(15, " Sign in ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(12, ctx_r1.error ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, ctx_r1.loading ? 14 : -1);
  }
}
function LoginComponent_Conditional_15_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LoginComponent_Conditional_15_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.info);
  }
}
function LoginComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_15_Conditional_0_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.otpId, $event) || (ctx_r1.otpId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5, "Mobile OTP is temporarily disabled \u2014 use email only.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LoginComponent_Conditional_15_Conditional_0_Conditional_6_Template, 2, 1, "div", 17)(7, LoginComponent_Conditional_15_Conditional_0_Conditional_7_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(8, "button", 23);
    \u0275\u0275listener("click", function LoginComponent_Conditional_15_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendLoginOtp());
    });
    \u0275\u0275text(9, " Send OTP ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.otpId);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(6, ctx_r1.error ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r1.info ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || !ctx_r1.otpId);
  }
}
function LoginComponent_Conditional_15_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LoginComponent_Conditional_15_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.info);
  }
}
function LoginComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Enter OTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_15_Conditional_1_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.otpCode, $event) || (ctx_r1.otpCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, LoginComponent_Conditional_15_Conditional_1_Conditional_4_Template, 2, 1, "div", 17)(5, LoginComponent_Conditional_15_Conditional_1_Conditional_5_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(6, "button", 25);
    \u0275\u0275listener("click", function LoginComponent_Conditional_15_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyLoginOtp());
    });
    \u0275\u0275text(7, " Verify & Sign in ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 26);
    \u0275\u0275listener("click", function LoginComponent_Conditional_15_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.otpStep = 1);
    });
    \u0275\u0275text(9, "Change email");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.otpCode);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.error ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r1.info ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || !ctx_r1.otpCode);
  }
}
function LoginComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LoginComponent_Conditional_15_Conditional_0_Template, 10, 4)(1, LoginComponent_Conditional_15_Conditional_1_Template, 10, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.otpStep === 1 ? 0 : 1);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, router, seo) {
    this.auth = auth;
    this.router = router;
    this.seo = seo;
    this.mode = "password";
    this.username = "";
    this.password = "";
    this.otpId = "";
    this.otpCode = "";
    this.otpStep = 1;
    this.loading = false;
    this.error = "";
    this.info = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Login",
      description: "Sign in to your Leo Wear account to track orders, save your wishlist, and check out faster.",
      canonicalPath: "/login"
    });
  }
  onLogin() {
    this.loading = true;
    this.error = "";
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        this.loading = false;
        const role = res.data?.role;
        if (role === "ADMIN")
          this.router.navigate(["/admin"]);
        else if (role === "EMPLOYEE")
          this.router.navigate(["/admin/products"]);
        else
          this.router.navigate(["/"]);
      },
      error: (e) => {
        this.loading = false;
        this.error = e.error?.message || "Login failed";
      }
    });
  }
  sendLoginOtp() {
    if (!this.otpId?.includes("@")) {
      this.error = "Please enter your registered email (mobile OTP is disabled).";
      return;
    }
    this.loading = true;
    this.error = "";
    this.info = "";
    this.auth.sendOtp(this.otpId.trim(), "LOGIN").subscribe({
      next: () => {
        this.loading = false;
        this.otpStep = 2;
        this.info = "OTP sent. Check backend console for the code (dev mode).";
      },
      error: (e) => {
        this.loading = false;
        this.error = e.error?.message || "Failed to send OTP";
      }
    });
  }
  verifyLoginOtp() {
    this.loading = true;
    this.error = "";
    this.auth.loginOtp(this.otpId.trim(), this.otpCode.trim()).subscribe({
      next: (res) => {
        this.loading = false;
        const role = res.data?.role;
        if (role === "ADMIN")
          this.router.navigate(["/admin"]);
        else if (role === "EMPLOYEE")
          this.router.navigate(["/admin/products"]);
        else
          this.router.navigate(["/"]);
      },
      error: (e) => {
        this.loading = false;
        this.error = e.error?.message || "Invalid OTP";
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 5, consts: [[1, "page-container"], [1, "container", 2, "max-width", "440px"], [1, "cs-card", "p-4"], [1, "section-title", "mb-1", "text-center"], [1, "text-muted", "text-center", "mb-3"], [1, "nav", "nav-pills", "nav-fill", "mb-4"], [1, "nav-item"], ["type", "button", 1, "nav-link", 3, "click"], [1, "text-center", "mt-4", "mb-0", "small"], ["routerLink", "/register"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["name", "username", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["routerLink", "/forgot-password", 1, "small"], [1, "alert", "alert-danger", "small"], [1, "btn", "btn-cs-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["name", "otpId", "placeholder", "you@example.com", "type", "email", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "form-text"], [1, "alert", "alert-info", "small"], [1, "btn", "btn-cs-primary", "w-100", 3, "click", "disabled"], ["name", "otpCode", "maxlength", "6", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-cs-primary", "w-100", "mb-2", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-link", "btn-sm", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Sign in to your Leo Wear account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "ul", 5)(8, "li", 6)(9, "button", 7);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_9_listener() {
          return ctx.mode = "password";
        });
        \u0275\u0275text(10, "Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 6)(12, "button", 7);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_12_listener() {
          return ctx.mode = "otp";
        });
        \u0275\u0275text(13, "OTP Login");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, LoginComponent_Conditional_14_Template, 16, 5, "form")(15, LoginComponent_Conditional_15_Template, 2, 1);
        \u0275\u0275elementStart(16, "p", 8);
        \u0275\u0275text(17, " New here? ");
        \u0275\u0275elementStart(18, "a", 9);
        \u0275\u0275text(19, "Create account");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.mode === "password");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.mode === "otp");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(14, ctx.mode === "password" ? 14 : 15);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgForm, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login.component.ts", lineNumber: 82 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-7AHIT5UK.js.map
