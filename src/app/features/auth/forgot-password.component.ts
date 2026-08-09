import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:440px;">
        <div class="cs-card p-4">
          <h2 class="section-title mb-1">Reset password</h2>
          <p class="text-muted small mb-4">We'll send a one-time code to your email or mobile.</p>

          @if (step === 1) {
            <div class="mb-3">
              <label class="form-label">Email *</label>
              <input class="form-control cs-form-control" [(ngModel)]="identifier" name="identifier"
                     placeholder="you@example.com">
            </div>
            @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
            @if (info) { <div class="alert alert-info small">{{ info }}</div> }
            <button class="btn btn-cs-primary w-100" [disabled]="sending || !identifier" (click)="sendOtp()">
              @if (sending) { <span class="spinner-border spinner-border-sm me-2"></span> }
              Send OTP
            </button>
          } @else {
            <div class="mb-3">
              <label class="form-label">OTP *</label>
              <input class="form-control cs-form-control" [(ngModel)]="code" name="code" maxlength="6" placeholder="6-digit code">
            </div>
            <div class="mb-3">
              <label class="form-label">New password *</label>
              <input type="password" class="form-control cs-form-control" [(ngModel)]="newPassword" name="np"
                     placeholder="Min 8 chars, upper, lower, number, special">
            </div>
            <div class="mb-3">
              <label class="form-label">Confirm password *</label>
              <input type="password" class="form-control cs-form-control" [(ngModel)]="confirm" name="cp">
            </div>
            @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
            @if (success) { <div class="alert alert-success small">{{ success }}</div> }
            <button class="btn btn-cs-primary w-100" [disabled]="resetting" (click)="reset()">
              Reset password
            </button>
            <button type="button" class="btn btn-link btn-sm mt-2" (click)="step=1">Resend OTP</button>
          }
          <div class="text-center mt-3">
            <a routerLink="/login">Back to login</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ForgotPasswordComponent implements OnInit {
  step = 1;
  identifier = '';
  code = '';
  newPassword = '';
  confirm = '';
  sending = false;
  resetting = false;
  error = '';
  info = '';
  success = '';

  constructor(private auth: AuthService, private router: Router, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Reset Password',
      description: 'Reset your Leo Wear account password securely using a one-time code.',
      canonicalPath: '/forgot-password'
    });
  }

  sendOtp() {
    this.sending = true; this.error = ''; this.info = '';
    this.auth.forgotPassword(this.identifier.trim()).subscribe({
      next: () => {
        this.sending = false;
        this.step = 2;
        this.info = 'OTP sent. In development, check backend console logs for the code.';
      },
      error: (e) => { this.sending = false; this.error = e.error?.message || 'Failed to send OTP'; }
    });
  }

  reset() {
    if (this.newPassword !== this.confirm) { this.error = 'Passwords do not match'; return; }
    this.resetting = true; this.error = '';
    this.auth.resetPassword(this.identifier.trim(), this.code.trim(), this.newPassword).subscribe({
      next: () => {
        this.resetting = false;
        this.success = 'Password updated. Redirecting to login…';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (e) => { this.resetting = false; this.error = e.error?.message || 'Reset failed'; }
    });
  }
}
