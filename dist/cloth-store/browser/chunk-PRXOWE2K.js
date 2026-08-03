import {
  FEATURES,
  MATERIALS,
  colorsForCategory,
  sizesForGuide
} from "./chunk-RP5B7XTV.js";
import {
  ProductService
} from "./chunk-WYUEELP6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  SelectMultipleControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/admin/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminProductsComponent_Conditional_27_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3);
  }
}
function AdminProductsComponent_Conditional_27_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 59)(1, "input", 60);
    \u0275\u0275listener("change", function AdminProductsComponent_Conditional_27_For_37_Template_input_change_1_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(f_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-bg-dark", ctx_r1.selectedFeatures.includes(f_r5))("text-bg-light", !ctx_r1.selectedFeatures.includes(f_r5));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedFeatures.includes(f_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r5, " ");
  }
}
function AdminProductsComponent_Conditional_27_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function AdminProductsComponent_Conditional_27_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.name);
  }
}
function AdminProductsComponent_Conditional_27_For_68_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11);
  }
}
function AdminProductsComponent_Conditional_27_For_68_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r12);
  }
}
function AdminProductsComponent_Conditional_27_For_68_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 66);
  }
  if (rf & 2) {
    const img_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", img_r10.url, \u0275\u0275sanitizeUrl);
  }
}
function AdminProductsComponent_Conditional_27_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "input", 61);
    \u0275\u0275listener("change", function AdminProductsComponent_Conditional_27_For_68_Template_input_change_1_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPrimaryImage(i_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_68_Template_input_ngModelChange_4_listener($event) {
      const img_r10 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(img_r10.url, $event) || (img_r10.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_68_Template_select_ngModelChange_5_listener($event) {
      const img_r10 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(img_r10.color, $event) || (img_r10.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 29);
    \u0275\u0275text(7, "Any color");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, AdminProductsComponent_Conditional_27_For_68_For_9_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_68_Template_select_ngModelChange_10_listener($event) {
      const img_r10 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(img_r10.size, $event) || (img_r10.size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "option", 29);
    \u0275\u0275text(12, "Any size");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, AdminProductsComponent_Conditional_27_For_68_For_14_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminProductsComponent_Conditional_27_For_68_Conditional_15_Template, 1, 1, "img", 66);
    \u0275\u0275elementStart(16, "button", 67);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_27_For_68_Template_button_click_16_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeImageRow(i_r9));
    });
    \u0275\u0275element(17, "i", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r10 = ctx.$implicit;
    const i_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", img_r10.primary);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-danger", img_r10.primary)("bg-secondary", !img_r10.primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", img_r10.primary ? "Prime" : i_r9 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", img_r10.url);
    \u0275\u0275property("name", "imgUrl" + i_r9);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", img_r10.color);
    \u0275\u0275property("name", "imgColor" + i_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.colorOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", img_r10.size);
    \u0275\u0275property("name", "imgSize" + i_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, img_r10.url ? 15 : -1);
  }
}
function AdminProductsComponent_Conditional_27_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r13);
  }
}
function AdminProductsComponent_Conditional_27_For_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14);
  }
}
function AdminProductsComponent_Conditional_27_For_119_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17);
  }
}
function AdminProductsComponent_Conditional_27_For_119_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18);
  }
}
function AdminProductsComponent_Conditional_27_For_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_119_Template_select_ngModelChange_2_listener($event) {
      const v_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r16.size, $event) || (v_r16.size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 29);
    \u0275\u0275text(4, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, AdminProductsComponent_Conditional_27_For_119_For_6_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_119_Template_select_ngModelChange_8_listener($event) {
      const v_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r16.color, $event) || (v_r16.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 29);
    \u0275\u0275text(10, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, AdminProductsComponent_Conditional_27_For_119_For_12_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_119_Template_input_ngModelChange_14_listener($event) {
      const v_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r16.stock, $event) || (v_r16.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_119_Template_input_ngModelChange_16_listener($event) {
      const v_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r16.price, $event) || (v_r16.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_For_119_Template_input_ngModelChange_18_listener($event) {
      const v_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r16.sku, $event) || (v_r16.sku = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "button", 67);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_27_For_119_Template_button_click_20_listener() {
      const i_r19 = \u0275\u0275restoreView(_r15).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeVariantRow(i_r19));
    });
    \u0275\u0275element(21, "i", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r16 = ctx.$implicit;
    const i_r19 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", v_r16.size);
    \u0275\u0275property("name", "vsize" + i_r19);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sizeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", v_r16.color);
    \u0275\u0275property("name", "vcolor" + i_r19);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.colorOptions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", v_r16.stock);
    \u0275\u0275property("name", "vstock" + i_r19);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", v_r16.price);
    \u0275\u0275property("name", "vprice" + i_r19);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", v_r16.sku);
    \u0275\u0275property("name", "vsku" + i_r19);
  }
}
function AdminProductsComponent_Conditional_27_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1, "No variants \u2014 product uses base stock only. Use Generate to create size\xD7color rows.");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_27_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function AdminProductsComponent_Conditional_27_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formSuccess);
  }
}
function AdminProductsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 17);
    \u0275\u0275listener("ngSubmit", function AdminProductsComponent_Conditional_27_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProduct());
    });
    \u0275\u0275elementStart(4, "div", 18)(5, "label", 19);
    \u0275\u0275text(6, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "label", 19);
    \u0275\u0275text(10, "Base Price (\u20B9) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.price, $event) || (ctx_r1.form.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 21)(13, "label", 19);
    \u0275\u0275text(14, "Original Price (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.originalPrice, $event) || (ctx_r1.form.originalPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 24)(17, "label", 19);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 26)(21, "label", 19);
    \u0275\u0275text(22, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.brand, $event) || (ctx_r1.form.brand = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 26)(25, "label", 19);
    \u0275\u0275text(26, "Material / Fabric");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.material, $event) || (ctx_r1.form.material = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 29);
    \u0275\u0275text(29, "\u2014 Select material \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, AdminProductsComponent_Conditional_27_For_31_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 31)(33, "label", 19);
    \u0275\u0275text(34, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 32);
    \u0275\u0275repeaterCreate(36, AdminProductsComponent_Conditional_27_For_37_Template, 3, 6, "label", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 26)(39, "label", 19);
    \u0275\u0275text(40, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formParentId, $event) || (ctx_r1.formParentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onParentCategoryChange());
    });
    \u0275\u0275elementStart(42, "option", 30);
    \u0275\u0275text(43, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(44, AdminProductsComponent_Conditional_27_For_45_Template, 2, 2, "option", 30, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 26)(47, "label", 19);
    \u0275\u0275text(48, "Subcategory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.categoryId, $event) || (ctx_r1.form.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange($event));
    });
    \u0275\u0275elementStart(50, "option", 30);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(52, AdminProductsComponent_Conditional_27_For_53_Template, 2, 2, "option", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 36);
    \u0275\u0275text(55, "Product is stored under the subcategory (extensible from DB).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 26)(57, "label", 19);
    \u0275\u0275text(58, "Base stock (if no variants)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stock, $event) || (ctx_r1.form.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 31)(61, "div", 38)(62, "label", 39);
    \u0275\u0275text(63, "Images (tag color so gallery updates on selection)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 40);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_27_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addImageRow());
    });
    \u0275\u0275element(65, "i", 41);
    \u0275\u0275text(66, " Add Image ");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(67, AdminProductsComponent_Conditional_27_For_68_Template, 18, 13, "div", 42, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 31)(70, "div", 43)(71, "label", 39);
    \u0275\u0275text(72, "Size & Color Variants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 44);
    \u0275\u0275text(74, "Sizes/colors based on category: ");
    \u0275\u0275elementStart(75, "strong");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 45)(78, "div", 46)(79, "div", 26)(80, "label", 47);
    \u0275\u0275text(81, "Sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bulkSizes, $event) || (ctx_r1.bulkSizes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(83, AdminProductsComponent_Conditional_27_For_84_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 36);
    \u0275\u0275text(86, "Ctrl/Cmd + click for multiple");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 26)(88, "label", 47);
    \u0275\u0275text(89, "Colors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_select_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bulkColors, $event) || (ctx_r1.bulkColors = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(91, AdminProductsComponent_Conditional_27_For_92_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 50)(94, "label", 47);
    \u0275\u0275text(95, "Stock each");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProductsComponent_Conditional_27_Template_input_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bulkStock, $event) || (ctx_r1.bulkStock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 50)(98, "button", 52);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_27_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateVariants());
    });
    \u0275\u0275text(99, " Generate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "button", 53);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_27_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addVariantRow());
    });
    \u0275\u0275text(101, " + One row ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "div", 54)(103, "table", 55)(104, "thead")(105, "tr")(106, "th");
    \u0275\u0275text(107, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "th");
    \u0275\u0275text(109, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "th");
    \u0275\u0275text(111, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "th");
    \u0275\u0275text(113, "Price (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "th");
    \u0275\u0275text(115, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275element(116, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "tbody");
    \u0275\u0275repeaterCreate(118, AdminProductsComponent_Conditional_27_For_119_Template, 22, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(120, AdminProductsComponent_Conditional_27_Conditional_120_Template, 2, 0, "p", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 31);
    \u0275\u0275template(122, AdminProductsComponent_Conditional_27_Conditional_122_Template, 3, 1, "div", 31)(123, AdminProductsComponent_Conditional_27_Conditional_123_Template, 3, 1, "div", 31);
    \u0275\u0275elementStart(124, "div", 31)(125, "button", 57);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "button", 58);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_27_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(128, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editing ? "Edit Product" : "New Product");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.originalPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.brand);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.material);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.materials);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.featureOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formParentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rootCategories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.categoryId);
    \u0275\u0275property("disabled", !ctx_r1.formParentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formParentId ? "Select subcategory" : "Select category first");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.formSubcategories);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stock);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.form.images);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.categoryName || "All apparel");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bulkSizes);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sizeOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bulkColors);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.colorOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bulkStock);
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.form.variants);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(120, ctx_r1.form.variants.length === 0 ? 120 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(122, ctx_r1.formError ? 122 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(123, ctx_r1.formSuccess ? 123 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editing ? "Update" : "Create", " ");
  }
}
function AdminProductsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 75);
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_29_For_23_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r21.variants.length, " SKUs");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r21.availableSizes == null ? null : p_r21.availableSizes.join(", "), " \xB7 ", p_r21.availableColors == null ? null : p_r21.availableColors.join(", "), " ");
  }
}
function AdminProductsComponent_Conditional_29_For_23_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_29_For_23_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_29_For_23_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const p_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deactivate(p_r21.id));
    });
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_29_For_23_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_29_For_23_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const p_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactivate(p_r21.id));
    });
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, " Reactivate ");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_29_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 79);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, AdminProductsComponent_Conditional_29_For_23_Conditional_17_Template, 4, 3)(18, AdminProductsComponent_Conditional_29_For_23_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 62);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "button", 80);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_29_For_23_Template_button_click_23_listener() {
      const p_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(p_r21));
    });
    \u0275\u0275element(24, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdminProductsComponent_Conditional_29_For_23_Conditional_25_Template, 2, 0, "button", 82)(26, AdminProductsComponent_Conditional_29_For_23_Conditional_26_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r21.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r21.imageUrl || "https://via.placeholder.com/40", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r21.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 13, p_r21.price, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(p_r21.stock <= 5 ? "text-danger fw-bold" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r21.stock);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, (p_r21.variants == null ? null : p_r21.variants.length) ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(p_r21.active ? "bg-success" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r21.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(25, p_r21.active ? 25 : 26);
  }
}
function AdminProductsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 54)(2, "table", 77)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Variants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, AdminProductsComponent_Conditional_29_For_23_Template, 27, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.filteredProducts);
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  get filteredProducts() {
    if (this.statusFilter === "active")
      return this.products.filter((p) => p.active);
    if (this.statusFilter === "inactive")
      return this.products.filter((p) => !p.active);
    return this.products;
  }
  get categoryName() {
    const c = this.categories.find((x) => Number(x.id) === Number(this.form.categoryId));
    return c?.name || "";
  }
  constructor(productService, seo) {
    this.productService = productService;
    this.seo = seo;
    this.products = [];
    this.categories = [];
    this.rootCategories = [];
    this.formSubcategories = [];
    this.formParentId = null;
    this.loading = true;
    this.showForm = false;
    this.editing = null;
    this.saving = false;
    this.formError = "";
    this.formSuccess = "";
    this.form = this.emptyForm();
    this.sizeOptions = sizesForGuide(null, null);
    this.materials = MATERIALS;
    this.featureOptions = FEATURES;
    this.selectedFeatures = [];
    this.colorOptions = colorsForCategory(null);
    this.bulkSizes = [];
    this.bulkColors = [];
    this.bulkStock = 10;
    this.statusFilter = "all";
  }
  ngOnInit() {
    this.seo.setPage({
      title: "Manage Products",
      description: "Leo Wear admin \u2014 manage products, stock, and visibility.",
      canonicalPath: "/admin/products",
      noindex: true
    });
    this.load();
    this.productService.getCategoryTree().subscribe((res) => {
      this.rootCategories = res.data || [];
    });
    this.productService.getCategories().subscribe((res) => this.categories = res.data || []);
  }
  onParentCategoryChange() {
    const root = this.rootCategories.find((c) => Number(c.id) === Number(this.formParentId));
    this.formSubcategories = root?.children || [];
    this.form.categoryId = null;
    this.onCategoryChange(null);
  }
  load() {
    this.loading = true;
    this.productService.getAllProductsAdmin(0, 50).subscribe({
      next: (res) => {
        this.products = res.data.content;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  setStatusFilter(filter) {
    this.statusFilter = filter;
  }
  emptyForm() {
    return {
      name: "",
      description: "",
      price: 0,
      originalPrice: null,
      stock: 0,
      brand: "Leo Wear",
      material: "",
      features: "",
      categoryId: null,
      images: [{ url: "", color: "", size: "", primary: true, sortOrder: 0 }],
      variants: []
    };
  }
  resetForm() {
    this.form = this.emptyForm();
    this.formParentId = null;
    this.formSubcategories = [];
    this.selectedFeatures = [];
  }
  addImageRow() {
    this.form.images = [...this.form.images, { url: "", color: "", size: "", primary: false, sortOrder: this.form.images.length }];
  }
  removeImageRow(i) {
    this.form.images = this.form.images.filter((_, idx) => idx !== i);
    if (this.form.images.length && !this.form.images.some((img) => img.primary)) {
      this.form.images[0].primary = true;
    }
  }
  setPrimaryImage(i) {
    this.form.images.forEach((img, idx) => img.primary = idx === i);
  }
  resolveParentFromCategory(categoryId) {
    if (!categoryId) {
      this.formParentId = null;
      this.formSubcategories = [];
      return;
    }
    const flat = this.categories.find((x) => Number(x.id) === Number(categoryId));
    if (flat?.parentId) {
      this.formParentId = Number(flat.parentId);
      const root = this.rootCategories.find((c) => Number(c.id) === this.formParentId);
      this.formSubcategories = root?.children || [];
    } else {
      this.formParentId = Number(categoryId);
      const root = this.rootCategories.find((c) => Number(c.id) === this.formParentId);
      this.formSubcategories = root?.children || [];
    }
  }
  onCategoryChange(_id) {
    const cat = this.categories.find((x) => Number(x.id) === Number(this.form.categoryId)) || this.formSubcategories.find((x) => Number(x.id) === Number(this.form.categoryId));
    const guide = cat?.sizeGuide || null;
    const name = cat?.name || this.categoryName;
    this.sizeOptions = sizesForGuide(guide, name);
    this.colorOptions = colorsForCategory(name);
    this.bulkSizes = [];
    this.bulkColors = [];
  }
  toggleFeature(f) {
    if (this.selectedFeatures.includes(f)) {
      this.selectedFeatures = this.selectedFeatures.filter((x) => x !== f);
    } else {
      this.selectedFeatures = [...this.selectedFeatures, f];
    }
    this.form.features = this.selectedFeatures.join(", ");
  }
  addVariantRow() {
    const size = this.sizeOptions[0] || "";
    const color = this.colorOptions[0] || "";
    this.form.variants = [...this.form.variants, {
      size,
      color,
      stock: this.bulkStock || 0,
      price: null,
      sku: "",
      active: true
    }];
  }
  /** Create size × color matrix; skip duplicates already in the table */
  generateVariants() {
    if (!this.bulkSizes?.length || !this.bulkColors?.length) {
      this.formError = "Select at least one size and one color to generate variants";
      return;
    }
    this.formError = "";
    const existing = new Set((this.form.variants || []).map((v) => `${(v.size || "").toLowerCase()}|${(v.color || "").toLowerCase()}`));
    const next = [...this.form.variants || []];
    for (const size of this.bulkSizes) {
      for (const color of this.bulkColors) {
        const key = `${size.toLowerCase()}|${color.toLowerCase()}`;
        if (existing.has(key))
          continue;
        existing.add(key);
        next.push({
          size,
          color,
          stock: Number(this.bulkStock) || 0,
          price: null,
          sku: "",
          active: true
        });
      }
    }
    this.form.variants = next;
  }
  removeVariantRow(i) {
    this.form.variants = this.form.variants.filter((_, idx) => idx !== i);
  }
  edit(p) {
    this.formError = "";
    this.formSuccess = "";
    this.showForm = true;
    this.editing = p;
    this.productService.getProduct(Number(p.id)).subscribe({
      next: (res) => {
        const full = res.data || p;
        this.editing = full;
        const images = full.images && full.images.length ? full.images.map((img) => ({
          url: img.url,
          color: img.color || "",
          size: img.size || "",
          primary: !!img.primary,
          sortOrder: img.sortOrder || 0
        })) : [{ url: full.imageUrl || "", color: "", size: "", primary: true, sortOrder: 0 }];
        this.form = {
          name: full.name,
          description: full.description || "",
          price: Number(full.price),
          originalPrice: full.originalPrice != null ? Number(full.originalPrice) : null,
          stock: Number(full.stock) || 0,
          brand: full.brand || "Leo Wear",
          material: full.material || "",
          features: full.features || "",
          categoryId: full.categoryId ?? null,
          images,
          variants: (full.variants || []).map((v) => ({
            size: v.size,
            color: v.color,
            stock: Number(v.stock) || 0,
            price: v.price != null ? Number(v.price) : null,
            sku: v.sku || "",
            active: v.active !== false
          }))
        };
        this.selectedFeatures = (full.features || "").split(",").map((s) => s.trim()).filter(Boolean);
        this.resolveParentFromCategory(this.form.categoryId);
        this.onCategoryChange(this.form.categoryId);
      },
      error: () => {
        const images = p.images && p.images.length ? p.images.map((img) => __spreadValues({}, img)) : [{ url: p.imageUrl || "", color: "", size: "", primary: true, sortOrder: 0 }];
        this.form = {
          name: p.name,
          description: p.description,
          price: Number(p.price),
          originalPrice: p.originalPrice != null ? Number(p.originalPrice) : null,
          stock: Number(p.stock) || 0,
          brand: p.brand,
          categoryId: p.categoryId,
          images,
          variants: (p.variants || []).map((v) => __spreadValues({}, v))
        };
      }
    });
  }
  saveProduct() {
    this.formError = "";
    this.formSuccess = "";
    if (!this.form.name?.trim()) {
      this.formError = "Product name is required";
      return;
    }
    if (this.form.price == null || Number(this.form.price) < 0.01) {
      this.formError = "Enter a valid price (min \u20B90.01)";
      return;
    }
    this.saving = true;
    const payload = {
      name: String(this.form.name).trim(),
      description: this.form.description || "",
      price: Number(this.form.price),
      originalPrice: this.form.originalPrice != null && String(this.form.originalPrice).trim() !== "" ? Number(this.form.originalPrice) : null,
      stock: Number(this.form.stock) || 0,
      brand: this.form.brand || "Leo Wear",
      material: this.form.material || "",
      features: this.selectedFeatures.join(", ") || this.form.features || "",
      categoryId: this.form.categoryId != null ? Number(this.form.categoryId) : null,
      active: true,
      imageList: (this.form.images || []).filter((img) => img.url && String(img.url).trim()).map((img, i) => ({
        url: String(img.url).trim(),
        color: img.color ? String(img.color).trim() : null,
        size: img.size ? String(img.size).trim() : null,
        primary: !!img.primary,
        sortOrder: i
      })),
      variants: (this.form.variants || []).filter((v) => v.size && v.color).map((v) => ({
        size: String(v.size).trim(),
        color: String(v.color).trim(),
        stock: Number(v.stock) || 0,
        price: v.price != null && String(v.price).trim() !== "" ? Number(v.price) : null,
        sku: v.sku || null,
        active: true
      }))
    };
    const id = this.editing?.id != null ? Number(this.editing.id) : null;
    const obs = id ? this.productService.updateProduct(id, payload) : this.productService.createProduct(payload);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        this.formSuccess = res?.message || (id ? "Product updated" : "Product created");
        this.showForm = false;
        this.editing = null;
        this.resetForm();
        this.load();
      },
      error: (err) => {
        this.saving = false;
        const data = err.error?.data;
        if (data && typeof data === "object") {
          this.formError = Object.values(data).join(" \xB7 ");
        } else {
          this.formError = err.error?.message || "Failed to save product";
        }
      }
    });
  }
  deactivate(id) {
    if (!confirm("Deactivate this product? Customers will no longer see it."))
      return;
    this.productService.setProductActive(id, false).subscribe({
      next: () => this.load(),
      error: (err) => alert(err.error?.message || "Failed to deactivate product")
    });
  }
  reactivate(id) {
    this.productService.setProductActive(id, true).subscribe({
      next: () => this.load(),
      error: (err) => alert(err.error?.message || "Failed to reactivate product")
    });
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 14, consts: [[1, "page-container"], [1, "container-fluid", "px-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/products", 1, "btn", "btn-cs-dark", "btn-sm"], ["routerLink", "/admin/orders", 1, "btn", "btn-outline-dark", "btn-sm"], ["routerLink", "/admin/returns", 1, "btn", "btn-outline-dark", "btn-sm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "section-title", "mb-0"], [1, "btn", "btn-cs-primary", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-3", "flex-wrap"], [1, "text-muted", "small", "me-1"], ["role", "group", "aria-label", "Status filter", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", 3, "click"], [1, "cs-card", "p-4", "mb-4"], [1, "text-center", "py-5"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-6"], [1, "form-label"], ["name", "name", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["type", "number", "step", "1", "name", "price", "required", "", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "1", "name", "originalPrice", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], ["name", "description", "rows", "2", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["name", "brand", "placeholder", "Leo Wear", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], ["name", "material", 1, "form-select", "cs-form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "ngValue"], [1, "col-12"], [1, "d-flex", "flex-wrap", "gap-2", "mb-1"], [1, "badge", "rounded-pill", "border", "px-2", "py-1", 2, "cursor", "pointer", 3, "text-bg-dark", "text-bg-light"], ["name", "parentCategoryId", 1, "form-select", "cs-form-control", 3, "ngModelChange", "ngModel"], ["name", "categoryId", 1, "form-select", "cs-form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-text"], ["type", "number", "name", "stock", 1, "form-control", "cs-form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "form-label", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-plus"], [1, "d-flex", "gap-2", "align-items-center", "mb-2", "flex-wrap"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "flex-wrap", "gap-2"], [1, "text-muted", "small"], [1, "border", "rounded", "p-3", "mb-3", "bg-light"], [1, "row", "g-2", "align-items-end"], [1, "form-label", "small", "mb-1"], ["multiple", "", "name", "bulkSizes", "size", "6", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["multiple", "", "name", "bulkColors", "size", "6", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "col-md-2"], ["type", "number", "name", "bulkStock", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-sm", "btn-cs-primary", "w-100", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "w-100", "mt-1", 3, "click"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "text-muted", "small", "mb-0"], ["type", "submit", 1, "btn", "btn-cs-primary", "me-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "badge", "rounded-pill", "border", "px-2", "py-1", 2, "cursor", "pointer"], ["type", "checkbox", 1, "d-none", 3, "change", "checked"], ["type", "radio", "name", "primaryImg", "title", "Prime image", 1, "form-check-input", 3, "change", "checked"], [1, "badge"], ["placeholder", "Image URL", 1, "form-control", "cs-form-control", 2, "flex", "1", "min-width", "200px", 3, "ngModelChange", "ngModel", "name"], [1, "form-select", "cs-form-control", 2, "width", "130px", 3, "ngModelChange", "ngModel", "name"], [1, "form-select", "cs-form-control", 2, "width", "110px", 3, "ngModelChange", "ngModel", "name"], ["width", "40", "height", "48", 2, "object-fit", "cover", "border-radius", "4px", 3, "src"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-x"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel", "name"], ["type", "number", 1, "form-control", "form-control-sm", 2, "width", "80px", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "placeholder", "base", 1, "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModelChange", "ngModel", "name"], ["placeholder", "SKU", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "alert", "alert-danger", "py-2", "small", "mb-0"], [1, "alert", "alert-success", "py-2", "small", "mb-0"], [1, "spinner-border", "text-danger"], [1, "cs-card", "p-0", "overflow-hidden"], [1, "table", "cs-table", "mb-0"], ["width", "40", "height", "50", 2, "object-fit", "cover", "border-radius", "4px", 3, "src"], [1, "fw-medium"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger"], [1, "badge", "bg-info", "text-dark"], [1, "small", "text-muted"], [1, "text-muted"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"]], template: function AdminProductsComponent_Template(rf, ctx) {
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
        \u0275\u0275text(13, "Manage Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_14_listener() {
          ctx.showForm = !ctx.showForm;
          ctx.editing = null;
          return ctx.resetForm();
        });
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Add Product ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 11)(18, "span", 12);
        \u0275\u0275text(19, "Status:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "button", 14);
        \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_21_listener() {
          return ctx.setStatusFilter("all");
        });
        \u0275\u0275text(22, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_23_listener() {
          return ctx.setStatusFilter("active");
        });
        \u0275\u0275text(24, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 14);
        \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_25_listener() {
          return ctx.setStatusFilter("inactive");
        });
        \u0275\u0275text(26, "Inactive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, AdminProductsComponent_Conditional_27_Template, 129, 23, "div", 15)(28, AdminProductsComponent_Conditional_28_Template, 2, 0, "div", 16)(29, AdminProductsComponent_Conditional_29_Template, 24, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275classProp("btn-cs-dark", ctx.statusFilter === "all")("btn-outline-dark", ctx.statusFilter !== "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-cs-dark", ctx.statusFilter === "active")("btn-outline-dark", ctx.statusFilter !== "active");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-cs-dark", ctx.statusFilter === "inactive")("btn-outline-dark", ctx.statusFilter !== "inactive");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(27, ctx.showForm ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(28, ctx.loading ? 28 : 29);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src\\app\\features\\admin\\admin-products.component.ts", lineNumber: 334 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=chunk-PRXOWE2K.js.map
