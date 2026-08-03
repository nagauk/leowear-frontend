import {
  isLeoWearBrand
} from "./chunk-RP5B7XTV.js";
import {
  ProductService
} from "./chunk-WYUEELP6.js";
import {
  CartService
} from "./chunk-3S4V7AK4.js";
import {
  HistoryService
} from "./chunk-WVM67IF3.js";
import {
  WishlistService
} from "./chunk-6IPBKY2M.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-YZS6BJMH.js";
import {
  SeoService
} from "./chunk-JSTSKECR.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  RouterLink,
  environment,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4SLSDIZ.js";

// src/app/features/products/product-detail.component.ts
var _forTrack0 = ($index, $item) => $item.url + "-" + $index;
function ProductDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h5");
    \u0275\u0275text(2, "Product not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Back to Shop");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Our Choice \xB7 Leo Wear");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.activeIndex + 1, " / ", ctx_r1.gallery.length, "");
  }
}
function ProductDetailComponent_Conditional_4_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.colorHex(ctx_r1.selectedColor));
    \u0275\u0275classProp("light-dot", ctx_r1.isLightColor(ctx_r1.selectedColor));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedColor);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_4_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedSize);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, ProductDetailComponent_Conditional_4_Conditional_17_Conditional_1_Template, 3, 5)(2, ProductDetailComponent_Conditional_4_Conditional_17_Conditional_2_Template, 2, 0, "span")(3, ProductDetailComponent_Conditional_4_Conditional_17_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("shifted", ctx_r1.isLeo(ctx_r1.product.brand));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.selectedColor ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r1.selectedColor && ctx_r1.selectedSize ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r1.selectedSize ? 3 : -1);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Conditional_18_For_2_Template_button_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goTo(i_r5));
    });
    \u0275\u0275element(1, "img", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", i_r5 === ctx_r1.activeIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r6.url, \u0275\u0275sanitizeUrl)("alt", "View " + (i_r5 + 1));
  }
}
function ProductDetailComponent_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_4_Conditional_18_For_2_Template, 2, 4, "button", 53, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.gallery);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Leo Select");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_4_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.product.parentCategoryName, "", ctx_r1.product.parentCategoryName && ctx_r1.product.categoryName ? " \u203A " : "", "", ctx_r1.product.categoryName, " ");
  }
}
function ProductDetailComponent_Conditional_4_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(2, 1, ctx_r1.product.originalPrice, "1.0-0"), " ");
  }
}
function ProductDetailComponent_Conditional_4_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.product.description);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 56);
    \u0275\u0275text(2, "Material:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.material, "");
  }
}
function ProductDetailComponent_Conditional_4_Conditional_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r7);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_4_Conditional_37_For_2_Template, 2, 1, "span", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.featureList);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.colorHex(ctx_r1.selectedColor));
    \u0275\u0275classProp("light-dot", ctx_r1.isLightColor(ctx_r1.selectedColor));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedColor);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "Select");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_4_Conditional_38_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Conditional_38_For_8_Template_button_click_0_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectColor(c_r9));
    });
    \u0275\u0275element(1, "span", 61);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedColor === c_r9)("disabled", !ctx_r1.isColorAvailable(c_r9));
    \u0275\u0275property("disabled", !ctx_r1.isColorAvailable(c_r9))("title", c_r9);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.colorHex(c_r9));
    \u0275\u0275classProp("light-dot", ctx_r1.isLightColor(c_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 58)(2, "span", 56);
    \u0275\u0275text(3, "Color:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductDetailComponent_Conditional_4_Conditional_38_Conditional_4_Template, 3, 5)(5, ProductDetailComponent_Conditional_4_Conditional_38_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275repeaterCreate(7, ProductDetailComponent_Conditional_4_Conditional_38_For_8_Template, 4, 11, "button", 60, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r1.selectedColor ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.colors);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_39_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Conditional_39_For_8_Template_button_click_0_listener() {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSize(s_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedSize === s_r11)("disabled", !ctx_r1.isSizeAvailable(s_r11));
    \u0275\u0275property("disabled", !ctx_r1.isSizeAvailable(s_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r11, " ");
  }
}
function ProductDetailComponent_Conditional_4_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 64)(2, "span", 56);
    \u0275\u0275text(3, "Size:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275repeaterCreate(7, ProductDetailComponent_Conditional_4_Conditional_39_For_8_Template, 2, 6, "button", 65, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSize || "Select");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.sizes);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", ctx_r1.selectedSize, " / ", ctx_r1.selectedColor, ")");
  }
}
function ProductDetailComponent_Conditional_4_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.variantError);
  }
}
function ProductDetailComponent_Conditional_4_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, " Added to cart! ");
    \u0275\u0275elementStart(3, "a", 68);
    \u0275\u0275text(4, "View Cart");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_4_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loveMsg);
  }
}
function ProductDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 6)(1, "ol", 7)(2, "li", 8)(3, "a", 9);
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li", 8)(6, "a", 10);
    \u0275\u0275text(7, "Shop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "div", 13)(12, "div", 14)(13, "div", 15);
    \u0275\u0275listener("touchstart", function ProductDetailComponent_Conditional_4_Template_div_touchstart_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouchStart($event));
    })("touchend", function ProductDetailComponent_Conditional_4_Template_div_touchend_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouchEnd($event));
    });
    \u0275\u0275element(14, "img", 16);
    \u0275\u0275template(15, ProductDetailComponent_Conditional_4_Conditional_15_Template, 2, 0, "div", 17)(16, ProductDetailComponent_Conditional_4_Conditional_16_Template, 6, 2)(17, ProductDetailComponent_Conditional_4_Conditional_17_Template, 4, 5, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ProductDetailComponent_Conditional_4_Conditional_18_Template, 3, 0, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 20)(21, "div")(22, "div", 21);
    \u0275\u0275text(23);
    \u0275\u0275template(24, ProductDetailComponent_Conditional_4_Conditional_24_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h1", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ProductDetailComponent_Conditional_4_Conditional_27_Template, 2, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 25);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLove());
    });
    \u0275\u0275element(29, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 27)(31, "span", 28);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ProductDetailComponent_Conditional_4_Conditional_34_Template, 3, 4, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ProductDetailComponent_Conditional_4_Conditional_35_Template, 2, 1, "p", 30)(36, ProductDetailComponent_Conditional_4_Conditional_36_Template, 4, 1, "div", 31)(37, ProductDetailComponent_Conditional_4_Conditional_37_Template, 3, 0, "div", 32)(38, ProductDetailComponent_Conditional_4_Conditional_38_Template, 9, 1, "div", 27)(39, ProductDetailComponent_Conditional_4_Conditional_39_Template, 9, 1, "div", 27);
    \u0275\u0275elementStart(40, "div", 33)(41, "span", 34);
    \u0275\u0275text(42, "Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong", 35);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, ProductDetailComponent_Conditional_4_Conditional_45_Template, 2, 2, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, ProductDetailComponent_Conditional_4_Conditional_46_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(47, "div", 38)(48, "div", 39)(49, "button", 40);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeQty(-1));
    });
    \u0275\u0275text(50, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_Conditional_4_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qty, $event) || (ctx_r1.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 40);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeQty(1));
    });
    \u0275\u0275text(53, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 42);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_4_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275element(55, "i", 43);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, ProductDetailComponent_Conditional_4_Conditional_57_Template, 5, 0, "div", 44)(58, ProductDetailComponent_Conditional_4_Conditional_58_Template, 2, 1, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.currentImageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r1.isLeo(ctx_r1.product.brand) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ctx_r1.gallery.length > 1 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r1.selectedColor || ctx_r1.selectedSize ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r1.gallery.length > 1 ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.brand || "Leo Wear", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r1.isLeo(ctx_r1.product.brand) ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r1.product.parentCategoryName || ctx_r1.product.categoryName ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("loved", ctx_r1.loved);
    \u0275\u0275property("title", ctx_r1.loved ? "Remove from wishlist" : "Add to wishlist");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-heart-fill", ctx_r1.loved)("bi-heart", !ctx_r1.loved);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(33, 40, ctx_r1.displayPrice, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(34, ctx_r1.product.originalPrice && ctx_r1.product.originalPrice > ctx_r1.displayPrice ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(35, ctx_r1.product.description ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(36, ctx_r1.product.material ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(37, ctx_r1.product.features ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(38, ctx_r1.colors.length > 0 ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(39, ctx_r1.sizes.length > 0 ? 39 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-danger", ctx_r1.availableStock <= 5 && ctx_r1.availableStock > 0)("text-success", ctx_r1.availableStock > 5)("text-danger", ctx_r1.availableStock === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.availableStock > 0 ? ctx_r1.availableStock + " available" : "Out of stock", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(45, ctx_r1.selectedSize && ctx_r1.selectedColor ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(46, ctx_r1.variantError ? 46 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qty);
    \u0275\u0275property("max", ctx_r1.availableStock || 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.availableStock === 0 || ctx_r1.hasVariants && !ctx_r1.selectedVariant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.availableStock === 0 ? "Out of Stock" : "Add to Cart", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(57, ctx_r1.added ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(58, ctx_r1.loveMsg ? 58 : -1);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  get featureList() {
    if (!this.product?.features)
      return [];
    return this.product.features.split(",").map((s) => s.trim()).filter(Boolean);
  }
  get hasVariants() {
    return !!(this.product?.variants && this.product.variants.length > 0);
  }
  get selectedVariant() {
    if (!this.product?.variants?.length || !this.selectedSize || !this.selectedColor)
      return null;
    const size = this.selectedSize.toLowerCase();
    const color = this.selectedColor.toLowerCase();
    return this.product.variants.find((v) => (v.size || "").toLowerCase() === size && (v.color || "").toLowerCase() === color) || null;
  }
  get availableStock() {
    if (this.selectedVariant)
      return Number(this.selectedVariant.stock) || 0;
    if (this.hasVariants)
      return 0;
    return Number(this.product?.stock) || 0;
  }
  get displayPrice() {
    if (this.selectedVariant?.price != null)
      return Number(this.selectedVariant.price);
    return Number(this.product?.price) || 0;
  }
  get currentImageUrl() {
    if (this.gallery.length > 0) {
      return this.gallery[this.activeIndex]?.url || this.product?.imageUrl || "https://via.placeholder.com/600x700?text=No+Image";
    }
    return this.product?.imageUrl || "https://via.placeholder.com/600x700?text=No+Image";
  }
  constructor(route, productService, cart, wishlist, history, cdr, seo) {
    this.route = route;
    this.productService = productService;
    this.cart = cart;
    this.wishlist = wishlist;
    this.history = history;
    this.cdr = cdr;
    this.seo = seo;
    this.product = null;
    this.gallery = [];
    this.activeIndex = 0;
    this.loading = true;
    this.qty = 1;
    this.added = false;
    this.variantError = "";
    this.loved = false;
    this.loveMsg = "";
    this.selectedSize = "";
    this.selectedColor = "";
    this.sizes = [];
    this.colors = [];
    this.touchStartX = 0;
    this.isLeo = isLeoWearBrand;
  }
  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      if (!id)
        return;
      this.loadProduct(id);
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  loadProduct(id) {
    this.loading = true;
    this.product = null;
    this.selectedSize = "";
    this.selectedColor = "";
    this.sizes = [];
    this.colors = [];
    this.gallery = [];
    this.qty = 1;
    this.added = false;
    this.variantError = "";
    this.cdr.markForCheck();
    this.productService.getProduct(id).subscribe({
      next: (res) => {
        const data = res?.data;
        if (!data) {
          this.loading = false;
          this.cdr.detectChanges();
          return;
        }
        this.product = data;
        this.loved = this.wishlist.isLoved(data.id);
        this.history.addView(data);
        this.applySeo(data);
        const variants = (data.variants || []).filter((v) => v?.size && v?.color);
        const sizeSet = (data.availableSizes?.length ? data.availableSizes : [...new Set(variants.map((v) => v.size))]).filter(Boolean);
        const colorSet = (data.availableColors?.length ? data.availableColors : [...new Set(variants.map((v) => v.color))]).filter(Boolean);
        this.sizes = sizeSet;
        this.colors = colorSet;
        this.applyDefaultSelection(variants);
        if (!this.sizes.length && data.size) {
          this.sizes = [data.size];
          this.selectedSize = data.size;
        }
        if (!this.colors.length && data.color) {
          this.colors = [data.color];
          this.selectedColor = data.color;
        }
        this.refreshGallery();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.product = null;
        this.cdr.detectChanges();
      }
    });
  }
  /** Prefer first variant that has stock > 0 */
  applyDefaultSelection(variants) {
    if (!variants.length)
      return;
    const inStock = variants.find((v) => (Number(v.stock) || 0) > 0) || variants[0];
    this.selectedColor = inStock.color;
    this.selectedSize = inStock.size;
    if (this.selectedColor && !this.colors.includes(this.selectedColor)) {
      this.colors = [this.selectedColor, ...this.colors];
    }
    if (this.selectedSize && !this.sizes.includes(this.selectedSize)) {
      this.sizes = [this.selectedSize, ...this.sizes];
    }
  }
  /** Set per-route metadata: title, description, canonical, OG image, Product JSON-LD. */
  applySeo(p) {
    const desc = (p.description || `${p.brand || "Leo Wear"} ${p.name} \u2014 premium clothing at Leo Wear.`).replace(/\s+/g, " ").trim().slice(0, 155);
    const image = this.bestImage(p);
    const base = (environment.siteUrl || "").replace(/\/$/, "");
    const productUrl = `${base}/products/${p.id}`;
    this.seo.setPage({
      title: `${p.name} \u2013 ${p.brand || "Leo Wear"}`,
      description: desc,
      image,
      canonicalPath: `/products/${p.id}`,
      type: "product",
      keywords: [p.name, p.brand, p.material, p.categoryName, p.parentCategoryName].filter(Boolean).join(", "),
      jsonLd: this.buildProductJsonLd(p, image, productUrl)
    });
  }
  buildProductJsonLd(p, image, url) {
    const offers = {
      "@type": "Offer",
      price: (p.price ?? 0).toFixed(2),
      priceCurrency: "INR",
      availability: p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url
    };
    if (p.originalPrice && p.originalPrice > p.price) {
      offers.priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0];
    }
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      description: (p.description || p.name).slice(0, 500),
      brand: { "@type": "Brand", name: p.brand || "Leo Wear" },
      sku: p.id ? `LEO-${p.id}` : void 0,
      image: image ? [image] : void 0,
      offers
    };
    if (p.categoryName) {
      ld.category = p.parentCategoryName ? `${p.parentCategoryName} > ${p.categoryName}` : p.categoryName;
    }
    return ld;
  }
  bestImage(p) {
    if (!p)
      return void 0;
    if (p.imageUrl)
      return p.imageUrl;
    const primary = (p.images || []).find((i) => i?.primary);
    return primary?.url || p.images?.[0]?.url;
  }
  isColorAvailable(color) {
    if (!this.product?.variants?.length)
      return true;
    const c = (color || "").toLowerCase();
    return this.product.variants.some((v) => (v.color || "").toLowerCase() === c && (Number(v.stock) || 0) > 0);
  }
  isSizeAvailable(size) {
    if (!this.product?.variants?.length)
      return true;
    const s = (size || "").toLowerCase();
    if (!this.selectedColor) {
      return this.product.variants.some((v) => (v.size || "").toLowerCase() === s && (Number(v.stock) || 0) > 0);
    }
    const c = this.selectedColor.toLowerCase();
    return this.product.variants.some((v) => (v.size || "").toLowerCase() === s && (v.color || "").toLowerCase() === c && (Number(v.stock) || 0) > 0);
  }
  selectColor(c) {
    if (!this.isColorAvailable(c))
      return;
    this.selectedColor = c;
    if (this.selectedSize && !this.isSizeAvailable(this.selectedSize)) {
      this.selectedSize = this.sizes.find((s) => this.isSizeAvailable(s)) || "";
    }
    this.refreshGallery();
    this.qty = 1;
    this.variantError = "";
    this.cdr.detectChanges();
  }
  selectSize(s) {
    if (!this.isSizeAvailable(s))
      return;
    this.selectedSize = s;
    this.refreshGallery();
    this.qty = 1;
    this.variantError = "";
    this.cdr.detectChanges();
  }
  /**
   * Strict variant gallery:
   * - Image tagged Navy + S  → only when Navy AND S selected
   * - Image tagged Navy only → any size of Navy (not other colors)
   * - Never show a size-specific image for a different size
   * - Never show another color's images
   */
  /**
   * Strict variant gallery:
   * - Image tagged Color+Size → only that exact combination
   * - Image tagged Color only (no size) → all sizes of that color
   * - Never use size-specific image for a different size
   * - Never fall back to other colors' images
   */
  refreshGallery() {
    if (!this.product) {
      this.gallery = [];
      return;
    }
    const all = (this.product.images || []).filter((img) => !!img?.url);
    const color = this.norm(this.selectedColor);
    const size = this.norm(this.selectedSize);
    const imgColor = (img) => this.norm(img.color);
    const imgSize = (img) => this.norm(img.size);
    let filtered = [];
    if (color && size) {
      filtered = all.filter((img) => imgColor(img) === color && imgSize(img) === size);
      if (!filtered.length) {
        filtered = all.filter((img) => imgColor(img) === color && !imgSize(img));
      }
    } else if (color) {
      filtered = all.filter((img) => imgColor(img) === color && !imgSize(img));
    } else if (size) {
      filtered = all.filter((img) => imgSize(img) === size && !imgColor(img));
    }
    if (!filtered.length) {
      filtered = all.filter((img) => !imgColor(img) && !imgSize(img));
    }
    if (!filtered.length && !color && this.product.imageUrl) {
      filtered = [{ url: this.product.imageUrl, primary: true, sortOrder: 0 }];
    }
    if (!filtered.length) {
      const label = encodeURIComponent((this.selectedColor || "Product") + (this.selectedSize ? " " + this.selectedSize : ""));
      filtered = [{
        url: "https://via.placeholder.com/600x700?text=" + label,
        primary: true,
        sortOrder: 0
      }];
    }
    filtered = [...filtered].sort((a, b) => {
      if (!!a.primary !== !!b.primary)
        return a.primary ? -1 : 1;
      return (a.sortOrder || 0) - (b.sortOrder || 0);
    });
    this.gallery = filtered;
    this.activeIndex = 0;
    this.cdr.markForCheck();
  }
  norm(v) {
    return (v || "").trim().toLowerCase();
  }
  /** CSS color for swatch icon */
  colorHex(name) {
    const key = this.norm(name);
    const map = {
      black: "#111111",
      white: "#ffffff",
      navy: "#1e3a5f",
      grey: "#9ca3af",
      gray: "#9ca3af",
      charcoal: "#36454f",
      beige: "#d8c3a5",
      cream: "#fffdd0",
      ivory: "#fffff0",
      brown: "#6b3e26",
      tan: "#d2b48c",
      khaki: "#c3b091",
      olive: "#556b2f",
      maroon: "#800000",
      burgundy: "#6d0f23",
      red: "#dc2626",
      wine: "#722f37",
      pink: "#ec4899",
      rose: "#f43f5e",
      peach: "#ffcba4",
      orange: "#f97316",
      mustard: "#e1ad01",
      yellow: "#eab308",
      gold: "#d4af37",
      green: "#16a34a",
      "forest green": "#228b22",
      mint: "#98ff98",
      teal: "#0d9488",
      turquoise: "#40e0d0",
      blue: "#2563eb",
      "sky blue": "#87ceeb",
      "royal blue": "#4169e1",
      indigo: "#4f46e5",
      purple: "#7c3aed",
      lavender: "#b57edc",
      lilac: "#c8a2c8",
      multi: "linear-gradient(135deg,#e94560,#2563eb,#eab308)",
      print: "linear-gradient(135deg,#9ca3af,#111)",
      striped: "repeating-linear-gradient(45deg,#111 0 4px,#fff 4px 8px)",
      checked: "repeating-linear-gradient(90deg,#111 0 4px,#fff 4px 8px)"
    };
    return map[key] || "#cbd5e1";
  }
  isLightColor(name) {
    const key = this.norm(name);
    return ["white", "cream", "ivory", "beige", "yellow", "mint", "peach", "sky blue"].includes(key);
  }
  changeQty(delta) {
    const max = Math.max(1, this.availableStock || 1);
    this.qty = Math.min(max, Math.max(1, (Number(this.qty) || 1) + delta));
  }
  prev() {
    if (this.gallery.length <= 1)
      return;
    this.activeIndex = (this.activeIndex - 1 + this.gallery.length) % this.gallery.length;
  }
  next() {
    if (this.gallery.length <= 1)
      return;
    this.activeIndex = (this.activeIndex + 1) % this.gallery.length;
  }
  goTo(i) {
    this.activeIndex = i;
  }
  onKey(e) {
    if (e.key === "ArrowLeft")
      this.prev();
    if (e.key === "ArrowRight")
      this.next();
  }
  onTouchStart(e) {
    this.touchStartX = e.changedTouches[0]?.screenX ?? 0;
  }
  onTouchEnd(e) {
    const endX = e.changedTouches[0]?.screenX ?? 0;
    const dx = endX - this.touchStartX;
    if (Math.abs(dx) < 40)
      return;
    if (dx < 0)
      this.next();
    else
      this.prev();
  }
  toggleLove() {
    if (!this.product)
      return;
    this.loved = this.wishlist.toggle(this.product);
    this.loveMsg = this.loved ? "Saved to wishlist" : "Removed from wishlist";
    setTimeout(() => this.loveMsg = "", 2e3);
  }
  addToCart() {
    if (!this.product)
      return;
    if (this.hasVariants && !this.selectedVariant) {
      this.variantError = "Please select size and color";
      return;
    }
    const v = this.selectedVariant;
    this.cart.add(this.product, Number(this.qty) || 1, {
      variantId: v?.id,
      size: this.selectedSize || v?.size,
      color: this.selectedColor || v?.color,
      imageUrl: this.currentImageUrl,
      unitPrice: this.displayPrice,
      maxStock: this.availableStock
    });
    this.added = true;
    setTimeout(() => this.added = false, 3e3);
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(HistoryService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], hostBindings: function ProductDetailComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ProductDetailComponent_keydown_HostBindingHandler($event) {
          return ctx.onKey($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page-container"], [1, "container"], [1, "text-center", "py-5"], [1, "spinner-border", "text-danger"], [1, "empty-state"], ["routerLink", "/products", 1, "btn", "btn-cs-primary", "mt-2"], ["aria-label", "breadcrumb", 1, "mb-4"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/products"], [1, "breadcrumb-item", "active"], [1, "row", "g-5"], [1, "col-md-6"], [1, "product-carousel", "cs-card"], [1, "carousel-main", 3, "touchstart", "touchend"], [1, "carousel-img", 3, "src", "alt"], [1, "leo-choice-badge"], [1, "carousel-badge", 3, "shifted"], [1, "carousel-thumbs"], [1, "d-flex", "justify-content-between", "align-items-start", "gap-2"], [1, "product-brand", "text-uppercase", "mb-1"], [1, "leo-inline"], [1, "display-font", "product-title"], [1, "text-muted", "small", "mb-2"], ["type", "button", 1, "btn", "btn-love", 3, "click", "title"], [1, "bi"], [1, "mb-3"], [1, "fs-3", "fw-bold"], [1, "text-muted", "text-decoration-line-through", "ms-2"], [1, "text-muted", "mb-3"], [1, "mb-2", "small"], [1, "mb-3", "d-flex", "flex-wrap", "gap-1"], [1, "mb-3", "stock-line"], [1, "text-muted", "small"], [1, "ms-1"], [1, "text-muted", "small", "ms-2"], [1, "alert", "alert-warning", "py-2", "small"], [1, "d-flex", "align-items-center", "gap-3", "mb-4", "flex-wrap"], [1, "input-group", "qty-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "number", "min", "1", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel", "max"], ["type", "button", 1, "btn", "btn-cs-primary", "btn-lg", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-bag-plus", "me-2"], [1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "alert", "alert-light", "border", "small", "py-2"], ["type", "button", "aria-label", "Previous", 1, "carousel-arrow", "carousel-prev", 3, "click"], [1, "bi", "bi-chevron-left"], ["type", "button", "aria-label", "Next", 1, "carousel-arrow", "carousel-next", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "carousel-counter"], [1, "carousel-badge"], [1, "color-dot", "sm"], ["type", "button", 1, "thumb", 3, "active"], ["type", "button", 1, "thumb", 3, "click"], [3, "src", "alt"], [1, "fw-semibold"], [1, "badge", "rounded-pill", "text-bg-light", "border"], [1, "mb-2", "d-flex", "align-items-center", "gap-2"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "color-swatch", 3, "selected", "disabled", "title"], [1, "color-dot"], [1, "text-muted"], ["type", "button", 1, "color-swatch", 3, "click", "disabled", "title"], [1, "mb-2"], ["type", "button", 1, "size-btn", 3, "selected", "disabled"], ["type", "button", 1, "size-btn", 3, "click", "disabled"], [1, "bi", "bi-check-circle", "me-2"], ["routerLink", "/cart", 1, "ms-auto", "fw-semibold"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductDetailComponent_Conditional_2_Template, 2, 0, "div", 2)(3, ProductDetailComponent_Conditional_3_Template, 5, 0)(4, ProductDetailComponent_Conditional_4_Template, 59, 43);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.loading ? 2 : !ctx.product ? 3 : 4);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.product-brand[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  color: var(--cs-text-muted, #6b7280);\n  font-size: 0.85rem;\n}\n.product-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.btn-love[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.btn-love.loved[_ngcontent-%COMP%] {\n  color: #e94560;\n  border-color: #fecdd3;\n  background: #fff5f7;\n}\n.product-carousel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.carousel-main[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3/4;\n  background: #f3f4f6;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.carousel-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.carousel-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);\n  color: #1a1a2e;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 3;\n}\n.carousel-prev[_ngcontent-%COMP%] {\n  left: 14px;\n}\n.carousel-next[_ngcontent-%COMP%] {\n  right: 14px;\n}\n.carousel-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 20px;\n}\n.carousel-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  background: rgba(255, 255, 255, 0.92);\n  color: #1a1a2e;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 20px;\n  display: flex;\n  gap: 6px;\n}\n.carousel-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n  overflow-x: auto;\n  background: #fff;\n}\n.thumb[_ngcontent-%COMP%] {\n  flex: 0 0 68px;\n  width: 68px;\n  height: 84px;\n  padding: 0;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  background: #f3f4f6;\n}\n.thumb.active[_ngcontent-%COMP%] {\n  border-color: #e94560;\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.color-swatch[_ngcontent-%COMP%] {\n  min-width: 72px;\n  padding: 8px 14px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.color-swatch.selected[_ngcontent-%COMP%] {\n  border-color: #e94560;\n  background: #fff5f7;\n  color: #e94560;\n}\n.color-swatch.disabled[_ngcontent-%COMP%], .color-swatch[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}\n.size-btn[_ngcontent-%COMP%] {\n  min-width: 48px;\n  height: 44px;\n  padding: 0 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 600;\n}\n.size-btn.selected[_ngcontent-%COMP%] {\n  border-color: #1a1a2e;\n  background: #1a1a2e;\n  color: #fff;\n}\n.size-btn.disabled[_ngcontent-%COMP%], .size-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.qty-group[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.stock-line[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n}\n.color-swatch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 72px;\n  padding: 8px 14px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.color-swatch.selected[_ngcontent-%COMP%] {\n  border-color: #e94560;\n  background: #fff5f7;\n  color: #e94560;\n  font-weight: 600;\n}\n.color-swatch.disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.color-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  display: inline-block;\n}\n.color-dot.sm[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.color-dot.light-dot[_ngcontent-%COMP%] {\n  border-color: #9ca3af;\n}\n.carousel-badge.shifted[_ngcontent-%COMP%] {\n  top: 52px;\n}\n.leo-choice-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  z-index: 4;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e,\n      #e94560);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 20px;\n  box-shadow: 0 4px 12px rgba(233, 69, 96, 0.3);\n}\n.leo-inline[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.7rem;\n  color: #e94560;\n  border: 1px solid #e94560;\n  border-radius: 4px;\n  padding: 1px 6px;\n  letter-spacing: 0.03em;\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\features\\products\\product-detail.component.ts", lineNumber: 318 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-2QY3DH5X.js.map
