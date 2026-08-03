import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { ReturnRequest } from '../../core/models/models';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-admin-returns',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container-fluid px-4">
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a routerLink="/admin" class="btn btn-outline-dark btn-sm">Dashboard</a>
          <a routerLink="/admin/products" class="btn btn-outline-dark btn-sm">Products</a>
          <a routerLink="/admin/orders" class="btn btn-outline-dark btn-sm">Orders</a>
          <a routerLink="/admin/returns" class="btn btn-cs-dark btn-sm">Returns</a>
        </div>

        <h2 class="section-title mb-4">Manage Returns</h2>

        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else if (returns.length === 0) {
          <div class="empty-state">
            <i class="bi bi-arrow-return-left d-block"></i>
            <p>No return requests</p>
          </div>
        } @else {
          <div class="cs-card p-0 overflow-hidden">
            <div class="table-responsive">
              <table class="table cs-table mb-0 align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Item</th>
                    <th>Order payment</th>
                    <th>Reason</th>
                    <th>Refund / reversal</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (r of returns; track r.id) {
                    <tr>
                      <td>{{ r.id }}</td>
                      <td><code>{{ r.orderNumber }}</code></td>
                      <td>{{ r.username }}</td>
                      <td class="small">
                        @if (r.productName) {
                          {{ r.productName }}
                          @if (r.size || r.color) {
                            <div class="text-muted">{{ r.size }}{{ r.size && r.color ? ' / ' : '' }}{{ r.color }}</div>
                          }
                          @if (r.quantity) { <div class="text-muted">Qty {{ r.quantity }}</div> }
                        } @else { — }
                      </td>
                      <td class="small">
                        <div>
                          @if ((r.orderPaymentStatus || '').toUpperCase() === 'PAID') {
                            <span class="badge bg-success">Paid</span>
                          } @else {
                            <span class="badge bg-warning text-dark">{{ r.orderPaymentStatus || 'PENDING' }}</span>
                          }
                        </div>
                        <div class="text-muted">{{ r.orderPaymentMethod || '—' }}</div>
                        @if (r.orderPaymentRef) {
                          <div class="font-monospace text-muted" style="font-size:0.7rem">Txn: {{ r.orderPaymentRef }}</div>
                        }
                      </td>
                      <td style="max-width:160px;" class="small">{{ r.reason }}</td>
                      <td class="small" style="min-width:160px">
                        @if (r.refundTransactionId) {
                          <span class="badge bg-success">Refunded</span>
                          <div class="font-monospace text-muted mt-1" style="font-size:0.7rem">{{ r.refundTransactionId }}</div>
                        } @else if ((r.refundStatus || '') === 'NOT_APPLICABLE') {
                          <span class="text-muted">N/A (COD)</span>
                        } @else if ((r.refundStatus || '') === 'PENDING') {
                          <span class="badge bg-warning text-dark">Reversal pending</span>
                        } @else {
                          <span class="text-muted">—</span>
                        }
                      </td>
                      <td><span class="badge-status" [class]="(r.status || '').toLowerCase()">{{ r.status }}</span></td>
                      <td class="small">{{ r.createdAt | date:'mediumDate' }}</td>
                      <td style="min-width:200px">
                        @if (r.status === 'PENDING') {
                          <button class="btn btn-sm btn-success me-1" (click)="update(r, 'APPROVED')">Approve</button>
                          <button class="btn btn-sm btn-danger" (click)="update(r, 'REJECTED')">Reject</button>
                        } @else if (r.status === 'APPROVED') {
                          @if (needsRefund(r)) {
                            <div class="mb-1">
                              <input class="form-control form-control-sm" placeholder="Reversal / refund Txn ID"
                                     [(ngModel)]="refundTxn[r.id!]" [name]="'refund'+r.id">
                            </div>
                            <button class="btn btn-sm btn-primary" (click)="completeWithRefund(r)">
                              Complete + save reversal
                            </button>
                          } @else {
                            <button class="btn btn-sm btn-primary" (click)="update(r, 'COMPLETED')">Complete</button>
                          }
                        } @else {
                          <span class="text-muted small">—</span>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class AdminReturnsComponent implements OnInit {
  returns: ReturnRequest[] = [];
  loading = true;
  refundTxn: Record<number, string> = {};

  constructor(private orderService: OrderService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Manage Returns',
      description: 'Leo Wear admin — manage return and refund requests.',
      canonicalPath: '/admin/returns',
      noindex: true
    });
    this.load();
  }

  load() {
    this.loading = true;
    this.orderService.getAllReturns(0, 50).subscribe({
      next: res => { this.returns = res.data.content; this.loading = false; },
      error: () => this.loading = false
    });
  }

  /** Prepaid + paid orders need a reversal txn when completing return */
  needsRefund(r: ReturnRequest): boolean {
    if (r.refundTransactionId) return false;
    if ((r.refundStatus || '') === 'NOT_APPLICABLE') return false;
    const paid = (r.orderPaymentStatus || '').toUpperCase() === 'PAID';
    const prepaid = (r.orderPaymentMethod || '').toUpperCase() === 'PREPAID';
    return paid && prepaid;
  }

  update(r: ReturnRequest, status: string) {
    this.orderService.updateReturnStatus(r.id!, status).subscribe(() => this.load());
  }

  completeWithRefund(r: ReturnRequest) {
    const txn = (this.refundTxn[r.id!] || '').trim();
    if (!txn) {
      alert('Enter the reversal / refund transaction ID from your payment gateway or bank.');
      return;
    }
    this.orderService.updateReturnStatus(r.id!, 'COMPLETED', undefined, txn).subscribe(() => this.load());
  }
}
