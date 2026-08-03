import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MinLengthValidator,
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
  HttpClient,
  Router,
  RouterLink,
  Subject,
  __spreadValues,
  catchError,
  debounceTime,
  environment,
  of,
  switchMap,
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

// src/app/features/auth/register.component.ts
function RegisterComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldErrors["username"]);
  }
}
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Username is available");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldErrors["email"]);
  }
}
function RegisterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Email is available");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldErrors["password"]);
  }
}
function RegisterComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldErrors["phone"]);
  }
}
function RegisterComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Mobile number is available");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function RegisterComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
var RegisterComponent = class _RegisterComponent {
  get canSubmit() {
    return !!this.form.username && !!this.form.email && this.passwordOk && !this.fieldErrors["username"] && !this.fieldErrors["email"] && !this.fieldErrors["phone"] && this.usernameOk && this.emailOk;
  }
  constructor(auth, router, http, seo) {
    this.auth = auth;
    this.router = router;
    this.http = http;
    this.seo = seo;
    this.form = { username: "", email: "", password: "", fullName: "", phone: "", address: "" };
    this.loading = false;
    this.error = "";
    this.fieldErrors = {};
    this.usernameOk = false;
    this.emailOk = false;
    this.phoneOk = false;
    this.passwordOk = false;
    this.pwdRules = { min: false, upper: false, lower: false, digit: false, special: false };
    this.username$ = new Subject();
    this.email$ = new Subject();
    this.phone$ = new Subject();
    this.username$.pipe(debounceTime(400), switchMap((v) => {
      if (!v || v.length < 3)
        return of(null);
      if (!/^[a-zA-Z0-9._]+$/.test(v)) {
        this.fieldErrors["username"] = "Only letters, numbers, dots and underscores allowed";
        this.usernameOk = false;
        return of(null);
      }
      return this.http.get(`${environment.apiUrl}/auth/check-username`, { params: { value: v } }).pipe(catchError(() => of(null)));
    })).subscribe((res) => {
      if (!res)
        return;
      if (res.data?.available) {
        delete this.fieldErrors["username"];
        this.usernameOk = true;
      } else {
        this.fieldErrors["username"] = res.message || "Username is already registered";
        this.usernameOk = false;
      }
    });
    this.email$.pipe(debounceTime(400), switchMap((v) => {
      if (!v || !v.includes("@"))
        return of(null);
      return this.http.get(`${environment.apiUrl}/auth/check-email`, { params: { value: v } }).pipe(catchError(() => of(null)));
    })).subscribe((res) => {
      if (!res)
        return;
      if (res.data?.available) {
        delete this.fieldErrors["email"];
        this.emailOk = true;
      } else {
        this.fieldErrors["email"] = res.message || "Email is already registered";
        this.emailOk = false;
      }
    });
    this.phone$.pipe(debounceTime(400), switchMap((v) => {
      const digits = (v || "").replace(/\D/g, "");
      if (!digits) {
        delete this.fieldErrors["phone"];
        this.phoneOk = false;
        return of(null);
      }
      if (!/^[6-9]\d{9}$/.test(digits) && !/^91[6-9]\d{9}$/.test(digits)) {
        this.fieldErrors["phone"] = "Enter a valid 10-digit Indian mobile number";
        this.phoneOk = false;
        return of(null);
      }
      return this.http.get(`${environment.apiUrl}/auth/check-phone`, { params: { value: digits } }).pipe(catchError(() => of(null)));
    })).subscribe((res) => {
      if (!res)
        return;
      if (res.data?.available) {
        delete this.fieldErrors["phone"];
        this.phoneOk = true;
      } else {
        this.fieldErrors["phone"] = res.message || "Mobile number is already registered";
        this.phoneOk = false;
      }
    });
  }
  onUsernameChange(v) {
    this.usernameOk = false;
    delete this.fieldErrors["username"];
    this.username$.next(v?.trim() || "");
  }
  onEmailChange(v) {
    this.emailOk = false;
    delete this.fieldErrors["email"];
    this.email$.next(v?.trim() || "");
  }
  onPhoneChange(v) {
    this.phoneOk = false;
    delete this.fieldErrors["phone"];
    this.phone$.next(v || "");
  }
  validatePassword(pwd) {
    const p = pwd || "";
    this.pwdRules = {
      min: p.length >= 8,
      upper: /[A-Z]/.test(p),
      lower: /[a-z]/.test(p),
      digit: /\d/.test(p),
      special: /[@$!%*?&#^()_\-+={}\[\]|:;"'<>,./~`]/.test(p)
    };
    this.passwordOk = Object.values(this.pwdRules).every(Boolean);
    this.fieldErrors["password"] = this.passwordOk ? "" : "Password must have upper, lower, number and special character (min 8)";
    if (this.passwordOk)
      delete this.fieldErrors["password"];
  }
  onSubmit() {
    this.validatePassword(this.form.password);
    if (!this.canSubmit) {
      this.error = "Please fix the highlighted fields before submitting.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.auth.register(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/verify"]);
      },
      error: (err) => {
        this.loading = false;
        const data = err.error?.data;
        if (data && typeof data === "object") {
          this.fieldErrors = __spreadValues(__spreadValues({}, this.fieldErrors), data);
          this.error = err.error?.message || "Validation failed";
        } else {
          this.error = err.error?.message || "Registration failed";
        }
      }
    });
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Create Account",
      description: "Join Leo Wear \u2014 create an account to shop premium fashion and track your orders.",
      canonicalPath: "/register"
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 39, consts: [["f", "ngForm"], [1, "page-container"], [1, "auth-card"], [1, "text-center", "mb-4"], [1, "display-font"], [1, "text-muted"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "text", "name", "username", "required", "", "minlength", "3", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "invalid-feedback", "d-block"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "list-unstyled", "small", "mt-2", "mb-0", "pwd-rules"], ["type", "text", "name", "fullName", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "10-digit mobile", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["name", "address", "rows", "2", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], ["type", "submit", 1, "btn", "btn-cs-primary", "w-100", "btn-lg", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "mt-4", "mb-0", "text-muted", "small"], ["routerLink", "/login", 1, "fw-semibold", 2, "color", "var(--cs-accent)"], [1, "valid-feedback", "d-block"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
        \u0275\u0275text(4, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6, "Join Leo Wear today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 6, 0);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
        \u0275\u0275text(11, "Username *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.username, $event) || (ctx.form.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUsernameChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, RegisterComponent_Conditional_13_Template, 2, 1, "div", 10)(14, RegisterComponent_Conditional_14_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 8);
        \u0275\u0275text(17, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onEmailChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, RegisterComponent_Conditional_19_Template, 2, 1, "div", 10)(20, RegisterComponent_Conditional_20_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7)(22, "label", 8);
        \u0275\u0275text(23, "Password *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.validatePassword($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, RegisterComponent_Conditional_25_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(26, "ul", 13)(27, "li");
        \u0275\u0275text(28, "\u2022 At least 8 characters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275text(30, "\u2022 One uppercase letter (A\u2013Z)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275text(32, "\u2022 One lowercase letter (a\u2013z)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "li");
        \u0275\u0275text(34, "\u2022 One number (0\u20139)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275text(36, "\u2022 One special character (!@#$%\u2026)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 7)(38, "label", 8);
        \u0275\u0275text(39, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.fullName, $event) || (ctx.form.fullName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 7)(42, "label", 8);
        \u0275\u0275text(43, "Mobile number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPhoneChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, RegisterComponent_Conditional_45_Template, 2, 1, "div", 10)(46, RegisterComponent_Conditional_46_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 7)(48, "label", 8);
        \u0275\u0275text(49, "Address (optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "textarea", 16);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_textarea_ngModelChange_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.address, $event) || (ctx.form.address = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(51, RegisterComponent_Conditional_51_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(52, "button", 18);
        \u0275\u0275template(53, RegisterComponent_Conditional_53_Template, 1, 0, "span", 19);
        \u0275\u0275text(54, " Create Account ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "p", 20);
        \u0275\u0275text(56, " Already have an account? ");
        \u0275\u0275elementStart(57, "a", 21);
        \u0275\u0275text(58, "Sign In");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275classProp("is-invalid", !!ctx.fieldErrors["username"])("is-valid", ctx.usernameOk);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.username);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.fieldErrors["username"] ? 13 : ctx.usernameOk ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("is-invalid", !!ctx.fieldErrors["email"])("is-valid", ctx.emailOk);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.fieldErrors["email"] ? 19 : ctx.emailOk ? 20 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("is-invalid", !!ctx.fieldErrors["password"])("is-valid", ctx.passwordOk);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.fieldErrors["password"] ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ok", ctx.pwdRules.min);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ok", ctx.pwdRules.upper);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ok", ctx.pwdRules.lower);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ok", ctx.pwdRules.digit);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ok", ctx.pwdRules.special);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.fullName);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("is-invalid", !!ctx.fieldErrors["phone"])("is-valid", ctx.phoneOk);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.fieldErrors["phone"] ? 45 : ctx.phoneOk ? 46 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.address);
        \u0275\u0275advance();
        \u0275\u0275conditional(51, ctx.error ? 51 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || !ctx.canSubmit);
        \u0275\u0275advance();
        \u0275\u0275conditional(53, ctx.loading ? 53 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, EmailValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.pwd-rules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.pwd-rules[_ngcontent-%COMP%]   li.ok[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 500;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register.component.ts", lineNumber: 118 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-CBUPDAD5.js.map
