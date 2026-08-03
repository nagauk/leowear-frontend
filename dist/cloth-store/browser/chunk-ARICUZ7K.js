import {
  AuthService
} from "./chunk-TKTZKSCX.js";
import {
  OrderService
} from "./chunk-2PGALH47.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  RouterLink,
  __async,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/admin/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminOrdersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
    \u0275\u0275text(1, " Generating\u2026 ");
  }
}
function AdminOrdersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 36);
    \u0275\u0275text(1, " Download PDF ");
  }
}
function AdminOrdersComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(s_r1));
  }
}
function AdminOrdersComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AdminOrdersComponent_For_66_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.filter.status === s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(s_r4));
  }
}
function AdminOrdersComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_67_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toast = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("alert-success", ctx_r1.toast.type === "ok")("alert-danger", ctx_r1.toast.type === "err");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.toast.text, " ");
  }
}
function AdminOrdersComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "h5");
    \u0275\u0275text(2, "No orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 41);
    \u0275\u0275text(4, "Try adjusting filters or wait for new customer orders.");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", o_r7.shippingAddress);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r7.shippingAddress);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "tel:" + o_r7.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r7.phone);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r8.productName || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.formatVariant(it_r8), " \xB7 Qty: ", it_r8.quantity, " \xD7 \u20B9", ctx_r1.formatPrice(it_r8.unitPrice), " ");
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275repeaterCreate(1, AdminOrdersComponent_Conditional_70_For_29_Conditional_14_For_2_Template, 5, 4, "div", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.itemsOf(o_r7));
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "0 items");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 67);
    \u0275\u0275element(3, "i", 68);
    \u0275\u0275text(4, "Editable after confirmation");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r7.shippingDetails);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "Confirm order first");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminOrdersComponent_Conditional_70_For_29_Conditional_17_Conditional_1_Template, 5, 1)(2, AdminOrdersComponent_Conditional_70_For_29_Conditional_17_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, o_r7.shippingDetails ? 1 : 2);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save ");
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.shippingDraft, $event) || (ctx_r1.shippingDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const o_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.commitShipping(o_r7));
    })("keyup.escape", function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelShippingEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 70)(3, "button", 71);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const o_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.commitShipping(o_r7));
    });
    \u0275\u0275template(4, AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Conditional_4_Template, 1, 0, "span", 72)(5, AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelShippingEdit());
    });
    \u0275\u0275text(7, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shippingDraft);
    \u0275\u0275property("disabled", ctx_r1.savingShippingId === o_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingShippingId === o_r7.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.savingShippingId === o_r7.id ? 4 : 5);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_70_For_29_Conditional_19_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const o_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(o_r7.shippingDetails));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75);
    \u0275\u0275template(4, AdminOrdersComponent_Conditional_70_For_29_Conditional_19_Conditional_4_Template, 2, 0, "button", 76);
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_70_For_29_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const o_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startShippingEdit(o_r7));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("text-muted", !o_r7.shippingDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r7.shippingDetails || "Not set", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, o_r7.shippingDetails ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r7.shippingDetails ? "Edit" : "Add", " ");
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "Paid");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r7.paymentStatus || "PENDING");
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Txn: ", o_r7.paymentRef, "");
  }
}
function AdminOrdersComponent_Conditional_70_For_29_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngValue", s_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(s_r12));
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 63);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 81);
  }
}
function AdminOrdersComponent_Conditional_70_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 50);
    \u0275\u0275template(8, AdminOrdersComponent_Conditional_70_For_29_Conditional_8_Template, 2, 2, "span", 51)(9, AdminOrdersComponent_Conditional_70_For_29_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 52);
    \u0275\u0275template(11, AdminOrdersComponent_Conditional_70_For_29_Conditional_11_Template, 2, 2, "a", 53)(12, AdminOrdersComponent_Conditional_70_For_29_Conditional_12_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 52);
    \u0275\u0275template(14, AdminOrdersComponent_Conditional_70_For_29_Conditional_14_Template, 3, 0, "div", 54)(15, AdminOrdersComponent_Conditional_70_For_29_Conditional_15_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 52);
    \u0275\u0275template(17, AdminOrdersComponent_Conditional_70_For_29_Conditional_17_Template, 3, 1, "div")(18, AdminOrdersComponent_Conditional_70_For_29_Conditional_18_Template, 8, 4)(19, AdminOrdersComponent_Conditional_70_For_29_Conditional_19_Template, 7, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 55);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 52);
    \u0275\u0275template(24, AdminOrdersComponent_Conditional_70_For_29_Conditional_24_Template, 2, 0, "span", 56)(25, AdminOrdersComponent_Conditional_70_For_29_Conditional_25_Template, 2, 1);
    \u0275\u0275elementStart(26, "div", 57);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminOrdersComponent_Conditional_70_For_29_Conditional_28_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "span", 59);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 52);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td")(36, "div", 60)(37, "select", 61);
    \u0275\u0275listener("ngModelChange", function AdminOrdersComponent_Conditional_70_For_29_Template_select_ngModelChange_37_listener($event) {
      const o_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onStatusChange(o_r7, $event));
    });
    \u0275\u0275repeaterCreate(38, AdminOrdersComponent_Conditional_70_For_29_For_39_Template, 2, 2, "option", 62, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, AdminOrdersComponent_Conditional_70_For_29_Conditional_40_Template, 1, 0, "span", 63)(41, AdminOrdersComponent_Conditional_70_For_29_Conditional_41_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-updating", ctx_r1.updatingId === o_r7.id)("row-flash", ctx_r1.flashId === o_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r7.orderNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r7.username);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, o_r7.shippingAddress ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(11, o_r7.phone ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(14, ctx_r1.itemsOf(o_r7).length ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(17, !ctx_r1.canEditShipping(o_r7) ? 17 : ctx_r1.editingShippingId === o_r7.id ? 18 : 19);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(22, 21, o_r7.totalAmount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(24, (o_r7.paymentStatus || "").toUpperCase() === "PAID" ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r7.paymentMethod || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(28, o_r7.paymentRef ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(o_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusValue(o_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 24, o_r7.createdAt, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.statusValue(o_r7))("disabled", ctx_r1.updatingId === o_r7.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(40, ctx_r1.updatingId === o_r7.id ? 40 : ctx_r1.flashId === o_r7.id ? 41 : -1);
  }
}
function AdminOrdersComponent_Conditional_70_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "button", 82);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_70_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goPage(ctx_r1.page - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_70_Conditional_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goPage(ctx_r1.page + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("Page ", ctx_r1.page + 1, " of ", ctx_r1.totalPages, " \xB7 ", ctx_r1.totalElements, " total");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page >= ctx_r1.totalPages - 1);
  }
}
function AdminOrdersComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "table", 44)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Order #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 45);
    \u0275\u0275text(14, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 46);
    \u0275\u0275text(16, "Shipping details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 47);
    \u0275\u0275text(26, "Update Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, AdminOrdersComponent_Conditional_70_For_29_Template, 42, 27, "tr", 48, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(30, AdminOrdersComponent_Conditional_70_Conditional_30_Template, 7, 5, "div", 49);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r1.orders);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(30, ctx_r1.totalPages > 1 ? 30 : -1);
  }
}
var AdminOrdersComponent = class _AdminOrdersComponent {
  constructor(orderService, auth, seo) {
    this.orderService = orderService;
    this.auth = auth;
    this.seo = seo;
    this.orders = [];
    this.loading = true;
    this.updatingId = null;
    this.flashId = null;
    this.downloadingPdf = false;
    this.toast = null;
    this.page = 0;
    this.size = 50;
    this.totalPages = 0;
    this.totalElements = 0;
    this.filter = { keyword: "", status: "", fromDate: "", toDate: "" };
    this.paymentFilter = "";
    this.allOrdersCache = [];
    this.statuses = ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED", "RETURNED"];
    this.editingShippingId = null;
    this.shippingDraft = "";
    this.savingShippingId = null;
    this.isStaff = () => this.auth.isStaff();
  }
  itemsOf(o) {
    return Array.isArray(o?.items) ? o.items : [];
  }
  statusValue(o) {
    const s = o?.status;
    if (s == null)
      return "PENDING";
    if (typeof s === "string")
      return s.toUpperCase();
    if (typeof s === "object" && s.name)
      return String(s.name).toUpperCase();
    return String(s).toUpperCase();
  }
  statusClass(o) {
    return this.statusValue(o).toLowerCase();
  }
  canEditShipping(o) {
    const s = this.statusValue(o);
    return s === "CONFIRMED" || s === "SHIPPED" || s === "DELIVERED";
  }
  formatVariant(it) {
    const size = (it?.size ?? "").toString().trim();
    const color = (it?.color ?? "").toString().trim();
    if (size && color)
      return `${size} / ${color}`;
    return size || color || "\u2014";
  }
  formatPrice(price) {
    if (price == null)
      return "\u2014";
    return Math.round(Number(price)).toLocaleString("en-IN");
  }
  startShippingEdit(o) {
    this.editingShippingId = o.id;
    this.shippingDraft = o.shippingDetails || "";
  }
  cancelShippingEdit() {
    this.editingShippingId = null;
    this.shippingDraft = "";
  }
  commitShipping(o) {
    if (!o.id || !this.isStaff())
      return;
    const value = (this.shippingDraft || "").trim();
    this.savingShippingId = o.id;
    this.orderService.updateShippingDetails(o.id, value).subscribe({
      next: (res) => {
        o.shippingDetails = res.data?.shippingDetails ?? (value || void 0);
        this.savingShippingId = null;
        this.cancelShippingEdit();
        this.flashId = o.id;
        this.toast = { type: "ok", text: `Shipping details saved for ${o.orderNumber}` };
        setTimeout(() => {
          if (this.flashId === o.id)
            this.flashId = null;
        }, 800);
      },
      error: (err) => {
        this.savingShippingId = null;
        this.toast = { type: "err", text: err.error?.message || `Failed to save shipping for ${o.orderNumber}` };
      }
    });
  }
  copyToClipboard(text) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(text);
        this.toast = { type: "ok", text: "Copied to clipboard" };
      } catch {
        this.toast = { type: "err", text: "Could not copy" };
      }
    });
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Manage Orders",
      description: "Leo Wear admin \u2014 manage customer orders and shipments.",
      canonicalPath: "/admin/orders",
      noindex: true
    });
    this.load();
  }
  label(status) {
    if (!status)
      return "";
    return status.charAt(0) + status.slice(1).toLowerCase();
  }
  applyFilters() {
    this.page = 0;
    this.load();
  }
  clearFilters() {
    this.filter = { keyword: "", status: "", fromDate: "", toDate: "" };
    this.paymentFilter = "";
    this.page = 0;
    this.load();
  }
  filterByStatus(status) {
    this.filter.status = status;
    this.page = 0;
    this.load();
  }
  applyPaymentFilter() {
    const f = (this.paymentFilter || "").toUpperCase();
    let list = [...this.allOrdersCache || []];
    if (f === "PAID" || f === "PENDING") {
      list = list.filter((o) => (o.paymentStatus || "PENDING").toUpperCase() === f);
    } else if (f === "COD" || f === "PREPAID") {
      list = list.filter((o) => (o.paymentMethod || "").toUpperCase() === f);
    }
    this.orders = list;
  }
  goPage(p) {
    this.page = p;
    this.load();
  }
  downloadPdf() {
    if (!this.isStaff() || this.downloadingPdf)
      return;
    this.downloadingPdf = true;
    this.orderService.exportOrdersPdf({
      keyword: this.filter.keyword || void 0,
      status: this.filter.status || void 0,
      fromDate: this.filter.fromDate || void 0,
      toDate: this.filter.toDate || void 0,
      payment: this.paymentFilter || void 0
    }).subscribe({
      next: (blob) => {
        this.downloadingPdf = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = this.fallbackFilename();
        a.click();
        URL.revokeObjectURL(url);
        this.toast = { type: "ok", text: "PDF downloaded" };
      },
      error: () => {
        this.downloadingPdf = false;
        this.toast = { type: "err", text: "Failed to download PDF" };
      }
    });
  }
  fallbackFilename() {
    const d = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `orders_${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}.pdf`;
  }
  load() {
    this.loading = true;
    this.orderService.getAllOrders(this.page, this.size, {
      status: this.filter.status || void 0,
      keyword: this.filter.keyword || void 0,
      fromDate: this.filter.fromDate || void 0,
      toDate: this.filter.toDate || void 0
    }).subscribe({
      next: (res) => {
        const page = res.data;
        this.allOrdersCache = (page?.content || []).map((o) => __spreadProps(__spreadValues({}, o), {
          items: Array.isArray(o.items) ? o.items : [],
          status: this.normalizeStatus(o.status),
          shippingDetails: o.shippingDetails || ""
        }));
        this.applyPaymentFilter();
        this.totalPages = page?.totalPages || 0;
        this.totalElements = page?.totalElements || 0;
        this.loading = false;
      },
      error: () => {
        this.orders = [];
        this.loading = false;
        this.toast = { type: "err", text: "Failed to load orders" };
      }
    });
  }
  normalizeStatus(s) {
    if (s == null)
      return "PENDING";
    if (typeof s === "string")
      return s.toUpperCase();
    if (typeof s === "object" && s.name)
      return String(s.name).toUpperCase();
    return String(s).toUpperCase();
  }
  onStatusChange(order, newStatus) {
    if (!newStatus || newStatus === order.status)
      return;
    const previous = order.status;
    order.status = newStatus;
    this.updatingId = order.id;
    this.orderService.updateOrderStatus(order.id, newStatus).subscribe({
      next: (res) => {
        order.status = this.normalizeStatus(res.data?.status || newStatus);
        this.updatingId = null;
        this.flashId = order.id;
        this.toast = { type: "ok", text: `Order ${order.orderNumber} \u2192 ${this.label(order.status)}` };
        setTimeout(() => {
          if (this.flashId === order.id)
            this.flashId = null;
        }, 800);
        if (this.filter.status && this.filter.status !== order.status) {
          this.orders = this.orders.filter((o) => o.id !== order.id);
          this.totalElements = Math.max(0, this.totalElements - 1);
        }
      },
      error: (err) => {
        order.status = previous;
        this.updatingId = null;
        this.toast = { type: "err", text: err.error?.message || `Failed to update ${order.orderNumber}` };
      }
    });
  }
  static {
    this.\u0275fac = function AdminOrdersComponent_Factory(t) {
      return new (t || _AdminOrdersComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 12, consts: [[1, "page-container"], [1, "container-fluid", "px-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/orders", 1, "btn", "btn-cs-dark", "btn-sm"], ["routerLink", "/admin/returns", 1, "btn", "btn-outline-dark", "btn-sm"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "gap-2", "mb-3"], [1, "section-title", "mb-0"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click", "disabled"], [1, "cs-card", "p-3", "mb-4", "filter-bar"], [1, "row", "g-2", "align-items-end"], [1, "col-md-3"], [1, "form-label", "small", "mb-1"], ["type", "text", "placeholder", "Order # or customer", 1, "form-control", "form-control-sm", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-2"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], ["value", "PAID"], ["value", "PENDING"], ["value", "COD"], ["value", "PREPAID"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "change", "ngModel"], [1, "col-md-3", "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-cs-primary", 3, "click"], [1, "bi", "bi-funnel", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-sm", "chip", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "chip", 3, "active"], [1, "alert", "alert-dismissible", "fade", "show", "py-2", 3, "alert-success", "alert-danger"], [1, "text-center", "py-5"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-file-earmark-pdf", "me-1"], [1, "alert", "alert-dismissible", "fade", "show", "py-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "spinner-border", "text-danger"], [1, "empty-state"], [1, "text-muted"], [1, "cs-card", "p-0", "table-shell"], [1, "table-scroll"], [1, "table", "cs-table", "mb-0", "align-middle"], [2, "min-width", "240px"], [2, "min-width", "220px"], [2, "min-width", "170px"], [3, "row-updating", "row-flash"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "small", 2, "max-width", "160px"], [3, "title"], [1, "small"], [3, "href"], [1, "d-flex", "flex-column", "gap-1"], [1, "fw-semibold"], [1, "badge", "bg-success"], [1, "text-muted", "mt-1"], [1, "font-monospace", "text-muted", 2, "font-size", "0.7rem"], [1, "badge-status"], [1, "status-cell"], [1, "form-select", "form-select-sm", "status-select", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], [1, "spinner-border", "spinner-border-sm", "text-secondary", "ms-1"], [1, "fw-medium"], [1, "badge", "bg-light", "text-dark", "border"], [1, "text-break"], [1, "text-muted", "small", "mt-1"], [1, "bi", "bi-lock", "me-1"], ["type", "text", "placeholder", "Courier / Tracking # / AWB", 1, "form-control", "form-control-sm", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel", "disabled"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-cs-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm"], [1, "d-flex", "align-items-start", "gap-2"], [1, "flex-grow-1", "text-break"], [1, "btn-group-vertical"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "p-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "p-0", 3, "click"], [1, "bi", "bi-clipboard"], [1, "badge", "bg-warning", "text-dark"], [1, "bi", "bi-check-circle-fill", "text-success", "ms-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "small", "text-muted"]], template: function AdminOrdersComponent_Template(rf, ctx) {
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
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "h2", 8);
        \u0275\u0275text(13, "Manage Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "span", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275listener("click", function AdminOrdersComponent_Template_button_click_17_listener() {
          return ctx.downloadPdf();
        });
        \u0275\u0275template(18, AdminOrdersComponent_Conditional_18_Template, 2, 0)(19, AdminOrdersComponent_Conditional_19_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "label", 15);
        \u0275\u0275text(24, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOrdersComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.keyword, $event) || (ctx.filter.keyword = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function AdminOrdersComponent_Template_input_keyup_enter_25_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 17)(27, "label", 15);
        \u0275\u0275text(28, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOrdersComponent_Template_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.status, $event) || (ctx.filter.status = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminOrdersComponent_Template_select_change_29_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(30, "option", 19);
        \u0275\u0275text(31, "All statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(32, AdminOrdersComponent_For_33_Template, 2, 2, "option", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 17)(35, "label", 15);
        \u0275\u0275text(36, "Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOrdersComponent_Template_select_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.paymentFilter, $event) || (ctx.paymentFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminOrdersComponent_Template_select_change_37_listener() {
          return ctx.applyPaymentFilter();
        });
        \u0275\u0275elementStart(38, "option", 19);
        \u0275\u0275text(39, "All payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 21);
        \u0275\u0275text(41, "Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 22);
        \u0275\u0275text(43, "Unpaid / Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 23);
        \u0275\u0275text(45, "COD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 24);
        \u0275\u0275text(47, "Prepaid");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 17)(49, "label", 15);
        \u0275\u0275text(50, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOrdersComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminOrdersComponent_Template_input_change_51_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 17)(53, "label", 15);
        \u0275\u0275text(54, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOrdersComponent_Template_input_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminOrdersComponent_Template_input_change_55_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 26)(57, "button", 27);
        \u0275\u0275listener("click", function AdminOrdersComponent_Template_button_click_57_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275element(58, "i", 28);
        \u0275\u0275text(59, " Filter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 29);
        \u0275\u0275listener("click", function AdminOrdersComponent_Template_button_click_60_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275text(61, "Clear");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 30)(63, "button", 31);
        \u0275\u0275listener("click", function AdminOrdersComponent_Template_button_click_63_listener() {
          return ctx.filterByStatus("");
        });
        \u0275\u0275text(64, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(65, AdminOrdersComponent_For_66_Template, 2, 3, "button", 32, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(67, AdminOrdersComponent_Conditional_67_Template, 3, 5, "div", 33)(68, AdminOrdersComponent_Conditional_68_Template, 2, 0, "div", 34)(69, AdminOrdersComponent_Conditional_69_Template, 5, 0)(70, AdminOrdersComponent_Conditional_70_Template, 31, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1("", ctx.totalElements, " order(s)");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.totalElements === 0 || ctx.downloadingPdf);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.downloadingPdf ? 18 : 19);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.keyword);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.status);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.paymentFilter);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.fromDate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.toDate);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", !ctx.filter.status);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(67, ctx.toast ? 67 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(68, ctx.loading ? 68 : ctx.orders.length === 0 ? 69 : 70);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.filter-bar[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.table-shell[_ngcontent-%COMP%] {\n  overflow: visible;\n  border-radius: 12px;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: visible;\n}\n.status-cell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  min-width: 150px;\n}\n.status-select[_ngcontent-%COMP%] {\n  min-width: 140px;\n  cursor: pointer;\n  z-index: 2;\n}\n.badge-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.badge-status.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-status.confirmed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-status.shipped[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.badge-status.delivered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-status.cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-status.returned[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6b21a8;\n}\n.chip[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.75rem;\n}\n.chip.active[_ngcontent-%COMP%] {\n  border-color: #1a1a2e;\n  background: #1a1a2e;\n  color: #fff;\n}\n.row-updating[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.row-flash[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_flashOk 0.8s ease;\n}\n@keyframes _ngcontent-%COMP%_flashOk {\n  0% {\n    background: #d1fae5;\n  }\n  100% {\n    background: transparent;\n  }\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src\\app\\features\\admin\\admin-orders.component.ts", lineNumber: 273 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=chunk-ARICUZ7K.js.map
