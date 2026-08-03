import {
  CartService
} from "./chunk-3S4V7AK4.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  HttpClient,
  Router,
  RouterLink,
  __async,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/payment.service.ts
var PaymentService = class _PaymentService {
  constructor(http) {
    this.http = http;
  }
  createSession(orderId) {
    return this.http.post(`${environment.apiUrl}/payments/create/${orderId}`, {});
  }
  verify(body) {
    return this.http.post(`${environment.apiUrl}/payments/verify`, body);
  }
  loadRazorpayScript() {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
      document.body.appendChild(s);
    });
  }
  static {
    this.\u0275fac = function PaymentService_Factory(t) {
      return new (t || _PaymentService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/payment/payment.component.ts
function PaymentComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_8_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function PaymentComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "strong");
    \u0275\u0275text(2, "Mock payment mode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function PaymentComponent_Conditional_8_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.payMock());
    });
    \u0275\u0275template(6, PaymentComponent_Conditional_8_Conditional_12_Conditional_6_Template, 1, 0, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.session.message, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.paying);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r1.paying ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay \u20B9", \u0275\u0275pipeBind2(8, 4, ctx_r1.session.amount, "1.0-0"), " (Mock success) ");
  }
}
function PaymentComponent_Conditional_8_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function PaymentComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function PaymentComponent_Conditional_8_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.payRazorpay());
    });
    \u0275\u0275template(1, PaymentComponent_Conditional_8_Conditional_13_Conditional_1_Template, 1, 0, "span", 16);
    \u0275\u0275text(2, " Pay with UPI / Card / NetBanking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, " Supports BHIM UPI QR, PhonePe, Google Pay, Paytm & more (enable methods in Razorpay Dashboard). ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.paying);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.paying ? 1 : -1);
  }
}
function PaymentComponent_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PaymentComponent_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Payment successful! Redirecting to your orders\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 9);
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, PaymentComponent_Conditional_8_Conditional_12_Template, 9, 7)(13, PaymentComponent_Conditional_8_Conditional_13_Template, 5, 2)(14, PaymentComponent_Conditional_8_Conditional_14_Template, 2, 1, "div", 12)(15, PaymentComponent_Conditional_8_Conditional_15_Template, 2, 0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.session.orderNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 5, ctx_r1.session.amount, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, ctx_r1.session.mock ? 12 : 13);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, ctx_r1.error ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r1.success ? 15 : -1);
  }
}
function PaymentComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 19);
    \u0275\u0275text(3, "My Orders");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error || "Unable to start payment");
  }
}
var PaymentComponent = class _PaymentComponent {
  constructor(route, router, payments, cart, seo) {
    this.route = route;
    this.router = router;
    this.payments = payments;
    this.cart = cart;
    this.seo = seo;
    this.session = null;
    this.loading = true;
    this.paying = false;
    this.error = "";
    this.success = false;
    this.clearCart = false;
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Secure Checkout",
      description: "Complete your Leo Wear order with our secure checkout.",
      canonicalPath: "/pay"
    });
    this.orderId = Number(this.route.snapshot.paramMap.get("orderId"));
    this.clearCart = this.route.snapshot.queryParamMap.get("clearCart") === "1";
    if (!this.orderId) {
      this.loading = false;
      this.error = "Invalid order";
      return;
    }
    this.payments.createSession(this.orderId).subscribe({
      next: (res) => {
        this.session = res.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || "Could not create payment session";
      }
    });
  }
  payMock() {
    if (!this.session)
      return;
    this.paying = true;
    this.error = "";
    this.payments.verify({ orderId: this.session.orderId, mockConfirm: true }).subscribe({
      next: () => this.onPaid(),
      error: (err) => {
        this.paying = false;
        this.error = err.error?.message || "Payment failed";
      }
    });
  }
  payRazorpay() {
    return __async(this, null, function* () {
      if (!this.session?.keyId || !this.session.razorpayOrderId)
        return;
      this.paying = true;
      this.error = "";
      try {
        yield this.payments.loadRazorpayScript();
      } catch {
        this.paying = false;
        this.error = "Could not load Razorpay. Check your network.";
        return;
      }
      const options = {
        key: this.session.keyId,
        amount: Math.round(Number(this.session.amount) * 100),
        currency: this.session.currency || "INR",
        name: this.session.companyName || "Leo Wear",
        description: `Order ${this.session.orderNumber}`,
        order_id: this.session.razorpayOrderId,
        // Enable UPI (QR + apps: PhonePe, BHIM, GPay), cards, netbanking, wallets
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true
        },
        config: {
          display: {
            blocks: {
              utib: {
                name: "Pay using UPI",
                instruments: [
                  { method: "upi" }
                ]
              },
              other: {
                name: "Other payment methods",
                instruments: [
                  { method: "card" },
                  { method: "netbanking" },
                  { method: "wallet" }
                ]
              }
            },
            sequence: ["block.utib", "block.other"],
            preferences: {
              show_default_blocks: true
            }
          }
        },
        prefill: {
          name: this.session.customerName || "",
          email: this.session.customerEmail || "",
          contact: this.session.customerPhone || "",
          method: "upi"
        },
        theme: { color: "#e94560" },
        remember_customer: true,
        handler: (response) => {
          this.payments.verify({
            orderId: this.session.orderId,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature
          }).subscribe({
            next: () => this.onPaid(),
            error: (err) => {
              this.paying = false;
              this.error = err.error?.message || "Verification failed";
            }
          });
        },
        modal: { ondismiss: () => {
          this.paying = false;
        } }
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        this.paying = false;
        this.error = "Payment failed or cancelled. Retry from My Orders.";
      });
      rzp.open();
    });
  }
  onPaid() {
    this.paying = false;
    this.success = true;
    if (this.clearCart)
      this.cart.clear();
    setTimeout(() => this.router.navigate(["/orders"]), 1200);
  }
  static {
    this.\u0275fac = function PaymentComponent_Factory(t) {
      return new (t || _PaymentComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentComponent, selectors: [["app-payment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page-container"], [1, "container", 2, "max-width", "520px"], [1, "cs-card", "p-4"], [1, "section-title", "mb-1"], [1, "text-muted", "small", "mb-4"], [1, "text-center", "py-5"], [1, "spinner-border", "text-danger"], [1, "mb-3"], [1, "d-flex", "justify-content-between"], [1, "text-muted"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "fs-4"], [1, "alert", "alert-danger", "small", "mt-3", "mb-0"], [1, "alert", "alert-success", "mt-3", "mb-0"], [1, "alert", "alert-warning", "small"], [1, "btn", "btn-cs-primary", "w-100", "btn-lg", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-muted", "small", "mt-2", "mb-0", "text-center"], [1, "alert", "alert-danger"], ["routerLink", "/orders", 1, "btn", "btn-outline-dark"]], template: function PaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Complete payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Secure checkout \u2014 UPI QR \xB7 PhonePe \xB7 GPay \xB7 BHIM \xB7 Cards (Razorpay)");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, PaymentComponent_Conditional_7_Template, 2, 0, "div", 5)(8, PaymentComponent_Conditional_8_Template, 16, 8)(9, PaymentComponent_Conditional_9_Template, 4, 1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.loading ? 7 : ctx.session ? 8 : 9);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentComponent, { className: "PaymentComponent", filePath: "src\\app\\features\\payment\\payment.component.ts", lineNumber: 61 });
})();
export {
  PaymentComponent
};
//# sourceMappingURL=chunk-EH56SG2A.js.map
