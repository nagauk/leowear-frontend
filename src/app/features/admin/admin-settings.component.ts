import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SettingsService, DeliverySettings } from '../../core/services/settings.service';
import { SupportService, Complaint, Feedback } from '../../core/services/support.service';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container-fluid px-4">
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a routerLink="/admin" class="btn btn-outline-dark btn-sm">Dashboard</a>
          <a routerLink="/admin/products" class="btn btn-outline-dark btn-sm">Products</a>
          <a routerLink="/admin/orders" class="btn btn-outline-dark btn-sm">Orders</a>
          <a routerLink="/admin/returns" class="btn btn-outline-dark btn-sm">Returns</a>
          <a routerLink="/admin/coupons" class="btn btn-outline-dark btn-sm">Coupons</a>
          <a routerLink="/admin/settings" class="btn btn-cs-dark btn-sm">Settings &amp; Support</a>
        </div>

        <h2 class="section-title mb-4">Settings &amp; Customer Voice</h2>

        <div class="row g-4">
          <!-- Delivery settings -->
          <div class="col-lg-4">
            <div class="cs-card p-4">
              <h5 class="mb-3">Delivery charges</h5>
              <div class="mb-3">
                <label class="form-label">Default delivery charge (₹)</label>
                <input type="number" class="form-control cs-form-control" [(ngModel)]="settings.deliveryCharge" min="0">
              </div>
              <div class="mb-3">
                <label class="form-label">Free delivery above order amount (₹)</label>
                <input type="number" class="form-control cs-form-control" [(ngModel)]="settings.freeDeliveryMinAmount" min="0">
                <div class="form-text">If cart subtotal ≥ this amount, delivery is free.</div>
              </div>
              @if (settingsMsg) {
                <div class="alert alert-success small py-2">{{ settingsMsg }}</div>
              }
              @if (isAdmin()) {
                <button class="btn btn-cs-primary" (click)="saveSettings()" [disabled]="saving">Save settings</button>
              }
            </div>
          </div>

          <!-- Complaints -->
          <div class="col-lg-8">
            <div class="cs-card p-4 mb-4">
              <h5 class="mb-3">Complaints</h5>
              @if (complaints.length === 0) {
                <p class="text-muted small">No complaints yet.</p>
              } @else {
                @for (c of complaints; track c.id) {
                  <div class="border rounded p-3 mb-2">
                    <div class="d-flex justify-content-between flex-wrap gap-2">
                      <div>
                        <strong>{{ c.subject }}</strong>
                        <div class="small text-muted">{{ c.username }} · {{ c.createdAt | date:'medium' }}
                          @if (c.orderNumber) { · {{ c.orderNumber }} }
                        </div>
                      </div>
                      <select class="form-select form-select-sm" style="width:140px"
                              [ngModel]="c.status"
                              (ngModelChange)="updateComplaint(c, $event)">
                        <option value="OPEN">Open</option>
                        <option value="IN_PROGRESS">In progress</option>
                        <option value="RESOLVED">Resolved</option>
                        <option value="CLOSED">Closed</option>
                      </select>
                    </div>
                    <p class="small mb-2 mt-2">{{ c.message }}</p>
                    <div class="input-group input-group-sm">
                      <input class="form-control" [(ngModel)]="c.adminResponse" [name]="'resp'+c.id"
                             placeholder="Admin response">
                      <button class="btn btn-outline-primary" (click)="updateComplaint(c, c.status || 'IN_PROGRESS', true)">
                        Reply
                      </button>
                    </div>
                  </div>
                }
              }
            </div>

            <div class="cs-card p-4">
              <h5 class="mb-3">Customer feedback</h5>
              @if (feedback.length === 0) {
                <p class="text-muted small">No feedback yet.</p>
              } @else {
                @for (f of feedback; track f.id) {
                  <div class="border-bottom py-2">
                    <div class="d-flex justify-content-between">
                      <strong>{{ f.username || f.guestName || 'Guest' }}</strong>
                      <span class="text-warning">{{ stars(f.rating) }}</span>
                    </div>
                    <div class="small text-muted">{{ f.createdAt | date:'medium' }}</div>
                    @if (f.comment) { <p class="small mb-0 mt-1">{{ f.comment }}</p> }
                  </div>
                }
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminSettingsComponent implements OnInit {
  settings: DeliverySettings = { deliveryCharge: 49, freeDeliveryMinAmount: 999 };
  settingsMsg = '';
  saving = false;
  complaints: Complaint[] = [];
  feedback: Feedback[] = [];

  constructor(
    private settingsService: SettingsService,
    private support: SupportService,
    private auth: AuthService,
    private seo: SeoService
  ) {}

  isAdmin = this.auth.isAdmin;

  ngOnInit() {
    this.seo.setPage({
      title: 'Complaints & Feedback',
      description: 'Leo Wear admin — manage complaints, feedback, and delivery settings.',
      canonicalPath: '/admin/settings',
      noindex: true
    });
    this.settingsService.getDelivery().subscribe(res => {
      if (res.data) this.settings = res.data;
    });
    this.support.allComplaints().subscribe(res => this.complaints = res.data?.content || []);
    this.support.allFeedback().subscribe(res => this.feedback = res.data?.content || []);
  }

  saveSettings() {
    this.saving = true;
    this.settingsService.updateDelivery(this.settings).subscribe({
      next: res => {
        this.saving = false;
        if (res.data) this.settings = res.data;
        this.settingsMsg = 'Delivery settings saved';
        setTimeout(() => this.settingsMsg = '', 2500);
      },
      error: () => { this.saving = false; }
    });
  }

  updateComplaint(c: Complaint, status: string, withReply = false) {
    this.support.updateComplaint(c.id!, status, withReply ? c.adminResponse : undefined).subscribe({
      next: res => {
        if (res.data) Object.assign(c, res.data);
      }
    });
  }

  stars(n: number): string {
    return '★'.repeat(n || 0) + '☆'.repeat(5 - (n || 0));
  }
}
