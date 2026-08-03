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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/auth/verify.component.ts
function VerifyComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Verified");
    \u0275\u0275elementEnd();
  }
}
function VerifyComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function VerifyComponent_Conditional_15_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailOtp, $event) || (ctx_r1.emailOtp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function VerifyComponent_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyEmail());
    });
    \u0275\u0275text(3, "Verify");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function VerifyComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resend("EMAIL_VERIFY", ctx_r1.email));
    });
    \u0275\u0275text(5, "Resend email OTP");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailOtp);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function VerifyComponent_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Verified");
    \u0275\u0275elementEnd();
  }
}
function VerifyComponent_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function VerifyComponent_Conditional_16_Conditional_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.phoneOtp, $event) || (ctx_r1.phoneOtp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function VerifyComponent_Conditional_16_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyPhone());
    });
    \u0275\u0275text(3, "Verify");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function VerifyComponent_Conditional_16_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resend("PHONE_VERIFY", ctx_r1.phone));
    });
    \u0275\u0275text(5, "Resend mobile OTP");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.phoneOtp);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function VerifyComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " /* mobile OTP disabled */ ");
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, VerifyComponent_Conditional_16_Conditional_5_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, VerifyComponent_Conditional_16_Conditional_6_Template, 6, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Mobile ", ctx_r1.phone, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r1.phoneVerified ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, !ctx_r1.phoneVerified ? 6 : -1);
  }
}
function VerifyComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function VerifyComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.info);
  }
}
function VerifyComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, "Continue shopping");
    \u0275\u0275elementEnd();
  }
}
var VerifyComponent = class _VerifyComponent {
  constructor(auth, router, seo) {
    this.auth = auth;
    this.router = router;
    this.seo = seo;
    this.email = "";
    this.phone = "";
    this.emailOtp = "";
    this.phoneOtp = "";
    this.emailVerified = false;
    this.phoneVerified = false;
    this.busy = false;
    this.error = "";
    this.info = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Verify Account",
      description: "Verify your Leo Wear account using the OTP sent to your email.",
      canonicalPath: "/verify",
      noindex: true
    });
    const u = this.auth.currentUser();
    if (!u) {
      this.router.navigate(["/login"]);
      return;
    }
    this.email = u.email || "";
    this.phone = u.phone || "";
    this.emailVerified = !!u.emailVerified;
    this.phoneVerified = !!u.phoneVerified;
  }
  resend(purpose, id) {
    this.error = "";
    this.info = "";
    this.auth.sendOtp(id, purpose).subscribe({
      next: () => this.info = "OTP resent \u2014 check backend console (dev).",
      error: (e) => this.error = e.error?.message || "Failed to send OTP"
    });
  }
  verifyEmail() {
    this.busy = true;
    this.error = "";
    this.auth.verifyEmail(this.email, this.emailOtp.trim()).subscribe({
      next: (res) => {
        this.busy = false;
        this.emailVerified = true;
        this.info = "Email verified";
      },
      error: (e) => {
        this.busy = false;
        this.error = e.error?.message || "Invalid email OTP";
      }
    });
  }
  verifyPhone() {
    this.busy = true;
    this.error = "";
    this.auth.verifyPhone(this.phone, this.phoneOtp.trim()).subscribe({
      next: () => {
        this.busy = false;
        this.phoneVerified = true;
        this.info = "Mobile verified";
      },
      error: (e) => {
        this.busy = false;
        this.error = e.error?.message || "Invalid mobile OTP";
      }
    });
  }
  static {
    this.\u0275fac = function VerifyComponent_Factory(t) {
      return new (t || _VerifyComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyComponent, selectors: [["app-verify"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 7, consts: [[1, "page-container"], [1, "container", 2, "max-width", "480px"], [1, "cs-card", "p-4"], [1, "section-title", "mb-2"], [1, "text-muted", "small", "mb-4"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-semibold"], [1, "badge", "bg-success"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-info", "small"], ["routerLink", "/", 1, "btn", "btn-cs-primary", "w-100"], [1, "input-group", "mb-2"], ["name", "emailOtp", "maxlength", "6", "placeholder", "Email OTP", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-cs-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "px-0", 3, "click"], ["name", "phoneOtp", "maxlength", "6", "placeholder", "Mobile OTP", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"]], template: function VerifyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Verify your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, " Enter the OTP sent to your ");
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, ". Mobile OTP is temporarily disabled. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "span", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, VerifyComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, VerifyComponent_Conditional_15_Template, 6, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, VerifyComponent_Conditional_16_Template, 7, 3, "div", 5)(17, VerifyComponent_Conditional_17_Template, 2, 1, "div", 9)(18, VerifyComponent_Conditional_18_Template, 2, 1, "div", 10)(19, VerifyComponent_Conditional_19_Template, 2, 0, "a", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1("Email ", ctx.email, "");
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.emailVerified ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, !ctx.emailVerified ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, false ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.error ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.info ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.emailVerified ? 19 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyComponent, { className: "VerifyComponent", filePath: "src\\app\\features\\auth\\verify.component.ts", lineNumber: 66 });
})();
export {
  VerifyComponent
};
//# sourceMappingURL=chunk-UDZH752Z.js.map
