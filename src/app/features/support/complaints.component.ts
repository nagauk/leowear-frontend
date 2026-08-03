import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SupportService, Complaint } from '../../core/services/support.service';
import { OrderService } from '../../core/services/order.service';
import { SeoService } from '../../core/services/seo.service';
import { Order } from '../../core/models/models';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <h2 class="section-title mb-4">My Complaints</h2>

        <div class="row g-4">
          <div class="col-lg-5">
            <div class="cs-card p-4">
              <h5 class="mb-3">Raise a complaint</h5>
              <div class="mb-3">
                <label class="form-label">Related order (optional)</label>
                <select class="form-select cs-form-control" [(ngModel)]="form.orderId" name="orderId">
                  <option [ngValue]="undefined">— None —</option>
                  @for (o of orders; track o.id) {
                    <option [ngValue]="o.id">{{ o.orderNumber }} · ₹{{ o.totalAmount | number:'1.0-0' }}</option>
                  }
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Subject *</label>
                <input class="form-control cs-form-control" [(ngModel)]="form.subject" name="subject">
              </div>
              <div class="mb-3">
                <label class="form-label">Details *</label>
                <textarea class="form-control cs-form-control" rows="4" [(ngModel)]="form.message" name="message"></textarea>
              </div>
              @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
              @if (success) { <div class="alert alert-success small">{{ success }}</div> }
              <button class="btn btn-cs-primary" (click)="submit()" [disabled]="loading">Submit complaint</button>
            </div>
          </div>

          <div class="col-lg-7">
            @if (loadingList) {
              <div class="text-center py-4"><div class="spinner-border text-danger"></div></div>
            } @else if (list.length === 0) {
              <div class="empty-state"><p class="text-muted">No complaints yet.</p></div>
            } @else {
              @for (c of list; track c.id) {
                <div class="cs-card p-3 mb-3">
                  <div class="d-flex justify-content-between">
                    <strong>{{ c.subject }}</strong>
                    <span class="badge bg-secondary">{{ c.status }}</span>
                  </div>
                  <div class="small text-muted mb-1">
                    {{ c.createdAt | date:'medium' }}
                    @if (c.orderNumber) { · Order {{ c.orderNumber }} }
                  </div>
                  <p class="mb-1">{{ c.message }}</p>
                  @if (c.adminResponse) {
                    <div class="alert alert-light border small mb-0 mt-2">
                      <strong>Support:</strong> {{ c.adminResponse }}
                    </div>
                  }
                </div>
              }
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ComplaintsComponent implements OnInit {
  form: Partial<Complaint> = { subject: '', message: '', orderId: undefined };
  list: Complaint[] = [];
  orders: Order[] = [];
  loading = false;
  loadingList = true;
  error = '';
  success = '';

  constructor(private support: SupportService, private orderService: OrderService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Complaints',
      description: 'Submit a complaint about a Leo Wear order. We respond within 24 hours.',
      canonicalPath: '/complaints'
    });
    this.load();
    this.orderService.getMyOrders(0, 20).subscribe({
      next: res => this.orders = res.data?.content || []
    });
  }

  load() {
    this.loadingList = true;
    this.support.myComplaints().subscribe({
      next: res => { this.list = res.data?.content || []; this.loadingList = false; },
      error: () => this.loadingList = false
    });
  }

  submit() {
    if (!this.form.subject?.trim() || !this.form.message?.trim()) {
      this.error = 'Subject and message are required';
      return;
    }
    this.loading = true;
    this.error = '';
    this.success = '';
    this.support.submitComplaint(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Complaint submitted. We will respond soon.';
        this.form = { subject: '', message: '', orderId: undefined };
        this.load();
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Failed to submit';
      }
    });
  }
}
