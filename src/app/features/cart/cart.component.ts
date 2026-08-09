import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { AddressService, Address } from '../../core/services/address.service';
import { SettingsService, DeliverySettings } from '../../core/services/settings.service';
import { SeoService } from '../../core/services/seo.service';
import { CartItem } from '../../core/models/models';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="page-container">
      <div class="container">
        <h2 class="section-title mb-4">Shopping Cart</h2>

        @if (validating) {
          <div class="text-center py-4"><div class="spinner-border text-danger"></div></div>
        } @else if (cart.items().length === 0) {
          <div class="empty-state">
            <i class="bi bi-bag-x d-block"></i>
            <h5>Your cart is empty</h5>
            <p>Looks like you haven't added anything yet.</p>
            @if (staleMessage) {
              <div class="alert alert-warning d-inline-block mt-2">{{ staleMessage }}</div>
            }
            <a routerLink="/products" class="btn btn-cs-primary mt-2">Start Shopping</a>
          </div>
        } @else {
          @if (staleMessage) {
            <div class="alert alert-warning">{{ staleMessage }}</div>
          }
          <div class="row g-4">
            <div class="col-lg-8">
              @for (item of cart.items(); track trackItem(item)) {
                <div class="cs-card p-3 mb-3 d-flex gap-3 align-items-center">
                  <img [src]="item.imageUrl || item.product.imageUrl || 'https://via.placeholder.com/80x100'"
                       class="cart-item-img" [alt]="item.product.name">
                  <div class="flex-grow-1">
                    <h6 class="mb-1">{{ item.product.name }}</h6>
                    <div class="text-muted small">
                      {{ item.product.brand }}
                      @if (item.size) { · Size: <strong>{{ item.size }}</strong> }
                      @if (item.color) { · Color: <strong>{{ item.color }}</strong> }
                    </div>
                    <div class="fw-bold mt-1">₹{{ (item.unitPrice ?? item.product.price) | number:'1.0-0' }}</div>
                  </div>
                  <div class="input-group" style="width:120px;">
                    <button class="btn btn-sm btn-outline-secondary" (click)="changeQty(item, item.quantity - 1)">−</button>
                    <input type="number" class="form-control form-control-sm text-center" [value]="item.quantity"
                           (change)="changeQty(item, +$any($event.target).value)">
                    <button class="btn btn-sm btn-outline-secondary" (click)="changeQty(item, item.quantity + 1)">+</button>
                  </div>
                  <div class="fw-bold text-end" style="min-width:80px;">
                    ₹{{ ((item.unitPrice ?? item.product.price) * item.quantity) | number:'1.0-0' }}
                  </div>
                  <button class="btn btn-link text-danger p-0" (click)="removeItem(item)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              }
            </div>

            <div class="col-lg-4">
              <div class="cs-card p-4 sticky-top" style="top:90px;">
                <h5 class="mb-3">Order Summary</h5>
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">Subtotal ({{ cart.itemCount() }} items)</span>
                  <span>₹{{ cart.total() | number:'1.0-0' }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">Delivery</span>
                  <span>
                    @if (deliveryFee === 0) { <span class="text-success">FREE</span> }
                    @else { ₹{{ deliveryFee | number:'1.0-0' }} }
                  </span>
                </div>
                @if (deliveryFee > 0 && freeMin > 0) {
                  <div class="small text-muted mb-2">
                    Free delivery on orders ₹{{ freeMin | number:'1.0-0' }}+
                    (add ₹{{ (freeMin - cart.total()) | number:'1.0-0' }} more)
                  </div>
                }
                <hr>
                <div class="d-flex justify-content-between mb-2">
                  <strong>Order total</strong>
                  <strong class="fs-5">₹{{ grandTotal | number:'1.0-0' }}</strong>
                </div>
                @if (paymentMethod === 'COD') {
                  <div class="small text-muted mb-1">
                    Pay advance <strong>₹{{ codAdvance }}</strong> online now (deducted from total).
                  </div>
                  <div class="small text-muted mb-4">
                    Remaining <strong>₹{{ codRemaining | number:'1.0-0' }}</strong> payable at delivery.
                  </div>
                } @else {
                  <div class="mb-4"></div>
                }

                @if (auth.isLoggedIn()) {
                  <!-- Saved addresses -->
                  <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <label class="form-label mb-0">Shipping address</label>
                      <button type="button" class="btn btn-link btn-sm p-0" (click)="showNewAddress = !showNewAddress">
                        {{ showNewAddress ? 'Cancel' : '+ New address' }}
                      </button>
                    </div>

                    @if (addresses.length > 0 && !showNewAddress) {
                      <div class="d-flex flex-column gap-2 mb-2">
                        @for (a of addresses; track a.id) {
                          <label class="address-option"
                                 [class.selected]="selectedAddressId === a.id">
                            <input type="radio" name="addr" class="form-check-input me-2"
                                   [checked]="selectedAddressId === a.id"
                                   (change)="selectAddress(a)">
                            <div class="flex-grow-1">
                              <div class="fw-semibold small">
                                {{ a.label || 'Address' }}
                                @if (a.defaultAddress) {
                                  <span class="badge bg-secondary ms-1">Default</span>
                                }
                              </div>
                              <div class="text-muted small">{{ a.formatted || a.line1 }}</div>
                              @if (a.phone) {
                                <div class="text-muted small">📞 {{ a.phone }}</div>
                              }
                            </div>
                          </label>
                        }
                      </div>
                    }

                    @if (showNewAddress || addresses.length === 0) {
                      <div class="new-address-form border rounded p-2 mb-2">
                        <input class="form-control form-control-sm mb-2" [(ngModel)]="newAddr.label"
                               name="label" placeholder="Label (Home / Work)">
                        <input class="form-control form-control-sm mb-2" [(ngModel)]="newAddr.fullName"
                               name="fullName" placeholder="Full name">
                        <input class="form-control form-control-sm mb-2" [(ngModel)]="newAddr.line1"
                               name="line1" placeholder="Address line *" required>
                        <input class="form-control form-control-sm mb-2" [(ngModel)]="newAddr.line2"
                               name="line2" placeholder="Landmark / line 2">
                        <div class="row g-2 mb-2">
                          <div class="col-6">
                            <input class="form-control form-control-sm" [(ngModel)]="newAddr.city" name="city" placeholder="City">
                          </div>
                          <div class="col-6">
                            <input class="form-control form-control-sm" [(ngModel)]="newAddr.state" name="state" placeholder="State">
                          </div>
                        </div>
                        <div class="row g-2 mb-2">
                          <div class="col-6">
                            <input class="form-control form-control-sm" [(ngModel)]="newAddr.pincode" name="pincode"
                                   placeholder="PIN code" (blur)="checkPincode()" maxlength="6">
                            @if (pinMsg) {
                              <div class="small" [class.text-success]="pinValid" [class.text-danger]="!pinValid">{{ pinMsg }}</div>
                            }
                          </div>
                          <div class="col-6">
                            <input class="form-control form-control-sm" [(ngModel)]="newAddr.phone" name="addrPhone" placeholder="Phone">
                          </div>
                        </div>
                        <div class="form-check mb-2">
                          <input class="form-check-input" type="checkbox" [(ngModel)]="newAddr.defaultAddress" name="isDefault" id="defAddr">
                          <label class="form-check-label small" for="defAddr">Save as default</label>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-primary w-100"
                                (click)="saveNewAddress()" [disabled]="savingAddr || !newAddr.line1">
                          @if (savingAddr) { <span class="spinner-border spinner-border-sm me-1"></span> }
                          Save address
                        </button>
                      </div>
                    }

                    <!-- One-time address without saving -->
                    @if (!showNewAddress && addresses.length > 0) {
                      <details class="small mb-2">
                        <summary class="text-muted" style="cursor:pointer">Or enter a one-time address</summary>
                        <textarea class="form-control form-control-sm mt-2" rows="2"
                                  [(ngModel)]="oneTimeAddress" name="oneTime"
                                  placeholder="Full shipping address"></textarea>
                      </details>
                    }
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Contact phone</label>
                    <input type="text" class="form-control cs-form-control" [(ngModel)]="phone" placeholder="Phone for delivery">
                  </div>

                  <div class="mb-3">
                    <label class="form-label fw-semibold">Payment method</label>
                    <div class="d-flex flex-column gap-2">
                      <label class="border rounded p-2 d-flex align-items-center gap-2" style="cursor:pointer"
                             [class.border-danger]="paymentMethod==='PREPAID'" [class.bg-light]="paymentMethod==='PREPAID'">
                        <input type="radio" name="pay" [(ngModel)]="paymentMethod" value="PREPAID">
                        <div>
                          <div class="fw-semibold">Pay online (Prepaid)</div>
                          <div class="small text-muted">UPI / Card / NetBanking — simulated secure payment</div>
                        </div>
                      </label>
                      <label class="border rounded p-2 d-flex align-items-center gap-2" style="cursor:pointer"
                             [class.border-danger]="paymentMethod==='COD'" [class.bg-light]="paymentMethod==='COD'">
                        <input type="radio" name="pay" [(ngModel)]="paymentMethod" value="COD">
                        <div>
                          <div class="fw-semibold">Cash on Delivery</div>
                          <div class="small text-muted">
                            Pay advance ₹{{ codAdvance }}/- online now (deducted from order total);
                            remaining amount when your order arrives.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button class="btn btn-cs-primary w-100 btn-lg" (click)="checkout()"
                          [disabled]="placing || cart.items().length === 0">
                    @if (placing) {
                      <span class="spinner-border spinner-border-sm me-2"></span>
                    }
                    {{ paymentMethod === 'PREPAID' ? 'Continue to Payment' : ('Pay ₹' + codAdvance + ' advance & Place COD Order') }}
                  </button>
                  @if (error) {
                    <div class="alert alert-danger mt-3 mb-0 small">{{ error }}</div>
                  }
                  @if (success) {
                    <div class="alert alert-success mt-3 mb-0">
                      Order placed! <a routerLink="/orders">View Orders</a>
                    </div>
                  }
                } @else {
                  <p class="text-muted small mb-3">Please login to place an order.</p>
                  <a routerLink="/login" class="btn btn-cs-primary w-100">Login to Checkout</a>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .address-option {
      display: flex;
      align-items: flex-start;
      gap: 4px;
      padding: 10px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      cursor: pointer;
      margin: 0;
    }
    .address-option.selected {
      border-color: #e94560;
      background: #fff5f7;
    }
  `]
})
export class CartComponent implements OnInit {
  address = '';
  phone = '';
  placing = false;
  paymentMethod: 'COD' | 'PREPAID' = 'PREPAID';
  /** COD advance paid online; deducted from order total (not an extra fee). */
  readonly codAdvance = 99;
  error = '';
  success = false;
  validating = true;
  staleMessage = '';

  addresses: Address[] = [];
  selectedAddressId: number | null = null;
  showNewAddress = false;
  savingAddr = false;
  oneTimeAddress = '';
  newAddr: Address = this.emptyAddr();

  deliveryCharge = 49;
  freeMin = 999;
  pinValid = false;
  pinMsg = '';

  get deliveryFee(): number {
    const sub = this.cart.total();
    return sub >= this.freeMin ? 0 : this.deliveryCharge;
  }

  /** Order total = items + delivery (advance is part of this, not added on top). */
  get grandTotal(): number {
    return this.cart.total() + this.deliveryFee;
  }

  /** Amount still due after paying COD advance online. */
  get codRemaining(): number {
    return Math.max(0, this.grandTotal - this.codAdvance);
  }

  constructor(
    public cart: CartService,
    public auth: AuthService,
    private orderService: OrderService,
    private addressService: AddressService,
    private settings: SettingsService,
    private router: Router,
    private seo: SeoService
  ) {}

  async ngOnInit() {
    this.seo.setPage({
      title: 'Your Cart',
      description: 'Review the items in your Leo Wear cart and proceed to secure checkout.',
      canonicalPath: '/cart'
    });
    this.validating = true;
    const removed = await this.cart.validateAgainstServer();
    if (removed.length) {
      this.staleMessage = `Removed unavailable items from cart: ${removed.join(', ')}. Please add products again.`;
    }
    this.validating = false;
    this.settings.getDelivery().subscribe({
      next: res => {
        if (res.data) {
          this.deliveryCharge = Number(res.data.deliveryCharge) || 49;
          this.freeMin = Number(res.data.freeDeliveryMinAmount) || 999;
        }
      }
    });
    if (this.auth.isLoggedIn()) {
      this.loadAddresses();
    }
  }

  checkPincode() {
    const pin = (this.newAddr.pincode || '').trim();
    this.pinMsg = '';
    this.pinValid = false;
    if (!pin) return;
    if (!/^[1-9][0-9]{5}$/.test(pin)) {
      this.pinMsg = 'Enter a valid 6-digit PIN code';
      return;
    }
    this.settings.validatePincode(pin).subscribe({
      next: res => {
        const d = res.data;
        this.pinValid = !!d?.valid;
        if (d?.valid) {
          const place = [d.district, d.state].filter(Boolean).join(', ');
          this.pinMsg = place || ''; // no message when API is quiet
          if (d.district && !this.newAddr.city) this.newAddr.city = d.district;
          if (d.state && !this.newAddr.state) this.newAddr.state = d.state;
        } else {
          this.pinMsg = d?.message || 'Invalid PIN code';
        }
      },
      error: () => { this.pinMsg = 'Could not verify PIN code'; }
    });
  }

  emptyAddr(): Address {
    return {
      label: 'Home',
      fullName: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      defaultAddress: false
    };
  }

  loadAddresses() {
    this.addressService.list().subscribe({
      next: res => {
        this.addresses = res.data || [];
        const def = this.addresses.find(a => a.defaultAddress) || this.addresses[0];
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

  selectAddress(a: Address) {
    this.selectedAddressId = a.id ?? null;
    this.address = a.formatted || a.line1;
    if (a.phone) this.phone = a.phone;
    this.oneTimeAddress = '';
  }

  saveNewAddress() {
    if (!this.newAddr.line1?.trim()) return;
    const pin = (this.newAddr.pincode || '').trim();
    if (pin && !this.pinValid && !/^[1-9][0-9]{5}$/.test(pin)) {
      this.error = 'Please enter a valid Indian PIN code';
      return;
    }
    this.savingAddr = true;
    this.addressService.create(this.newAddr).subscribe({
      next: res => {
        this.savingAddr = false;
        this.showNewAddress = false;
        this.newAddr = this.emptyAddr();
        this.loadAddresses();
        if (res.data) this.selectAddress(res.data);
      },
      error: err => {
        this.savingAddr = false;
        this.error = err.error?.message || 'Failed to save address';
      }
    });
  }

  trackItem(item: CartItem): string {
    return `${item.product.id}-${item.variantId ?? ''}-${item.size ?? ''}-${item.color ?? ''}`;
  }

  itemKey(item: CartItem) {
    return {
      productId: Number(item.product.id),
      variantId: item.variantId != null ? Number(item.variantId) : undefined,
      size: item.size,
      color: item.color
    };
  }

  changeQty(item: CartItem, qty: number) {
    this.cart.updateQuantity(this.itemKey(item), qty);
  }

  removeItem(item: CartItem) {
    this.cart.remove(this.itemKey(item));
  }

  private resolveShipping(): string {
    if (this.oneTimeAddress?.trim()) return this.oneTimeAddress.trim();
    if (this.address?.trim()) return this.address.trim();
    return '';
  }

  async checkout() {
    this.placing = true;
    this.error = '';
    this.success = false;

    const incomplete = this.cart.items().filter(i => {
      const p = i.product;
      const needs = !!(p?.variants && p.variants.length)
        || !!(p?.availableSizes && p.availableSizes.length)
        || !!(p?.availableColors && p.availableColors.length);
      return needs && (!(i.size || '').trim() || !(i.color || '').trim());
    });
    if (incomplete.length) {
      this.placing = false;
      this.error = 'Please select size and color for: '
        + incomplete.map(i => i.product.name).join(', ')
        + '. Remove the item and add it again from the product page.';
      return;
    }

    const shipping = this.resolveShipping();
    if (!shipping) {
      this.placing = false;
      this.error = 'Please select or add a shipping address.';
      return;
    }

    const removed = await this.cart.validateAgainstServer();
    if (removed.length) {
      this.placing = false;
      this.error = `Some items are no longer available (${removed.join(', ')}). Cart updated — please review and try again.`;
      return;
    }
    if (this.cart.items().length === 0) {
      this.placing = false;
      this.error = 'Your cart is empty.';
      return;
    }

    const items = this.cart.items().map(i => ({
      productId: Number(i.product.id),
      variantId: i.variantId != null ? Number(i.variantId) : undefined,
      size: i.size || undefined,
      color: i.color || undefined,
      quantity: Number(i.quantity)
    }));

    this.orderService.placeOrder({
      items,
      shippingAddress: shipping,
      phone: this.phone || undefined,
      pincode: this.newAddr.pincode || this.addresses.find(a => a.id === this.selectedAddressId)?.pincode,
      paymentMethod: this.paymentMethod
    }).subscribe({
      next: (res) => {
        this.placing = false;
        const order = res.data;
        if (order?.id) {
          // PREPAID: full amount online. COD: platform fee ₹99 online, rest at delivery.
          this.router.navigate(['/pay', order.id], { queryParams: { clearCart: '1' } });
          return;
        }
        this.success = true;
        this.cart.clear();
        setTimeout(() => this.router.navigate(['/orders']), 1500);
      },
      error: (err) => {
        this.placing = false;
        this.error = err.error?.message || 'Failed to place order';
        if (this.error.toLowerCase().includes('product not found') || this.error.toLowerCase().includes('outdated')) {
          this.cart.clear();
          this.error += ' Cart cleared — please add items again from the shop.';
        }
      }
    });
  }
}
