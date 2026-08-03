import {
  SettingsService
} from "./chunk-QNYGSO35.js";
import {
  CartService
} from "./chunk-3S4V7AK4.js";
import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  OrderService
} from "./chunk-2PGALH47.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor,
  RequiredValidator
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
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
  ɵɵclassProp,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/address.service.ts
var AddressService = class _AddressService {
  constructor(http) {
    this.http = http;
  }
  list() {
    return this.http.get(`${environment.apiUrl}/addresses`);
  }
  create(data) {
    return this.http.post(`${environment.apiUrl}/addresses`, data);
  }
  update(id, data) {
    return this.http.put(`${environment.apiUrl}/addresses/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/addresses/${id}`);
  }
  setDefault(id) {
    return this.http.patch(`${environment.apiUrl}/addresses/${id}/default`, {});
  }
  static {
    this.\u0275fac = function AddressService_Factory(t) {
      return new (t || _AddressService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddressService, factory: _AddressService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/cart/cart.component.ts
function _forTrack0($index, $item) {
  return this.trackItem($item);
}
var _forTrack1 = ($index, $item) => $item.id;
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.staleMessage);
  }
}
function CartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Looks like you haven't added anything yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CartComponent_Conditional_5_Conditional_6_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(7, "a", 8);
    \u0275\u0275text(8, "Start Shopping");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r0.staleMessage ? 6 : -1);
  }
}
function CartComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.staleMessage);
  }
}
function CartComponent_Conditional_6_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 Size: ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.size);
  }
}
function CartComponent_Conditional_6_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 Color: ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.color);
  }
}
function CartComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "h6", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275template(7, CartComponent_Conditional_6_For_4_Conditional_7_Template, 3, 1, "strong")(8, CartComponent_Conditional_6_For_4_Conditional_8_Template, 3, 1, "strong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "button", 28);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_For_4_Template_button_click_13_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeQty(item_r3, item_r3.quantity - 1));
    });
    \u0275\u0275text(14, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 29);
    \u0275\u0275listener("change", function CartComponent_Conditional_6_For_4_Template_input_change_15_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeQty(item_r3, +$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_For_4_Template_button_click_16_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeQty(item_r3, item_r3.quantity + 1));
    });
    \u0275\u0275text(17, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 30);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 31);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_For_4_Template_button_click_21_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeItem(item_r3));
    });
    \u0275\u0275element(22, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_19_0;
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.imageUrl || item_r3.product.imageUrl || "https://via.placeholder.com/80x100", \u0275\u0275sanitizeUrl)("alt", item_r3.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.product.brand, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, item_r3.size ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, item_r3.color ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 9, (tmp_17_0 = item_r3.unitPrice) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : item_r3.product.price, "1.0-0"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", item_r3.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(20, 12, ((tmp_19_0 = item_r3.unitPrice) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : item_r3.product.price) * item_r3.quantity, "1.0-0"), " ");
  }
}
function CartComponent_Conditional_6_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "FREE");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_6_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(1, 1, ctx_r0.deliveryFee, "1.0-0"), " ");
  }
}
function CartComponent_Conditional_6_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Free delivery on orders \u20B9", \u0275\u0275pipeBind2(2, 2, ctx_r0.freeMin, "1.0-0"), "+ (add \u20B9", \u0275\u0275pipeBind2(3, 5, ctx_r0.freeMin - ctx_r0.cart.total(), "1.0-0"), " more) ");
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", a_r6.phone, "");
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 53)(1, "input", 54);
    \u0275\u0275listener("change", function CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Template_input_change_1_listener() {
      const a_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectAddress(a_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275template(5, CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Conditional_5_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Conditional_8_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r0.selectedAddressId === a_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedAddressId === a_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r6.label || "Address", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, a_r6.defaultAddress ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.formatted || a_r6.line1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, a_r6.phone ? 8 : -1);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, CartComponent_Conditional_6_Conditional_29_Conditional_6_For_2_Template, 9, 7, "label", 52, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.addresses);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("text-success", ctx_r0.pinValid)("text-danger", !ctx_r0.pinValid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pinMsg);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_7_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.label, $event) || (ctx_r0.newAddr.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.fullName, $event) || (ctx_r0.newAddr.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.line1, $event) || (ctx_r0.newAddr.line1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.line2, $event) || (ctx_r0.newAddr.line2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61)(6, "div", 62)(7, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.city, $event) || (ctx_r0.newAddr.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 62)(9, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.state, $event) || (ctx_r0.newAddr.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 61)(11, "div", 62)(12, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.pincode, $event) || (ctx_r0.newAddr.pincode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_blur_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.checkPincode());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CartComponent_Conditional_6_Conditional_29_Conditional_7_Conditional_13_Template, 2, 5, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 62)(15, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.phone, $event) || (ctx_r0.newAddr.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 68)(17, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAddr.defaultAddress, $event) || (ctx_r0.newAddr.defaultAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 70);
    \u0275\u0275text(19, "Save as default");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 71);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_Conditional_29_Conditional_7_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveNewAddress());
    });
    \u0275\u0275template(21, CartComponent_Conditional_6_Conditional_29_Conditional_7_Conditional_21_Template, 1, 0, "span", 72);
    \u0275\u0275text(22, " Save address ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.label);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.fullName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.line1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.line2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.city);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.state);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.pincode);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r0.pinMsg ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.phone);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAddr.defaultAddress);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.savingAddr || !ctx_r0.newAddr.line1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r0.savingAddr ? 21 : -1);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 38)(1, "summary", 74);
    \u0275\u0275text(2, "Or enter a one-time address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 75);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Conditional_8_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.oneTimeAddress, $event) || (ctx_r0.oneTimeAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.oneTimeAddress);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function CartComponent_Conditional_6_Conditional_29_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, " Order placed! ");
    \u0275\u0275elementStart(2, "a", 76);
    \u0275\u0275text(3, "View Orders");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_6_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 33)(2, "label", 34);
    \u0275\u0275text(3, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_Conditional_29_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showNewAddress = !ctx_r0.showNewAddress);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CartComponent_Conditional_6_Conditional_29_Conditional_6_Template, 3, 0, "div", 36)(7, CartComponent_Conditional_6_Conditional_29_Conditional_7_Template, 23, 12, "div", 37)(8, CartComponent_Conditional_6_Conditional_29_Conditional_8_Template, 4, 1, "details", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "label", 39);
    \u0275\u0275text(11, "Contact phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.phone, $event) || (ctx_r0.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "label", 41);
    \u0275\u0275text(15, "Payment method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 42)(17, "label", 43)(18, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentMethod, $event) || (ctx_r0.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 45);
    \u0275\u0275text(21, "Pay online (Prepaid)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 46);
    \u0275\u0275text(23, "UPI / Card / NetBanking \u2014 simulated secure payment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "label", 43)(25, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_6_Conditional_29_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentMethod, $event) || (ctx_r0.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "div", 45);
    \u0275\u0275text(28, "Cash on Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 46);
    \u0275\u0275text(30, "Pay when your order arrives");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "button", 48);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_Conditional_29_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.checkout());
    });
    \u0275\u0275template(32, CartComponent_Conditional_6_Conditional_29_Conditional_32_Template, 1, 0, "span", 49);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, CartComponent_Conditional_6_Conditional_29_Conditional_34_Template, 2, 1, "div", 50)(35, CartComponent_Conditional_6_Conditional_29_Conditional_35_Template, 4, 0, "div", 51);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showNewAddress ? "Cancel" : "+ New address", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.addresses.length > 0 && !ctx_r0.showNewAddress ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r0.showNewAddress || ctx_r0.addresses.length === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, !ctx_r0.showNewAddress && ctx_r0.addresses.length > 0 ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.phone);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-danger", ctx_r0.paymentMethod === "PREPAID")("bg-light", ctx_r0.paymentMethod === "PREPAID");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentMethod);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-danger", ctx_r0.paymentMethod === "COD")("bg-light", ctx_r0.paymentMethod === "COD");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentMethod);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.placing || ctx_r0.cart.items().length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(32, ctx_r0.placing ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentMethod === "PREPAID" ? "Continue to Payment" : "Place Order (COD)", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(34, ctx_r0.error ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(35, ctx_r0.success ? 35 : -1);
  }
}
function CartComponent_Conditional_6_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1, "Please login to place an order.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 78);
    \u0275\u0275text(3, "Login to Checkout");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartComponent_Conditional_6_Conditional_0_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11);
    \u0275\u0275repeaterCreate(3, CartComponent_Conditional_6_For_4_Template, 23, 15, "div", 12, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "h5", 15);
    \u0275\u0275text(8, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 16)(16, "span", 17);
    \u0275\u0275text(17, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275template(19, CartComponent_Conditional_6_Conditional_19_Template, 2, 0, "span", 18)(20, CartComponent_Conditional_6_Conditional_20_Template, 2, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, CartComponent_Conditional_6_Conditional_21_Template, 4, 8, "div", 19);
    \u0275\u0275element(22, "hr");
    \u0275\u0275elementStart(23, "div", 20)(24, "strong");
    \u0275\u0275text(25, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, CartComponent_Conditional_6_Conditional_29_Template, 36, 20)(30, CartComponent_Conditional_6_Conditional_30_Template, 4, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.staleMessage ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.cart.items());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r0.cart.itemCount(), " items)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 7, ctx_r0.cart.total(), "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(19, ctx_r0.deliveryFee === 0 ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, ctx_r0.deliveryFee > 0 && ctx_r0.freeMin > 0 ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(28, 10, ctx_r0.grandTotal, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(29, ctx_r0.auth.isLoggedIn() ? 29 : 30);
  }
}
var CartComponent = class _CartComponent {
  get deliveryFee() {
    const sub = this.cart.total();
    return sub >= this.freeMin ? 0 : this.deliveryCharge;
  }
  get grandTotal() {
    return this.cart.total() + this.deliveryFee;
  }
  constructor(cart, auth, orderService, addressService, settings, router, seo) {
    this.cart = cart;
    this.auth = auth;
    this.orderService = orderService;
    this.addressService = addressService;
    this.settings = settings;
    this.router = router;
    this.seo = seo;
    this.address = "";
    this.phone = "";
    this.placing = false;
    this.paymentMethod = "PREPAID";
    this.error = "";
    this.success = false;
    this.validating = true;
    this.staleMessage = "";
    this.addresses = [];
    this.selectedAddressId = null;
    this.showNewAddress = false;
    this.savingAddr = false;
    this.oneTimeAddress = "";
    this.newAddr = this.emptyAddr();
    this.deliveryCharge = 49;
    this.freeMin = 999;
    this.pinValid = false;
    this.pinMsg = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.seo.setPage({
        title: "Your Cart",
        description: "Review the items in your Leo Wear cart and proceed to secure checkout.",
        canonicalPath: "/cart"
      });
      this.validating = true;
      const removed = yield this.cart.validateAgainstServer();
      if (removed.length) {
        this.staleMessage = `Removed unavailable items from cart: ${removed.join(", ")}. Please add products again.`;
      }
      this.validating = false;
      this.settings.getDelivery().subscribe({
        next: (res) => {
          if (res.data) {
            this.deliveryCharge = Number(res.data.deliveryCharge) || 49;
            this.freeMin = Number(res.data.freeDeliveryMinAmount) || 999;
          }
        }
      });
      if (this.auth.isLoggedIn()) {
        this.loadAddresses();
      }
    });
  }
  checkPincode() {
    const pin = (this.newAddr.pincode || "").trim();
    this.pinMsg = "";
    this.pinValid = false;
    if (!pin)
      return;
    if (!/^[1-9][0-9]{5}$/.test(pin)) {
      this.pinMsg = "Enter a valid 6-digit PIN code";
      return;
    }
    this.settings.validatePincode(pin).subscribe({
      next: (res) => {
        const d = res.data;
        this.pinValid = !!d?.valid;
        if (d?.valid) {
          const place = [d.district, d.state].filter(Boolean).join(", ");
          this.pinMsg = place || "";
          if (d.district && !this.newAddr.city)
            this.newAddr.city = d.district;
          if (d.state && !this.newAddr.state)
            this.newAddr.state = d.state;
        } else {
          this.pinMsg = d?.message || "Invalid PIN code";
        }
      },
      error: () => {
        this.pinMsg = "Could not verify PIN code";
      }
    });
  }
  emptyAddr() {
    return {
      label: "Home",
      fullName: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      defaultAddress: false
    };
  }
  loadAddresses() {
    this.addressService.list().subscribe({
      next: (res) => {
        this.addresses = res.data || [];
        const def = this.addresses.find((a) => a.defaultAddress) || this.addresses[0];
        if (def?.id) {
          this.selectAddress(def);
        }
        if (this.addresses.length === 0) {
          this.showNewAddress = true;
        }
      },
      error: () => {
        this.addresses = [];
        this.showNewAddress = true;
      }
    });
  }
  selectAddress(a) {
    this.selectedAddressId = a.id ?? null;
    this.address = a.formatted || a.line1;
    if (a.phone)
      this.phone = a.phone;
    this.oneTimeAddress = "";
  }
  saveNewAddress() {
    if (!this.newAddr.line1?.trim())
      return;
    const pin = (this.newAddr.pincode || "").trim();
    if (pin && !this.pinValid && !/^[1-9][0-9]{5}$/.test(pin)) {
      this.error = "Please enter a valid Indian PIN code";
      return;
    }
    this.savingAddr = true;
    this.addressService.create(this.newAddr).subscribe({
      next: (res) => {
        this.savingAddr = false;
        this.showNewAddress = false;
        this.newAddr = this.emptyAddr();
        this.loadAddresses();
        if (res.data)
          this.selectAddress(res.data);
      },
      error: (err) => {
        this.savingAddr = false;
        this.error = err.error?.message || "Failed to save address";
      }
    });
  }
  trackItem(item) {
    return `${item.product.id}-${item.variantId ?? ""}-${item.size ?? ""}-${item.color ?? ""}`;
  }
  itemKey(item) {
    return {
      productId: Number(item.product.id),
      variantId: item.variantId != null ? Number(item.variantId) : void 0,
      size: item.size,
      color: item.color
    };
  }
  changeQty(item, qty) {
    this.cart.updateQuantity(this.itemKey(item), qty);
  }
  removeItem(item) {
    this.cart.remove(this.itemKey(item));
  }
  resolveShipping() {
    if (this.oneTimeAddress?.trim())
      return this.oneTimeAddress.trim();
    if (this.address?.trim())
      return this.address.trim();
    return "";
  }
  checkout() {
    return __async(this, null, function* () {
      this.placing = true;
      this.error = "";
      this.success = false;
      const incomplete = this.cart.items().filter((i) => {
        const p = i.product;
        const needs = !!(p?.variants && p.variants.length) || !!(p?.availableSizes && p.availableSizes.length) || !!(p?.availableColors && p.availableColors.length);
        return needs && (!(i.size || "").trim() || !(i.color || "").trim());
      });
      if (incomplete.length) {
        this.placing = false;
        this.error = "Please select size and color for: " + incomplete.map((i) => i.product.name).join(", ") + ". Remove the item and add it again from the product page.";
        return;
      }
      const shipping = this.resolveShipping();
      if (!shipping) {
        this.placing = false;
        this.error = "Please select or add a shipping address.";
        return;
      }
      const removed = yield this.cart.validateAgainstServer();
      if (removed.length) {
        this.placing = false;
        this.error = `Some items are no longer available (${removed.join(", ")}). Cart updated \u2014 please review and try again.`;
        return;
      }
      if (this.cart.items().length === 0) {
        this.placing = false;
        this.error = "Your cart is empty.";
        return;
      }
      const items = this.cart.items().map((i) => ({
        productId: Number(i.product.id),
        variantId: i.variantId != null ? Number(i.variantId) : void 0,
        size: i.size || void 0,
        color: i.color || void 0,
        quantity: Number(i.quantity)
      }));
      this.orderService.placeOrder({
        items,
        shippingAddress: shipping,
        phone: this.phone || void 0,
        pincode: this.newAddr.pincode || this.addresses.find((a) => a.id === this.selectedAddressId)?.pincode,
        paymentMethod: this.paymentMethod
      }).subscribe({
        next: (res) => {
          this.placing = false;
          const order = res.data;
          if (this.paymentMethod === "PREPAID" && order?.id) {
            this.router.navigate(["/pay", order.id], { queryParams: { clearCart: "1" } });
            return;
          }
          this.success = true;
          this.cart.clear();
          setTimeout(() => this.router.navigate(["/orders"]), 1500);
        },
        error: (err) => {
          this.placing = false;
          this.error = err.error?.message || "Failed to place order";
          if (this.error.toLowerCase().includes("product not found") || this.error.toLowerCase().includes("outdated")) {
            this.cart.clear();
            this.error += " Cart cleared \u2014 please add items again from the shop.";
          }
        }
      });
    });
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page-container"], [1, "container"], [1, "section-title", "mb-4"], [1, "text-center", "py-4"], [1, "spinner-border", "text-danger"], [1, "empty-state"], [1, "bi", "bi-bag-x", "d-block"], [1, "alert", "alert-warning", "d-inline-block", "mt-2"], ["routerLink", "/products", 1, "btn", "btn-cs-primary", "mt-2"], [1, "alert", "alert-warning"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "cs-card", "p-3", "mb-3", "d-flex", "gap-3", "align-items-center"], [1, "col-lg-4"], [1, "cs-card", "p-4", "sticky-top", 2, "top", "90px"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-muted"], [1, "text-success"], [1, "small", "text-muted", "mb-2"], [1, "d-flex", "justify-content-between", "mb-4"], [1, "fs-5"], [1, "cart-item-img", 3, "src", "alt"], [1, "flex-grow-1"], [1, "mb-1"], [1, "text-muted", "small"], [1, "fw-bold", "mt-1"], [1, "input-group", 2, "width", "120px"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "number", 1, "form-control", "form-control-sm", "text-center", 3, "change", "value"], [1, "fw-bold", "text-end", 2, "min-width", "80px"], [1, "btn", "btn-link", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-trash"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "form-label", "mb-0"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "p-0", 3, "click"], [1, "d-flex", "flex-column", "gap-2", "mb-2"], [1, "new-address-form", "border", "rounded", "p-2", "mb-2"], [1, "small", "mb-2"], [1, "form-label"], ["type", "text", "placeholder", "Phone for delivery", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold"], [1, "d-flex", "flex-column", "gap-2"], [1, "border", "rounded", "p-2", "d-flex", "align-items-center", "gap-2", 2, "cursor", "pointer"], ["type", "radio", "name", "pay", "value", "PREPAID", 3, "ngModelChange", "ngModel"], [1, "fw-semibold"], [1, "small", "text-muted"], ["type", "radio", "name", "pay", "value", "COD", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-cs-primary", "w-100", "btn-lg", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-danger", "mt-3", "mb-0", "small"], [1, "alert", "alert-success", "mt-3", "mb-0"], [1, "address-option", 3, "selected"], [1, "address-option"], ["type", "radio", "name", "addr", 1, "form-check-input", "me-2", 3, "change", "checked"], [1, "fw-semibold", "small"], [1, "badge", "bg-secondary", "ms-1"], ["name", "label", "placeholder", "Label (Home / Work)", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], ["name", "fullName", "placeholder", "Full name", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], ["name", "line1", "placeholder", "Address line *", "required", "", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], ["name", "line2", "placeholder", "Landmark / line 2", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-2"], [1, "col-6"], ["name", "city", "placeholder", "City", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "state", "placeholder", "State", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "pincode", "placeholder", "PIN code", "maxlength", "6", 1, "form-control", "form-control-sm", 3, "ngModelChange", "blur", "ngModel"], [1, "small", 3, "text-success", "text-danger"], ["name", "addrPhone", "placeholder", "Phone", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-check", "mb-2"], ["type", "checkbox", "name", "isDefault", "id", "defAddr", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "defAddr", 1, "form-check-label", "small"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "w-100", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "small"], [1, "text-muted", 2, "cursor", "pointer"], ["rows", "2", "name", "oneTime", "placeholder", "Full shipping address", 1, "form-control", "form-control-sm", "mt-2", 3, "ngModelChange", "ngModel"], ["routerLink", "/orders"], [1, "text-muted", "small", "mb-3"], ["routerLink", "/login", 1, "btn", "btn-cs-primary", "w-100"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Shopping Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CartComponent_Conditional_4_Template, 2, 0, "div", 3)(5, CartComponent_Conditional_5_Template, 9, 1)(6, CartComponent_Conditional_6_Template, 31, 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.validating ? 4 : ctx.cart.items().length === 0 ? 5 : 6);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel], styles: ["\n\n.address-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 0;\n}\n.address-option.selected[_ngcontent-%COMP%] {\n  border-color: #e94560;\n  background: #fff5f7;\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\features\\cart\\cart.component.ts", lineNumber: 253 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-5UMCURUA.js.map
