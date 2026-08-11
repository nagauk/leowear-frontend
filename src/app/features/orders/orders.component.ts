import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { SeoService } from '../../core/services/seo.service';
import { Order } from '../../core/models/models';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <h2 class="section-title mb-4">My Orders</h2>

        @if (verifyingRecent) {
          <div class="alert alert-info py-2 d-flex align-items-center gap-2">
            <span class="spinner-border spinner-border-sm"></span>
            <span>Finalising your recent payment — this page will refresh automatically.</span>
          </div>
        }

        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else if (error) {
          <div class="alert alert-danger">{{ error }}
            <button class="btn btn-sm btn-outline-danger ms-2" (click)="load()">Retry</button>
          </div>
        } @else if (orders.length === 0) {
          <div class="empty-state">
            <i class="bi bi-box-seam d-block"></i>
            <h5>No orders yet</h5>
            <p>Start shopping to see your orders here.</p>
            <a routerLink="/products" class="btn btn-cs-primary mt-2">Browse Products</a>
          </div>
        } @else {
          @for (order of orders; track order.id) {
            <div class="cs-card p-4 mb-3">
              <div class="d-flex flex-wrap justify-content-between align-items-start mb-3">
                <div>
                  <h6 class="mb-1">Order {{ order.orderNumber }}</h6>
                  <span class="text-muted small">{{ order.createdAt | date:'medium' }}</span>
                </div>
                <div class="d-flex flex-wrap align-items-center gap-2">
                  @if (totalSavedOf(order) > 0) {
                    <span class="badge-saved">
                      <i class="bi bi-piggy-bank me-1"></i>
                      You saved ₹{{ totalSavedOf(order) | number:'1.0-0' }} on this order
                    </span>
                  }
                  <span class="badge-status" [class]="(order.status || '').toLowerCase()">{{ order.status }}</span>
                </div>
              </div>
              <div class="row g-2 mb-3">
                @for (item of (order.items || []); track item.id || $index) {
                  <div class="col-12 d-flex align-items-center gap-3">
                    <img [src]="item.productImage || 'https://via.placeholder.com/50'" width="50" height="60"
                         style="object-fit:cover;border-radius:6px;" [alt]="item.productName">
                    <div class="flex-grow-1">
                      <div class="fw-medium">{{ item.productName }}</div>
                      <div class="text-muted small">
                        @if (item.size || item.color) {
                          <span>{{ item.size }}{{ item.size && item.color ? ' / ' : '' }}{{ item.color }} · </span>
                        }
                        Qty: {{ item.quantity }} × ₹{{ item.unitPrice | number:'1.0-0' }}
                      </div>
                    </div>
                    <div class="fw-semibold">₹{{ item.subtotal | number:'1.0-0' }}</div>
                  </div>
                }
              </div>
              <div class="d-flex flex-wrap justify-content-between align-items-start border-top pt-3 gap-2">
                <div class="text-muted small">
                  @if (order.shippingAddress) { <i class="bi bi-geo-alt me-1"></i>{{ order.shippingAddress }} }
                  @if (order.shippingDetails && (order.status === 'SHIPPED' || order.status === 'DELIVERED')) {
                    <div class="mt-1">
                      <i class="bi bi-truck me-1"></i>
                      <span class="text-dark">{{ order.shippingDetails }}</span>
                    </div>
                  }
                  <div class="mt-2">
                    <span class="me-2">Payment:</span>
                    @if (isFullyPaid(order)) {
                      <span class="badge bg-success">Paid</span>
                      @if (order.paymentRef) {
                        <span class="text-muted ms-1">· {{ order.paymentRef }}</span>
                      }
                    } @else if (isPartial(order)) {
                      <span class="badge bg-info text-dark">Partial payment</span>
                      @if (order.paymentMethod) {
                        <span class="text-muted ms-1">({{ order.paymentMethod }})</span>
                      }
                    } @else {
                      <span class="badge bg-warning text-dark">{{ order.paymentStatus || 'PENDING' }}</span>
                      @if (order.paymentMethod) {
                        <span class="text-muted ms-1">({{ order.paymentMethod }})</span>
                      }
                    }
                  </div>
                  @if (isPartial(order) || (canPay(order) && paidOf(order) > 0)) {
                    <div class="mt-1">
                      Paid: <strong class="text-dark">₹{{ paidOf(order) | number:'1.0-0' }}</strong>
                      <span class="mx-1">·</span>
                      Remaining: <strong class="text-danger">₹{{ remainingOf(order) | number:'1.0-0' }}</strong>
                    </div>
                  }
                </div>
                <div class="text-end">
                  @if (productDiscountOf(order) > 0 || (order.discountAmount && order.discountAmount > 0)
                       || (order.deliveryCharge && order.deliveryCharge > 0)
                       || (order.subtotal && order.subtotal > 0)) {
                    <div class="text-muted small lh-sm mb-1">
                      @if (order.subtotal && order.subtotal > 0) {
                        <div>Subtotal: <span class="text-dark">₹{{ order.subtotal | number:'1.0-0' }}</span></div>
                      }
                      @if (productDiscountOf(order) > 0) {
                        <div class="text-success">
                          Product discount: <span class="fw-medium">−₹{{ productDiscountOf(order) | number:'1.0-0' }}</span>
                        </div>
                      }

                      @if (order.deliveryCharge && order.deliveryCharge > 0) {
                        <div>Delivery: <span class="text-dark">₹{{ order.deliveryCharge | number:'1.0-0' }}</span></div>
                      }
                    </div>
                  }
                  <div class="text-muted small">Paid Amount</div>
                  <div class="fw-bold fs-5">₹{{ order.totalAmount | number:'1.0-0' }}</div>
                </div>
              </div>
              <div class="mt-3 d-flex flex-wrap gap-2">
                @if (canPay(order)) {
                  <a [routerLink]="['/pay', order.id]" class="btn btn-sm btn-cs-primary">
                    <i class="bi bi-credit-card me-1"></i>
                    {{ isPartial(order) ? ('Pay remaining ₹' + remainingOf(order)) : 'Pay Now' }}
                  </a>
                }
                @if (order.shippingDetails && (order.status === 'SHIPPED' || order.status === 'DELIVERED')) {
                  <div class="mt-1">
                    <i class="bi bi-truck me-1"></i>
                    <span class="text-dark">{{ order.shippingDetails }}</span>
                  </div>
                }
              </div>
            </div>
          }
        }
      </div>
    </div>
  `
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  loading = true;
  error = '';
  /** Poll watcher: tracks the `?paid=<orderId>` flow. */
  private paidPollingSub: Subscription | null = null;
  /** Watches for the ?paid=<id> query so we only show the "verifying" banner while polling. */
  verifyingRecent: number | null = null;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'My Orders',
      description: 'Track your Leo Wear orders and view order history.',
      canonicalPath: '/orders'
    });
    this.load();

    // If we landed here via the payment-success redirect, poll /recent-paid
    // until the order flips to PAID (the async verify worker races the
    // redirect). 30-second cap so a permanently-stuck verify doesn't pin the page.
    const paidId = Number(this.route.snapshot.queryParamMap.get('paid'));
    if (paidId) {
      this.verifyingRecent = paidId;
      this.startPollingRecentPaid(paidId);
    }
  }

  ngOnDestroy() {
    this.paidPollingSub?.unsubscribe();
  }

  private startPollingRecentPaid(orderId: number) {
    let attempts = 0;
    const maxAttempts = 30;
    this.paidPollingSub?.unsubscribe();
    this.paidPollingSub = interval(1000).subscribe(() => {
      attempts++;
      if (attempts > maxAttempts) {
        this.paidPollingSub?.unsubscribe();
        this.paidPollingSub = null;
        this.verifyingRecent = null;
        return;
      }
      this.orderService.getRecentPaid(orderId).subscribe({
        next: res => {
          if (res?.success && res.data) {
            // Order is PAID. Refresh the list once with the server's snapshot
            // and clear the ?paid= query so a browser refresh doesn't restart polling.
            this.paidPollingSub?.unsubscribe();
            this.paidPollingSub = null;
            this.verifyingRecent = null;
            this.load();
            this.router.navigate([], { queryParams: { paid: null }, queryParamsHandling: 'merge' });
          }
          // else 404 → still pending, keep polling
        },
        error: () => {
          // 404 = still processing. Non-404 (5xx) — give up to avoid hammering.
          // Distinguish by status — easiest path: continue on any error up to the cap.
        }
      });
    });
  }

  load() {
    this.loading = true;
    this.error = '';
    this.orderService.getMyOrders(0, 50).subscribe({
      next: res => {
        const data: any = res?.data;
        if (Array.isArray(data)) {
          this.orders = data;
        } else if (data?.content && Array.isArray(data.content)) {
          this.orders = data.content;
        } else if (data?.orders && Array.isArray(data.orders)) {
          this.orders = data.orders;
        } else {
          this.orders = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.orders = [];
        this.loading = false;
        this.error = err.error?.message || 'Could not load orders. Please try again.';
      }
    });
  }

  isFullyPaid(order: Order): boolean {
    return (order.paymentStatus || '').toUpperCase() === 'PAID';
  }

  isPartial(order: Order): boolean {
    return (order.paymentStatus || '').toUpperCase() === 'PARTIAL';
  }

  paidOf(order: Order): number {
    const p = Number((order as any).paidAmount);
    if (!isNaN(p) && p >= 0) return p;
    if (this.isPartial(order)) return Number((order as any).platformCharge) || 99;
    if (this.isFullyPaid(order)) return Number(order.totalAmount) || 0;
    return 0;
  }

  remainingOf(order: Order): number {
    const r = Number((order as any).remainingAmount);
    if (!isNaN(r) && r >= 0) return r;
    const total = Number(order.totalAmount) || 0;
    return Math.max(0, total - this.paidOf(order));
  }

  canPay(order: Order): boolean {
    const cancelled = ['CANCELLED', 'RETURNED'].includes((order.status || '').toUpperCase());
    if (cancelled || this.isFullyPaid(order)) return false;
    if (order.needsPayment === false) return false;
    return this.isPartial(order) || (order.paymentStatus || '').toUpperCase() === 'PENDING' || order.needsPayment === true;
  }

  /** Product-level discount across the order (line-MRP − paid-unit × qty). */
  productDiscountOf(order: Order): number {
    return Number((order as any).productDiscountTotal) || 0;
  }

  /** Total saved on the order = product discount + coupon discount. */
  totalSavedOf(order: Order): number {
    if (typeof (order as any).totalSaved === 'number') {
      return (order as any).totalSaved;
    }
    return this.productDiscountOf(order) + (Number((order as any).discountAmount) || 0);
  }
}
