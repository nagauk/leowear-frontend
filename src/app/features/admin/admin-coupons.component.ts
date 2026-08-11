import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CouponService, Coupon } from '../../core/services/coupon.service';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

interface EditState {
  editing: boolean;
  saving: boolean;
  draft: Partial<Coupon>;
  error: string;
  success: string;
}

@Component({
  selector: 'app-admin-coupons',
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
          <a routerLink="/admin/settings" class="btn btn-outline-dark btn-sm">Settings</a>
          <a routerLink="/admin/coupons" class="btn btn-cs-dark btn-sm">Coupons</a>
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <h2 class="section-title mb-0">Coupon codes</h2>
          <button class="btn btn-cs-primary btn-sm" (click)="openCreate()">
            <i class="bi bi-plus-circle me-1"></i> New coupon
          </button>
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
        } @else if (coupons.length === 0) {
          <div class="cs-card p-4 text-center text-muted">
            No coupons yet. Click <strong>New coupon</strong> to create the first one.
          </div>
        } @else {
          <div class="cs-card p-0 overflow-hidden">
            <div class="table-responsive">
              <table class="table cs-table mb-0">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Discount</th>
                    <th>Min order</th>
                    <th>Expires</th>
                    <th>Usage</th>
                    <th>Flags</th>
                    <th>Status</th>
                    <th class="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (c of coupons; track c.id) {
                    <tr>
                      <td>
                        <code class="fw-bold">{{ c.code }}</code>
                        @if (c.description) {
                          <div class="small text-muted">{{ c.description }}</div>
                        }
                      </td>
                      <td><strong>{{ c.discountPercent }}%</strong></td>
                      <td>
                        @if (c.minOrderAmount) {
                          ₹{{ c.minOrderAmount | number:'1.0-0' }}+
                        } @else { <span class="text-muted">—</span> }
                      </td>
                      <td>
                        @if (c.expiresAt) {
                          {{ c.expiresAt | date:'mediumDate' }}
                        } @else { <span class="text-muted">Never</span> }
                      </td>
                      <td>
                        <span class="small">
                          {{ c.timesUsed || 0 }} used
                          @if (c.usageLimit) { / {{ c.usageLimit }} }
                          @if (c.usagePerUser) {
                            <div class="text-muted">≤ {{ c.usagePerUser }}/user</div>
                          }
                        </span>
                      </td>
                      <td>
                        @if (c.firstTimeUserOnly) {
                          <span class="badge bg-info text-dark">1st-order</span>
                        }
                      </td>
                      <td>
                        @if (c.active) {
                          <span class="badge bg-success">Active</span>
                        } @else {
                          <span class="badge bg-secondary">Inactive</span>
                        }
                      </td>
                      <td class="text-end">
                        <button class="btn btn-sm btn-outline-dark me-1" (click)="openEdit(c)" title="Edit">
                          <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" (click)="delete(c)" title="Delete">
                          <i class="bi bi-trash"></i>
                        </button>
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

    <!-- Create / Edit modal -->
    @if (edit.editing) {
      <div class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.5);">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ edit.draft.id ? 'Edit coupon' : 'New coupon' }}</h5>
              <button type="button" class="btn-close" (click)="closeEdit()"></button>
            </div>
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-4">
                  <label class="form-label">Code <span class="text-danger">*</span></label>
                  <input class="form-control text-uppercase"
                         [(ngModel)]="edit.draft.code" name="code"
                         maxlength="20" placeholder="WELCOME10">
                  <div class="form-text">Letters, digits, '-' and '_'. Stored upper-case.</div>
                </div>
                <div class="col-md-4">
                  <label class="form-label">Discount % <span class="text-danger">*</span></label>
                  <input type="number" class="form-control"
                         [(ngModel)]="edit.draft.discountPercent" name="discountPercent"
                         min="0.01" max="100" step="0.01">
                </div>
                <div class="col-md-4">
                  <label class="form-label">Min order (₹)</label>
                  <input type="number" class="form-control"
                         [(ngModel)]="edit.draft.minOrderAmount" name="minOrderAmount"
                         min="0" placeholder="Optional">
                </div>
                <div class="col-12">
                  <label class="form-label">Description</label>
                  <input class="form-control"
                         [(ngModel)]="edit.draft.description" name="description"
                         maxlength="200" placeholder="Shown to customer after applying">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Expires at</label>
                  <input type="datetime-local" class="form-control"
                         [(ngModel)]="expiresAtLocal" name="expiresAt">
                  <div class="form-text">Leave blank for no expiry.</div>
                </div>
                <div class="col-md-3">
                  <label class="form-label">Global usage limit</label>
                  <input type="number" class="form-control"
                         [(ngModel)]="edit.draft.usageLimit" name="usageLimit"
                         min="1" placeholder="∞">
                </div>
                <div class="col-md-3">
                  <label class="form-label">Per-user limit</label>
                  <input type="number" class="form-control"
                         [(ngModel)]="edit.draft.usagePerUser" name="usagePerUser"
                         min="1" placeholder="∞">
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                           [(ngModel)]="edit.draft.firstTimeUserOnly" name="firstTimeUserOnly" id="ftu">
                    <label class="form-check-label" for="ftu">First-time customers only</label>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                           [(ngModel)]="edit.draft.active" name="active" id="active">
                    <label class="form-check-label" for="active">Active</label>
                  </div>
                </div>
              </div>
              @if (edit.error) {
                <div class="alert alert-danger small mt-3 mb-0">{{ edit.error }}</div>
              }
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" (click)="closeEdit()">Cancel</button>
              <button type="button" class="btn btn-cs-primary" (click)="save()" [disabled]="edit.saving">
                @if (edit.saving) {
                  <span class="spinner-border spinner-border-sm me-1"></span>
                }
                {{ edit.draft.id ? 'Save changes' : 'Create coupon' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `
})
export class AdminCouponsComponent implements OnInit {
  coupons: Coupon[] = [];
  loading = true;
  toast: { type: 'ok' | 'err'; text: string } | null = null;

  edit: EditState = this.emptyEdit();
  /** Bound to the datetime-local input — converted to ISO string on save. */
  expiresAtLocal = '';

  constructor(
    private couponService: CouponService,
    private auth: AuthService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Coupons',
      description: 'Leo Wear admin — coupon code management.',
      canonicalPath: '/admin/coupons',
      noindex: true
    });
    this.refresh();
  }

  emptyEdit(): EditState {
    return {
      editing: false,
      saving: false,
      draft: { active: true, firstTimeUserOnly: false },
      error: '',
      success: ''
    };
  }

  refresh() {
    this.loading = true;
    this.couponService.listAll(0, 100).subscribe({
      next: res => {
        this.coupons = res.data?.content || [];
        this.loading = false;
      },
      error: () => {
        this.coupons = [];
        this.loading = false;
        this.toast = { type: 'err', text: 'Could not load coupons.' };
      }
    });
  }

  openCreate() {
    this.edit = this.emptyEdit();
    this.edit.editing = true;
    this.expiresAtLocal = '';
  }

  openEdit(c: Coupon) {
    this.edit = {
      editing: true,
      saving: false,
      draft: { ...c },
      error: '',
      success: ''
    };
    // datetime-local needs "yyyy-MM-ddTHH:mm" — strip seconds/TZ from ISO string.
    if (c.expiresAt) {
      this.expiresAtLocal = c.expiresAt.slice(0, 16);
    } else {
      this.expiresAtLocal = '';
    }
  }

  closeEdit() {
    this.edit = this.emptyEdit();
  }

  save() {
    const d = this.edit.draft;
    if (!d.code || !d.discountPercent || Number(d.discountPercent) <= 0) {
      this.edit.error = 'Code and a positive discount % are required.';
      return;
    }
    // Upper-case + strip
    d.code = (d.code || '').trim().toUpperCase();
    // Convert local datetime to ISO; null if blank
    if (this.expiresAtLocal) {
      const dt = new Date(this.expiresAtLocal);
      if (!isNaN(dt.getTime())) {
        d.expiresAt = dt.toISOString();
      } else {
        d.expiresAt = null;
      }
    } else {
      d.expiresAt = null;
    }
    this.edit.saving = true;
    this.edit.error = '';
    const obs = d.id
      ? this.couponService.update(d.id, d)
      : this.couponService.create(d);
    obs.subscribe({
      next: () => {
        this.edit.saving = false;
        this.edit.editing = false;
        this.toast = { type: 'ok', text: d.id ? 'Coupon updated.' : 'Coupon created.' };
        setTimeout(() => { if (this.toast?.type === 'ok') this.toast = null; }, 2500);
        this.refresh();
      },
      error: err => {
        this.edit.saving = false;
        this.edit.error = err?.error?.message || 'Save failed.';
      }
    });
  }

  delete(c: Coupon) {
    if (!c.id) return;
    if (!confirm(`Delete coupon ${c.code}? Existing orders keep the code via snapshot.`)) return;
    this.couponService.delete(c.id).subscribe({
      next: () => {
        this.toast = { type: 'ok', text: 'Coupon deleted.' };
        setTimeout(() => { if (this.toast?.type === 'ok') this.toast = null; }, 2500);
        this.refresh();
      },
      error: err => {
        this.toast = { type: 'err', text: err?.error?.message || 'Delete failed.' };
      }
    });
  }
}