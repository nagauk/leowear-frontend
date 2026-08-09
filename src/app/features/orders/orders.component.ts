import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { SeoService } from '../../core/services/seo.service';
import { Order } from '../../core/models/models';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <h2 class="section-title mb-4">My Orders</h2>

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
                <span class="badge-status" [class]="(order.status || '').toLowerCase()">{{ order.status }}</span>
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
                  <div class="text-muted small">Order total</div>
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
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  error = '';

  constructor(private orderService: OrderService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'My Orders',
      description: 'Track your Leo Wear orders and view order history.',
      canonicalPath: '/orders'
    });
    this.load();
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
}
