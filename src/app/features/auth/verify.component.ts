import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:480px;">
        <div class="cs-card p-4">
          <h2 class="section-title mb-2">Verify your account</h2>
          <p class="text-muted small mb-4">
            Enter the OTP sent to your <strong>email</strong>. Mobile OTP is temporarily disabled.
          </p>

          <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="fw-semibold">Email {{ email }}</span>
              @if (emailVerified) {
                <span class="badge bg-success">Verified</span>
              }
            </div>
            @if (!emailVerified) {
              <div class="input-group mb-2">
                <input class="form-control cs-form-control" [(ngModel)]="emailOtp" name="emailOtp" maxlength="6" placeholder="Email OTP">
                <button class="btn btn-cs-primary" type="button" (click)="verifyEmail()" [disabled]="busy">Verify</button>
              </div>
              <button type="button" class="btn btn-link btn-sm px-0" (click)="resend('EMAIL_VERIFY', email)">Resend email OTP</button>
            }
          </div>

          @if (false && phone) { /* mobile OTP disabled */
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="fw-semibold">Mobile {{ phone }}</span>
                @if (phoneVerified) {
                  <span class="badge bg-success">Verified</span>
                }
              </div>
              @if (!phoneVerified) {
                <div class="input-group mb-2">
                  <input class="form-control cs-form-control" [(ngModel)]="phoneOtp" name="phoneOtp" maxlength="6" placeholder="Mobile OTP">
                  <button class="btn btn-cs-primary" type="button" (click)="verifyPhone()" [disabled]="busy">Verify</button>
                </div>
                <button type="button" class="btn btn-link btn-sm px-0" (click)="resend('PHONE_VERIFY', phone)">Resend mobile OTP</button>
              }
            </div>
          }

          @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
          @if (info) { <div class="alert alert-info small">{{ info }}</div> }

          @if (emailVerified) {
            <a routerLink="/" class="btn btn-cs-primary w-100">Continue shopping</a>
          }
        </div>
      </div>
    </div>
  `
})
export class VerifyComponent implements OnInit {
  email = '';
  phone = '';
  emailOtp = '';
  phoneOtp = '';
  emailVerified = false;
  phoneVerified = false;
  busy = false;
  error = '';
  info = '';

  constructor(private auth: AuthService, private router: Router, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Verify Account',
      description: 'Verify your Leo Wear account using the OTP sent to your email.',
      canonicalPath: '/verify',
      noindex: true
    });
    const u = this.auth.currentUser();
    if (!u) { this.router.navigate(['/login']); return; }
    this.email = u.email || '';
    this.phone = (u as any).phone || '';
    this.emailVerified = !!u.emailVerified;
    this.phoneVerified = !!u.phoneVerified;
  }

  resend(purpose: string, id: string) {
    this.error = ''; this.info = '';
    this.auth.sendOtp(id, purpose).subscribe({
      next: () => this.info = 'OTP resent — check backend console (dev).',
      error: (e) => this.error = e.error?.message || 'Failed to send OTP'
    });
  }

  verifyEmail() {
    this.busy = true; this.error = '';
    this.auth.verifyEmail(this.email, this.emailOtp.trim()).subscribe({
      next: (res) => {
        this.busy = false;
        this.emailVerified = true;
        this.info = 'Email verified';
      },
      error: (e) => { this.busy = false; this.error = e.error?.message || 'Invalid email OTP'; }
    });
  }

  verifyPhone() {
    this.busy = true; this.error = '';
    this.auth.verifyPhone(this.phone, this.phoneOtp.trim()).subscribe({
      next: () => {
        this.busy = false;
        this.phoneVerified = true;
        this.info = 'Mobile verified';
      },
      error: (e) => { this.busy = false; this.error = e.error?.message || 'Invalid mobile OTP'; }
    });
  }
}
