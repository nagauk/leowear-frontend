import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { SeoService } from '../../core/services/seo.service';
import { Order, OrderItem, ReturnRequest } from '../../core/models/models';

@Component({
  selector: 'app-returns',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:820px;">
        <h2 class="section-title mb-4">Returns</h2>

        <div class="cs-card p-4 mb-4">
          <h5 class="mb-3">Request a Return</h5>
          <p class="text-muted small mb-3">
            Only <strong>delivered</strong> orders can be returned. Select an order and the item you want to return.
          </p>

          <form (ngSubmit)="submitReturn()">
            <div class="mb-3">
              <label class="form-label">Order *</label>
              <select class="form-select cs-form-control" [(ngModel)]="orderId" name="orderId"
                      (ngModelChange)="onOrderChange($event)" required>
                <option [ngValue]="null">— Select order —</option>
                @for (o of returnableOrders; track o.id) {
                  <option [ngValue]="o.id">
                    {{ o.orderNumber }} · ₹{{ o.totalAmount | number:'1.0-0' }} · {{ o.createdAt | date:'mediumDate' }}
                  </option>
                }
              </select>
              @if (ordersLoaded && returnableOrders.length === 0) {
                <div class="form-text text-muted">No delivered orders available for return.</div>
              }
            </div>

            @if (selectedOrder) {
              <div class="mb-3">
                <label class="form-label">Item to return *</label>
                <select class="form-select cs-form-control" [(ngModel)]="orderItemId" name="orderItemId"
                        (ngModelChange)="onItemChange($event)" required>
                  <option [ngValue]="null">— Select item —</option>
                  @for (item of selectedOrder.items; track item.id) {
                    <option [ngValue]="item.id">
                      {{ item.productName }}
                      @if (item.size || item.color) {
                        ({{ item.size }}{{ item.size && item.color ? ' / ' : '' }}{{ item.color }})
                      }
                      · Qty {{ item.quantity }} · ₹{{ item.unitPrice | number:'1.0-0' }}
                    </option>
                  }
                </select>
              </div>

              @if (selectedItem) {
                <div class="mb-3">
                  <label class="form-label">Quantity to return *</label>
                  <input type="number" class="form-control cs-form-control" style="max-width:120px"
                         [(ngModel)]="quantity" name="quantity" min="1" [max]="selectedItem.quantity" required>
                  <div class="form-text">Max {{ selectedItem.quantity }}</div>
                </div>
              }
            }

            <div class="mb-3">
              <label class="form-label">Reason *</label>
              <select class="form-select cs-form-control mb-2" [(ngModel)]="reasonPreset" name="reasonPreset"
                      (ngModelChange)="onReasonPreset($event)">
                <option value="">— Choose a reason —</option>
                <option value="Wrong size">Wrong size</option>
                <option value="Wrong color / item received">Wrong color / item received</option>
                <option value="Damaged / defective">Damaged / defective</option>
                <option value="Not as described">Not as described</option>
                <option value="Changed mind">Changed mind</option>
                <option value="Other">Other</option>
              </select>
              <textarea class="form-control cs-form-control" [(ngModel)]="reason" name="reason" rows="3" required
                        placeholder="Add more details (required)"></textarea>
            </div>

            @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
            @if (success) { <div class="alert alert-success small">Return request submitted successfully!</div> }

            <button type="submit" class="btn btn-cs-primary" [disabled]="submitting || !canSubmit">
              @if (submitting) { <span class="spinner-border spinner-border-sm me-2"></span> }
              Submit Return Request
            </button>
          </form>
        </div>

        <h5 class="mb-3">My Return Requests</h5>
        @if (loading) {
          <div class="text-center py-4"><div class="spinner-border text-danger"></div></div>
        } @else if (returns.length === 0) {
          <div class="empty-state py-4">
            <i class="bi bi-arrow-return-left d-block"></i>
            <p class="mb-0">No return requests yet</p>
          </div>
        } @else {
          @for (r of returns; track r.id) {
            <div class="cs-card p-3 mb-2">
              <div class="d-flex justify-content-between align-items-start gap-2">
                <div>
                  <strong>Order #{{ r.orderNumber }}</strong>
                  @if (r.productName) {
                    <div class="small mt-1">
                      {{ r.productName }}
                      @if (r.size || r.color) {
                        · {{ r.size }}{{ r.size && r.color ? ' / ' : '' }}{{ r.color }}
                      }
                      @if (r.quantity) { · Qty {{ r.quantity }} }
                    </div>
                  }
                  <div class="text-muted small">{{ r.createdAt | date:'medium' }}</div>
                  <div class="mt-1">{{ r.reason }}</div>
                  @if (r.adminNotes) {
                    <div class="text-muted small mt-1"><em>Admin: {{ r.adminNotes }}</em></div>
                  }
                </div>
                <span class="badge-status" [class]="(r.status || '').toLowerCase()">{{ r.status }}</span>
              </div>
            </div>
          }
        }
      </div>
    </div>
  `
})
export class ReturnsComponent implements OnInit {
  returns: ReturnRequest[] = [];
  orders: Order[] = [];
  loading = true;
  ordersLoaded = false;

  orderId: number | null = null;
  orderItemId: number | null = null;
  quantity = 1;
  reason = '';
  reasonPreset = '';
  submitting = false;
  error = '';
  success = false;

  get returnableOrders(): Order[] {
    return this.orders.filter(o => (o.status || '').toUpperCase() === 'DELIVERED');
  }

  get selectedOrder(): Order | null {
    if (this.orderId == null) return null;
    return this.orders.find(o => Number(o.id) === Number(this.orderId)) || null;
  }

  get selectedItem(): OrderItem | null {
    if (!this.selectedOrder || this.orderItemId == null) return null;
    return (this.selectedOrder.items || []).find(i => Number(i.id) === Number(this.orderItemId)) || null;
  }

  get canSubmit(): boolean {
    return !!this.orderId && !!this.orderItemId && !!this.reason?.trim()
      && this.quantity >= 1
      && (!this.selectedItem || this.quantity <= (this.selectedItem.quantity || 1));
  }

  constructor(private orderService: OrderService, private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Returns & Refunds',
      description: 'Manage returns and refunds for your Leo Wear orders.',
      canonicalPath: '/returns'
    });
    this.route.queryParams.subscribe(p => {
      if (p['orderId']) this.orderId = +p['orderId'];
    });
    this.loadReturns();
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getMyOrders(0, 50).subscribe({
      next: res => {
        this.orders = res.data?.content || [];
        this.ordersLoaded = true;
        if (this.orderId) this.onOrderChange(this.orderId);
      },
      error: () => { this.ordersLoaded = true; }
    });
  }

  loadReturns() {
    this.orderService.getMyReturns().subscribe({
      next: res => { this.returns = res.data?.content || []; this.loading = false; },
      error: () => this.loading = false
    });
  }

  onOrderChange(id: number | null) {
    this.orderId = id;
    this.orderItemId = null;
    this.quantity = 1;
    const order = this.selectedOrder;
    if (order?.items?.length === 1 && order.items[0].id != null) {
      this.orderItemId = Number(order.items[0].id);
      this.quantity = 1;
    }
  }

  onItemChange(_id: number | null) {
    this.quantity = 1;
  }

  onReasonPreset(val: string) {
    if (val && val !== 'Other') {
      this.reason = val;
    } else if (val === 'Other') {
      this.reason = '';
    }
  }

  submitReturn() {
    if (!this.canSubmit || this.orderId == null || this.orderItemId == null) return;
    this.submitting = true;
    this.error = '';
    this.success = false;
    this.orderService.createReturn({
      orderId: Number(this.orderId),
      orderItemId: Number(this.orderItemId),
      quantity: Number(this.quantity) || 1,
      reason: this.reason.trim()
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.success = true;
        this.reason = '';
        this.reasonPreset = '';
        this.orderId = null;
        this.orderItemId = null;
        this.quantity = 1;
        this.loadReturns();
      },
      error: (err) => {
        this.submitting = false;
        this.error = err.error?.message || 'Failed to submit return';
      }
    });
  }
}
