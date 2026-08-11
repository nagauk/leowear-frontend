import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-admin-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:560px">
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a routerLink="/admin" class="btn btn-outline-dark btn-sm">Dashboard</a>
          <a routerLink="/admin/products" class="btn btn-outline-dark btn-sm">Products</a>
          <a routerLink="/admin/coupons" class="btn btn-outline-dark btn-sm">Coupons</a>
          <a routerLink="/admin/employees" class="btn btn-cs-dark btn-sm">Employees</a>
        </div>
        <div class="cs-card p-4">
          <h2 class="section-title mb-1">Create employee</h2>
          <p class="text-muted small mb-4">
            Employees can manage products/stock, orders, and complaints — not dashboard, returns, or refunds.
          </p>
          <form (ngSubmit)="create()">
            <div class="mb-3">
              <label class="form-label">Username *</label>
              <input class="form-control cs-form-control" [(ngModel)]="form.username" name="username" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email *</label>
              <input type="email" class="form-control cs-form-control" [(ngModel)]="form.email" name="email" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Full name</label>
              <input class="form-control cs-form-control" [(ngModel)]="form.fullName" name="fullName">
            </div>
            <div class="mb-3">
              <label class="form-label">Password *</label>
              <input type="password" class="form-control cs-form-control" [(ngModel)]="form.password" name="password" required minlength="6">
            </div>
            @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
            @if (success) { <div class="alert alert-success small">{{ success }}</div> }
            <button class="btn btn-cs-primary w-100" [disabled]="loading">
              @if (loading) { <span class="spinner-border spinner-border-sm me-2"></span> }
              Create employee account
            </button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class AdminEmployeesComponent implements OnInit {
  form = { username: '', email: '', fullName: '', password: '' };
  loading = false;
  error = '';
  success = '';

  constructor(private http: HttpClient, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Manage Employees',
      description: 'Leo Wear admin — create staff accounts with limited access.',
      canonicalPath: '/admin/employees',
      noindex: true
    });
  }

  create() {
    this.loading = true;
    this.error = '';
    this.success = '';
    this.http.post<any>(`${environment.apiUrl}/admin/employees`, this.form).subscribe({
      next: res => {
        this.loading = false;
        this.success = `Employee "${res.data?.username || this.form.username}" created. Share username & password with them.`;
        this.form = { username: '', email: '', fullName: '', password: '' };
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Failed to create employee';
      }
    });
  }
}
