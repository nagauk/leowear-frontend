import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  SupportService
} from "./chunk-5PQR5J32.js";
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/support/feedback.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function FeedbackComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 6);
    \u0275\u0275text(2, "Your name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function FeedbackComponent_Conditional_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.guestName, $event) || (ctx_r1.form.guestName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function FeedbackComponent_Conditional_7_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.guestEmail, $event) || (ctx_r1.form.guestEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.guestName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.guestEmail);
  }
}
function FeedbackComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Submitting as ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_1_0.username);
  }
}
function FeedbackComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function FeedbackComponent_For_14_Template_button_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.rating = n_r4);
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.form.rating >= n_r4);
  }
}
function FeedbackComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function FeedbackComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success);
  }
}
function FeedbackComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
var FeedbackComponent = class _FeedbackComponent {
  constructor(support, auth, seo) {
    this.support = support;
    this.auth = auth;
    this.seo = seo;
    this.form = { guestName: "", guestEmail: "", rating: 0, comment: "" };
    this.loading = false;
    this.error = "";
    this.success = "";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Feedback",
      description: "Share your thoughts about Leo Wear \u2014 your feedback helps us improve.",
      canonicalPath: "/feedback"
    });
  }
  submit() {
    if (!this.form.rating)
      return;
    if (!this.auth.isLoggedIn() && !this.form.guestName?.trim()) {
      this.error = "Please enter your name";
      return;
    }
    this.loading = true;
    this.error = "";
    this.success = "";
    this.support.submitFeedback(this.form).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = res.message || "Thank you for your feedback!";
        this.form = { guestName: "", guestEmail: "", rating: 0, comment: "" };
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || "Failed to submit";
      }
    });
  }
  static {
    this.\u0275fac = function FeedbackComponent_Factory(t) {
      return new (t || _FeedbackComponent)(\u0275\u0275directiveInject(SupportService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackComponent, selectors: [["app-feedback"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 7, consts: [[1, "page-container"], [1, "container", 2, "max-width", "640px"], [1, "section-title", "mb-2"], [1, "text-muted", "mb-4"], [1, "cs-card", "p-4"], [1, "mb-3"], [1, "form-label"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "star-btn", 3, "active"], ["rows", "4", "name", "comment", "placeholder", "What did you like or what can we improve?", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "small"], [1, "alert", "alert-success", "small"], [1, "btn", "btn-cs-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["name", "name", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "small", "text-muted"], ["type", "button", 1, "btn", "star-btn", 3, "click"]], template: function FeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Share your feedback");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Help us improve Leo Wear. Anyone can leave feedback.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, FeedbackComponent_Conditional_7_Template, 8, 2)(8, FeedbackComponent_Conditional_8_Template, 4, 1);
        \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "Rating *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275repeaterCreate(13, FeedbackComponent_For_14_Template, 2, 2, "button", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 6);
        \u0275\u0275text(17, "Comments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "textarea", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FeedbackComponent_Template_textarea_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.comment, $event) || (ctx.form.comment = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, FeedbackComponent_Conditional_19_Template, 2, 1, "div", 10)(20, FeedbackComponent_Conditional_20_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275listener("click", function FeedbackComponent_Template_button_click_21_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(22, FeedbackComponent_Conditional_22_Template, 1, 0, "span", 13);
        \u0275\u0275text(23, " Submit feedback ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, !ctx.auth.isLoggedIn() ? 7 : 8);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.comment);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.error ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.success ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || !ctx.form.rating);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.loading ? 22 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.star-btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #d1d5db;\n  border: none;\n  background: transparent;\n  padding: 0 4px;\n}\n.star-btn.active[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n/*# sourceMappingURL=feedback.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackComponent, { className: "FeedbackComponent", filePath: "src\\app\\features\\support\\feedback.component.ts", lineNumber: 68 });
})();
export {
  FeedbackComponent
};
//# sourceMappingURL=chunk-RL2DHAVP.js.map
