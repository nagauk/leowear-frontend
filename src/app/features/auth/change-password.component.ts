import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:440px;">
        <div class="cs-card p-4">
          <h2 class="section-title mb-3">Change password</h2>
          <div class="mb-3">
            <label class="form-label">Current password</label>
            <input type="password" class="form-control cs-form-control" [(ngModel)]="current" name="cur">
          </div>
          <div class="mb-3">
            <label class="form-label">New password</label>
            <input type="password" class="form-control cs-form-control" [(ngModel)]="next" name="next">
          </div>
          <div class="mb-3">
            <label class="form-label">Confirm new password</label>
            <input type="password" class="form-control cs-form-control" [(ngModel)]="confirm" name="confirm">
          </div>
          @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
          @if (success) { <div class="alert alert-success small">{{ success }}</div> }
          <button class="btn btn-cs-primary w-100" [disabled]="saving" (click)="save()">Update password</button>
          <div class="text-center mt-3"><a routerLink="/">Home</a></div>
        </div>
      </div>
    </div>
  `
})
export class ChangePasswordComponent implements OnInit {
  current = ''; next = ''; confirm = '';
  saving = false; error = ''; success = '';
  constructor(private auth: AuthService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Change Password',
      description: 'Update your Leo Wear account password.',
      canonicalPath: '/change-password',
      noindex: true
    });
  }
  save() {
    if (this.next !== this.confirm) { this.error = 'Passwords do not match'; return; }
    this.saving = true; this.error = ''; this.success = '';
    this.auth.changePassword(this.current, this.next).subscribe({
      next: () => { this.saving = false; this.success = 'Password changed. Please login again if sessions were revoked.'; this.current=''; this.next=''; this.confirm=''; },
      error: (e) => { this.saving = false; this.error = e.error?.message || 'Failed'; }
    });
  }
}
