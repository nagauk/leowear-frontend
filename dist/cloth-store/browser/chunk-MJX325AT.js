import {
  DefaultValueAccessor,
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
  RouterLink,
  environment,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/admin/admin-employees.component.ts
function AdminEmployeesComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminEmployeesComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function AdminEmployeesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
var AdminEmployeesComponent = class _AdminEmployeesComponent {
  constructor(http, seo) {
    this.http = http;
    this.seo = seo;
    this.form = { username: "", email: "", fullName: "", password: "" };
    this.loading = false;
    this.error = "";
    this.success = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Manage Employees",
      description: "Leo Wear admin \u2014 create staff accounts with limited access.",
      canonicalPath: "/admin/employees",
      noindex: true
    });
  }
  create() {
    this.loading = true;
    this.error = "";
    this.success = "";
    this.http.post(`${environment.apiUrl}/admin/employees`, this.form).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = `Employee "${res.data?.username || this.form.username}" created. Share username & password with them.`;
        this.form = { username: "", email: "", fullName: "", password: "" };
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || "Failed to create employee";
      }
    });
  }
  static {
    this.\u0275fac = function AdminEmployeesComponent_Factory(t) {
      return new (t || _AdminEmployeesComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEmployeesComponent, selectors: [["app-admin-employees"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 8, consts: [[1, "page-container"], [1, "container", 2, "max-width", "560px"], [1, "d-flex", "flex-wrap", "gap-2", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/employees", 1, "btn", "btn-cs-dark", "btn-sm"], [1, "cs-card", "p-4"], [1, "section-title", "mb-1"], [1, "text-muted", "small", "mb-4"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["name", "username", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["name", "fullName", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-success", "small"], [1, "btn", "btn-cs-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AdminEmployeesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 4);
        \u0275\u0275text(6, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 5);
        \u0275\u0275text(8, "Employees");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "h2", 7);
        \u0275\u0275text(11, "Create employee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, " Employees can manage products/stock, orders, and complaints \u2014 not dashboard, returns, or refunds. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "form", 9);
        \u0275\u0275listener("ngSubmit", function AdminEmployeesComponent_Template_form_ngSubmit_14_listener() {
          return ctx.create();
        });
        \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
        \u0275\u0275text(17, "Username *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmployeesComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.username, $event) || (ctx.form.username = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 10)(20, "label", 11);
        \u0275\u0275text(21, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmployeesComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "label", 11);
        \u0275\u0275text(25, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmployeesComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.fullName, $event) || (ctx.form.fullName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 10)(28, "label", 11);
        \u0275\u0275text(29, "Password *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmployeesComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, AdminEmployeesComponent_Conditional_31_Template, 2, 1, "div", 16)(32, AdminEmployeesComponent_Conditional_32_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(33, "button", 18);
        \u0275\u0275template(34, AdminEmployeesComponent_Conditional_34_Template, 1, 0, "span", 19);
        \u0275\u0275text(35, " Create employee account ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.username);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.fullName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.error ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.success ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.loading ? 34 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEmployeesComponent, { className: "AdminEmployeesComponent", filePath: "src\\app\\features\\admin\\admin-employees.component.ts", lineNumber: 55 });
})();
export {
  AdminEmployeesComponent
};
//# sourceMappingURL=chunk-MJX325AT.js.map
