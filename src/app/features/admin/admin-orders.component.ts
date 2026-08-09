import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { Order, OrderItem } from '../../core/models/models';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container-fluid px-4">
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a routerLink="/admin" class="btn btn-outline-dark btn-sm">Dashboard</a>
          <a routerLink="/admin/products" class="btn btn-outline-dark btn-sm">Products</a>
          <a routerLink="/admin/orders" class="btn btn-cs-dark btn-sm">Orders</a>
          <a routerLink="/admin/returns" class="btn btn-outline-dark btn-sm">Returns</a>
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <h2 class="section-title mb-0">Manage Orders</h2>
          <div class="d-flex align-items-center gap-2">
            <span class="text-muted small">{{ totalElements }} order(s)</span>
            <button class="btn btn-sm btn-outline-dark"
                    [disabled]="totalElements === 0 || downloadingPdf"
                    (click)="downloadPdf()">
              @if (downloadingPdf) {
                <span class="spinner-border spinner-border-sm me-1"></span> Generating…
              } @else {
                <i class="bi bi-file-earmark-pdf me-1"></i> Download PDF
              }
            </button>
          </div>
        </div>

        <div class="cs-card p-3 mb-4 filter-bar">
          <div class="row g-2 align-items-end">
            <div class="col-md-3">
              <label class="form-label small mb-1">Search</label>
              <input type="text" class="form-control form-control-sm"
                     [(ngModel)]="filter.keyword" (keyup.enter)="applyFilters()"
                     placeholder="Order # or customer">
            </div>
            <div class="col-md-2">
              <label class="form-label small mb-1">Status</label>
              <select class="form-select form-select-sm" [(ngModel)]="filter.status" (change)="applyFilters()">
                <option value="">All statuses</option>
                @for (s of statuses; track s) {
                  <option [value]="s">{{ label(s) }}</option>
                }
              </select>
            </div>
            <div class="col-md-2">
              <label class="form-label small mb-1">Payment</label>
              <select class="form-select form-select-sm" [(ngModel)]="paymentFilter" (change)="applyPaymentFilter()">
                <option value="">All payments</option>
                <option value="PAID">Paid</option>
                <option value="PARTIAL">Partial</option>
                <option value="PENDING">Unpaid / Pending</option>
                <option value="COD">COD</option>
                <option value="PREPAID">Prepaid</option>
              </select>
            </div>
            <div class="col-md-2">
              <label class="form-label small mb-1">From</label>
              <input type="date" class="form-control form-control-sm" [(ngModel)]="filter.fromDate" (change)="applyFilters()">
            </div>
            <div class="col-md-2">
              <label class="form-label small mb-1">To</label>
              <input type="date" class="form-control form-control-sm" [(ngModel)]="filter.toDate" (change)="applyFilters()">
            </div>
            <div class="col-md-3 d-flex gap-2">
              <button class="btn btn-sm btn-cs-primary" (click)="applyFilters()">
                <i class="bi bi-funnel me-1"></i> Filter
              </button>
              <button class="btn btn-sm btn-outline-secondary" (click)="clearFilters()">Clear</button>
            </div>
          </div>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <button type="button" class="btn btn-sm chip" [class.active]="!filter.status" (click)="filterByStatus('')">All</button>
            @for (s of statuses; track s) {
              <button type="button" class="btn btn-sm chip" [class.active]="filter.status === s" (click)="filterByStatus(s)">{{ label(s) }}</button>
            }
          </div>
        </div>

        @if (toast) {
          <div class="alert alert-dismissible fade show py-2"
               [class.alert-success]="toast.type === 'ok'"
               [class.alert-danger]="toast.type === 'err'">
            {{ toast.text }}
            <button type="button" class="btn-close" (click)="toast = null"></button>
          </div>
        }

        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else if (orders.length === 0) {
          <div class="empty-state">
            <h5>No orders found</h5>
            <p class="text-muted">Try adjusting filters or wait for new customer orders.</p>
          </div>
        } @else {
          <div class="cs-card p-0 table-shell">
            <div class="table-scroll">
              <table class="table cs-table mb-0 align-middle">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Shipping address</th>
                    <th>Phone</th>
                    <th style="min-width:240px">Items</th>
                    <th style="min-width:220px">Shipping details</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th style="min-width:170px">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (o of orders; track o.id) {
                    <tr [class.row-updating]="updatingId === o.id" [class.row-flash]="flashId === o.id">
                      <td><code>{{ o.orderNumber }}</code></td>
                      <td><strong>{{ o.username }}</strong></td>
                      <td class="small" style="max-width:160px">
                        @if (o.shippingAddress) {
                          <span [title]="o.shippingAddress">{{ o.shippingAddress }}</span>
                        } @else { <span class="text-muted">—</span> }
                      </td>
                      <td class="small">
                        @if (o.phone) {
                          <a [href]="'tel:' + o.phone">{{ o.phone }}</a>
                        } @else { <span class="text-muted">—</span> }
                      </td>
                      <td class="small">
                        @if (itemsOf(o).length) {
                          <div class="d-flex flex-column gap-1">
                            @for (it of itemsOf(o); track $index) {
                              <div>
                                <div class="fw-medium">{{ it.productName || 'Item' }}</div>
                                <div class="text-muted">
                                  {{ formatVariant(it) }} · Qty: {{ it.quantity }} × ₹{{ formatPrice(it.unitPrice) }}
                                </div>
                              </div>
                            }
                          </div>
                        } @else {
                          <span class="badge bg-light text-dark border">0 items</span>
                        }
                      </td>
                      <td class="small">
                        @if (!canEditShipping(o)) {
                          <div>
                            @if (o.shippingDetails) {
                              <span class="text-break">{{ o.shippingDetails }}</span>
                              <div class="text-muted small mt-1"><i class="bi bi-lock me-1"></i>Editable after confirmation</div>
                            } @else {
                              <span class="text-muted">Confirm order first</span>
                            }
                          </div>
                        } @else if (editingShippingId === o.id) {
                          <div class="d-flex flex-column gap-1">
                            <input type="text" class="form-control form-control-sm"
                                   [(ngModel)]="shippingDraft"
                                   placeholder="Courier / Tracking # / AWB"
                                   [disabled]="savingShippingId === o.id"
                                   (keyup.enter)="commitShipping(o)"
                                   (keyup.escape)="cancelShippingEdit()">
                            <div class="d-flex gap-1">
                              <button class="btn btn-sm btn-cs-primary" [disabled]="savingShippingId === o.id" (click)="commitShipping(o)">
                                @if (savingShippingId === o.id) { <span class="spinner-border spinner-border-sm"></span> } @else { Save }
                              </button>
                              <button class="btn btn-sm btn-outline-secondary" (click)="cancelShippingEdit()">Cancel</button>
                            </div>
                          </div>
                        } @else {
                          <div class="d-flex align-items-start gap-2">
                            <span class="flex-grow-1 text-break" [class.text-muted]="!o.shippingDetails">
                              {{ o.shippingDetails || 'Not set' }}
                            </span>
                            <div class="btn-group-vertical">
                              @if (o.shippingDetails) {
                                <button type="button" class="btn btn-sm btn-link p-0" (click)="copyToClipboard(o.shippingDetails!)">
                                  <i class="bi bi-clipboard"></i>
                                </button>
                              }
                              <button type="button" class="btn btn-sm btn-outline-primary" (click)="startShippingEdit(o)">
                                {{ o.shippingDetails ? 'Edit' : 'Add' }}
                              </button>
                            </div>
                          </div>
                        }
                      </td>
                      <td class="small">
                        <div class="fw-semibold">₹{{ o.totalAmount | number:'1.0-0' }}</div>
                        @if ((o.paymentStatus || '').toUpperCase() === 'PARTIAL' || paidOf(o) > 0) {
                          <div class="text-muted" style="font-size:0.75rem">
                            Paid ₹{{ paidOf(o) | number:'1.0-0' }}
                            @if (remainingOf(o) > 0) {
                              · Due ₹{{ remainingOf(o) | number:'1.0-0' }}
                            }
                          </div>
                        }
                      </td>
                      <td class="small">
                        @if ((o.paymentStatus || '').toUpperCase() === 'PAID') {
                          <span class="badge bg-success">Paid</span>
                        } @else if ((o.paymentStatus || '').toUpperCase() === 'PARTIAL') {
                          <span class="badge bg-info text-dark">Partial</span>
                        } @else {
                          <span class="badge bg-warning text-dark">{{ o.paymentStatus || 'PENDING' }}</span>
                        }
                        <div class="text-muted mt-1">{{ o.paymentMethod || '—' }}</div>
                        @if (o.paymentRef) {
                          <div class="font-monospace text-muted" style="font-size:0.7rem">Txn: {{ o.paymentRef }}</div>
                        }
                      </td>
                      <td>
                        <span class="badge-status" [class]="statusClass(o)">{{ statusValue(o) }}</span>
                      </td>
                      <td class="small">{{ o.createdAt | date:'mediumDate' }}</td>
                      <td>
                        <div class="d-flex flex-column gap-1">
                          <button type="button"
                                  class="btn btn-sm btn-outline-dark"
                                  [disabled]="downloadingInvoiceId === o.id"
                                  (click)="downloadInvoice(o)"
                                  title="Download invoice PDF for shipping">
                            @if (downloadingInvoiceId === o.id) {
                              <span class="spinner-border spinner-border-sm me-1"></span>
                            } @else {
                              <i class="bi bi-receipt me-1"></i>
                            }
                            Invoice
                          </button>
                          @if (canMarkFullyPaid(o)) {
                            <button type="button"
                                    class="btn btn-sm btn-outline-success"
                                    [disabled]="markingPaidId === o.id"
                                    (click)="markFullyPaid(o)"
                                    title="Mark remaining COD amount as collected">
                              @if (markingPaidId === o.id) {
                                <span class="spinner-border spinner-border-sm me-1"></span>
                              } @else {
                                <i class="bi bi-cash-coin me-1"></i>
                              }
                              Mark fully paid
                            </button>
                          }
                          <div class="status-cell">
                            <select class="form-select form-select-sm status-select"
                                    [ngModel]="statusValue(o)"
                                    (ngModelChange)="onStatusChange(o, $event)"
                                    [disabled]="updatingId === o.id">
                              @for (s of statuses; track s) {
                                <option [ngValue]="s">{{ label(s) }}</option>
                              }
                            </select>
                            @if (updatingId === o.id) {
                              <span class="spinner-border spinner-border-sm text-secondary ms-1"></span>
                            } @else if (flashId === o.id) {
                              <i class="bi bi-check-circle-fill text-success ms-1"></i>
                            }
                          </div>
                        </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>

          @if (totalPages > 1) {
            <div class="d-flex justify-content-between align-items-center mt-3">
              <button class="btn btn-sm btn-outline-secondary" [disabled]="page === 0" (click)="goPage(page - 1)">Previous</button>
              <span class="small text-muted">Page {{ page + 1 }} of {{ totalPages }} · {{ totalElements }} total</span>
              <button class="btn btn-sm btn-outline-secondary" [disabled]="page >= totalPages - 1" (click)="goPage(page + 1)">Next</button>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    .filter-bar { overflow: visible; }
    .table-shell { overflow: visible; border-radius: 12px; }
    .table-scroll { overflow-x: auto; overflow-y: visible; }
    .status-cell { position: relative; z-index: 1; display: flex; align-items: center; min-width: 150px; }
    .status-select { min-width: 140px; cursor: pointer; z-index: 2; }
    .badge-status {
      display: inline-block; padding: 0.25rem 0.6rem; border-radius: 999px;
      font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
    }
    .badge-status.pending { background: #fef3c7; color: #92400e; }
    .badge-status.confirmed { background: #dbeafe; color: #1e40af; }
    .badge-status.shipped { background: #e0e7ff; color: #3730a3; }
    .badge-status.delivered { background: #d1fae5; color: #065f46; }
    .badge-status.cancelled { background: #fee2e2; color: #991b1b; }
    .badge-status.returned { background: #f3e8ff; color: #6b21a8; }
    .chip { border-radius: 999px; border: 1px solid #e5e7eb; background: #fff; font-size: 0.75rem; padding: 0.25rem 0.75rem; }
    .chip.active { border-color: #1a1a2e; background: #1a1a2e; color: #fff; }
    .row-updating { opacity: 0.75; }
    .row-flash { animation: flashOk 0.8s ease; }
    @keyframes flashOk { 0% { background: #d1fae5; } 100% { background: transparent; } }
  `]
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  updatingId: number | null = null;
  flashId: number | null = null;
  downloadingPdf = false;
  downloadingInvoiceId: number | null = null;
  markingPaidId: number | null = null;
  toast: { type: 'ok' | 'err'; text: string } | null = null;

  page = 0;
  size = 50; // show more orders per page
  totalPages = 0;
  totalElements = 0;

  filter = { keyword: '', status: '', fromDate: '', toDate: '' };
  paymentFilter = '';
  allOrdersCache: Order[] = [];
  statuses = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED'];

  editingShippingId: number | null = null;
  shippingDraft = '';
  savingShippingId: number | null = null;

  constructor(private orderService: OrderService, private auth: AuthService, private seo: SeoService) {}

  isStaff = () => this.auth.isStaff();

  itemsOf(o: Order): OrderItem[] {
    return Array.isArray(o?.items) ? o.items : [];
  }

  statusValue(o: Order): string {
    const s: any = o?.status;
    if (s == null) return 'PENDING';
    if (typeof s === 'string') return s.toUpperCase();
    if (typeof s === 'object' && s.name) return String(s.name).toUpperCase();
    return String(s).toUpperCase();
  }

  statusClass(o: Order): string {
    return this.statusValue(o).toLowerCase();
  }

  canEditShipping(o: Order): boolean {
    const s = this.statusValue(o);
    return s === 'CONFIRMED' || s === 'SHIPPED' || s === 'DELIVERED';
  }

  formatVariant(it: any): string {
    const size = (it?.size ?? '').toString().trim();
    const color = (it?.color ?? '').toString().trim();
    if (size && color) return `${size} / ${color}`;
    return size || color || '—';
  }

  formatPrice(price: number | null | undefined): string {
    if (price == null) return '—';
    return Math.round(Number(price)).toLocaleString('en-IN');
  }

  startShippingEdit(o: Order) {
    this.editingShippingId = o.id!;
    this.shippingDraft = o.shippingDetails || '';
  }

  cancelShippingEdit() {
    this.editingShippingId = null;
    this.shippingDraft = '';
  }

  commitShipping(o: Order) {
    if (!o.id || !this.isStaff()) return;
    const value = (this.shippingDraft || '').trim();
    this.savingShippingId = o.id;
    this.orderService.updateShippingDetails(o.id, value).subscribe({
      next: res => {
        o.shippingDetails = res.data?.shippingDetails ?? (value || undefined);
        this.savingShippingId = null;
        this.cancelShippingEdit();
        this.flashId = o.id!;
        this.toast = { type: 'ok', text: `Shipping details saved for ${o.orderNumber}` };
        setTimeout(() => { if (this.flashId === o.id) this.flashId = null; }, 800);
      },
      error: err => {
        this.savingShippingId = null;
        this.toast = { type: 'err', text: err.error?.message || `Failed to save shipping for ${o.orderNumber}` };
      }
    });
  }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.toast = { type: 'ok', text: 'Copied to clipboard' };
    } catch {
      this.toast = { type: 'err', text: 'Could not copy' };
    }
  }

  ngOnInit() {
    this.seo.setPage({
      title: 'Manage Orders',
      description: 'Leo Wear admin — manage customer orders and shipments.',
      canonicalPath: '/admin/orders',
      noindex: true
    });
    this.load();
  }

  label(status: string): string {
    if (!status) return '';
    return status.charAt(0) + status.slice(1).toLowerCase();
  }

  applyFilters() { this.page = 0; this.load(); }

  clearFilters() {
    this.filter = { keyword: '', status: '', fromDate: '', toDate: '' };
    this.paymentFilter = '';
    this.page = 0;
    this.load();
  }

  filterByStatus(status: string) {
    this.filter.status = status;
    this.page = 0;
    this.load();
  }

  applyPaymentFilter() {
    const f = (this.paymentFilter || '').toUpperCase();
    let list = [...(this.allOrdersCache || [])];
    if (f === 'PAID' || f === 'PENDING' || f === 'PARTIAL') {
      list = list.filter(o => (o.paymentStatus || 'PENDING').toUpperCase() === f);
    } else if (f === 'COD' || f === 'PREPAID') {
      list = list.filter(o => (o.paymentMethod || '').toUpperCase() === f);
    }
    this.orders = list;
  }

  paidOf(o: Order): number {
    const p = Number((o as any).paidAmount);
    if (!isNaN(p) && p >= 0) return p;
    if ((o.paymentStatus || '').toUpperCase() === 'PARTIAL') return Number((o as any).platformCharge) || 99;
    if ((o.paymentStatus || '').toUpperCase() === 'PAID') return Number(o.totalAmount) || 0;
    return 0;
  }

  remainingOf(o: Order): number {
    const r = Number((o as any).remainingAmount);
    if (!isNaN(r) && r >= 0) return r;
    return Math.max(0, (Number(o.totalAmount) || 0) - this.paidOf(o));
  }

  canMarkFullyPaid(o: Order): boolean {
    const ps = (o.paymentStatus || '').toUpperCase();
    return ps === 'PARTIAL' || (ps === 'PENDING' && (o.paymentMethod || '').toUpperCase() === 'COD');
  }

  markFullyPaid(o: Order) {
    if (!o.id || this.markingPaidId === o.id) return;
    this.markingPaidId = o.id;
    this.orderService.markFullyPaid(o.id).subscribe({
      next: res => {
        this.markingPaidId = null;
        const updated = res?.data;
        if (updated) {
          const merge = (list: Order[]) => list.map(x => x.id === o.id ? {
            ...x,
            ...updated,
            items: Array.isArray(updated.items) ? updated.items : x.items,
            status: this.normalizeStatus(updated.status)
          } : x);
          this.allOrdersCache = merge(this.allOrdersCache);
          this.applyPaymentFilter();
        }
        this.toast = { type: 'ok', text: `Order ${o.orderNumber} marked fully paid` };
        this.flashId = o.id;
        setTimeout(() => { if (this.flashId === o.id) this.flashId = null; }, 800);
      },
      error: err => {
        this.markingPaidId = null;
        this.toast = { type: 'err', text: err.error?.message || 'Failed to mark paid' };
      }
    });
  }

  goPage(p: number) { this.page = p; this.load(); }

  downloadPdf() {
    if (!this.isStaff() || this.downloadingPdf) return;
    this.downloadingPdf = true;
    this.orderService.exportOrdersPdf({
      keyword: this.filter.keyword || undefined,
      status: this.filter.status || undefined,
      fromDate: this.filter.fromDate || undefined,
      toDate: this.filter.toDate || undefined,
      payment: this.paymentFilter || undefined
    }).subscribe({
      next: blob => {
        this.downloadingPdf = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.fallbackFilename();
        a.click();
        URL.revokeObjectURL(url);
        this.toast = { type: 'ok', text: 'PDF downloaded' };
      },
      error: () => {
        this.downloadingPdf = false;
        this.toast = { type: 'err', text: 'Failed to download PDF' };
      }
    });
  }

  private fallbackFilename(): string {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    return `orders_${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}.pdf`;
  }

  /** Download A6 invoice PDF for one order (packing / shipping). */
  downloadInvoice(o: Order) {
    if (!this.isStaff() || !o.id || this.downloadingInvoiceId === o.id) return;
    this.downloadingInvoiceId = o.id;
    this.orderService.downloadInvoice(o.id).subscribe({
      next: blob => {
        this.downloadingInvoiceId = null;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice_${o.orderNumber || o.id}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
        this.toast = { type: 'ok', text: `Invoice downloaded for ${o.orderNumber}` };
      },
      error: () => {
        this.downloadingInvoiceId = null;
        this.toast = { type: 'err', text: `Failed to download invoice for ${o.orderNumber}` };
      }
    });
  }

  load() {
    this.loading = true;
    this.orderService.getAllOrders(this.page, this.size, {
      status: this.filter.status || undefined,
      keyword: this.filter.keyword || undefined,
      fromDate: this.filter.fromDate || undefined,
      toDate: this.filter.toDate || undefined
    }).subscribe({
      next: res => {
        const page = res.data;
        // Normalize so UI always has arrays + uppercase status strings
        this.allOrdersCache = (page?.content || []).map(o => ({
          ...o,
          items: Array.isArray(o.items) ? o.items : [],
          status: this.normalizeStatus(o.status),
          shippingDetails: o.shippingDetails || ''
        }));
        this.applyPaymentFilter();
        this.totalPages = page?.totalPages || 0;
        this.totalElements = page?.totalElements || 0;
        this.loading = false;
      },
      error: () => {
        this.orders = [];
        this.loading = false;
        this.toast = { type: 'err', text: 'Failed to load orders' };
      }
    });
  }

  private normalizeStatus(s: any): string {
    if (s == null) return 'PENDING';
    if (typeof s === 'string') return s.toUpperCase();
    if (typeof s === 'object' && s.name) return String(s.name).toUpperCase();
    return String(s).toUpperCase();
  }

  onStatusChange(order: Order, newStatus: string) {
    if (!newStatus || newStatus === order.status) return;
    const previous = order.status;
    order.status = newStatus;
    this.updatingId = order.id!;
    this.orderService.updateOrderStatus(order.id!, newStatus).subscribe({
      next: res => {
        order.status = this.normalizeStatus(res.data?.status || newStatus);
        this.updatingId = null;
        this.flashId = order.id!;
        this.toast = { type: 'ok', text: `Order ${order.orderNumber} → ${this.label(order.status)}` };
        setTimeout(() => { if (this.flashId === order.id) this.flashId = null; }, 800);
        if (this.filter.status && this.filter.status !== order.status) {
          this.orders = this.orders.filter(o => o.id !== order.id);
          this.totalElements = Math.max(0, this.totalElements - 1);
        }
      },
      error: err => {
        order.status = previous;
        this.updatingId = null;
        this.toast = { type: 'err', text: err.error?.message || `Failed to update ${order.orderNumber}` };
      }
    });
  }
}
