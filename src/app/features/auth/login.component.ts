import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:440px;">
        <div class="cs-card p-4">
          <h2 class="section-title mb-1 text-center">Welcome back</h2>
          <p class="text-muted text-center mb-3">Sign in to your Leo Wear account</p>

          <ul class="nav nav-pills nav-fill mb-4">
            <li class="nav-item">
              <button type="button" class="nav-link" [class.active]="mode==='password'" (click)="mode='password'">Password</button>
            </li>
            <li class="nav-item">
              <button type="button" class="nav-link" [class.active]="mode==='otp'" (click)="mode='otp'">OTP Login</button>
            </li>
          </ul>

          @if (mode === 'password') {
            <form (ngSubmit)="onLogin()">
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input class="form-control cs-form-control" [(ngModel)]="username" name="username" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control cs-form-control" [(ngModel)]="password" name="password" required>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <a routerLink="/forgot-password" class="small">Forgot password?</a>
              </div>
              @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
              <button class="btn btn-cs-primary w-100" [disabled]="loading">
                @if (loading) { <span class="spinner-border spinner-border-sm me-2"></span> }
                Sign in
              </button>
            </form>
          } @else {
            @if (otpStep === 1) {
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input class="form-control cs-form-control" [(ngModel)]="otpId" name="otpId"
                       placeholder="you@example.com" type="email">
                <div class="form-text">Mobile OTP is temporarily disabled — use email only.</div>
              </div>
              @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
              @if (info) { <div class="alert alert-info small">{{ info }}</div> }
              <button class="btn btn-cs-primary w-100" [disabled]="loading || !otpId" (click)="sendLoginOtp()">
                Send OTP
              </button>
            } @else {
              <div class="mb-3">
                <label class="form-label">Enter OTP</label>
                <input class="form-control cs-form-control" [(ngModel)]="otpCode" name="otpCode" maxlength="6">
              </div>
              @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
              @if (info) { <div class="alert alert-info small">{{ info }}</div> }
              <button class="btn btn-cs-primary w-100 mb-2" [disabled]="loading || !otpCode" (click)="verifyLoginOtp()">
                Verify &amp; Sign in
              </button>
              <button type="button" class="btn btn-link btn-sm" (click)="otpStep=1">Change email</button>
            }
          }

          <p class="text-center mt-4 mb-0 small">
            New here? <a routerLink="/register">Create account</a>
          </p>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent implements OnInit {
  mode: 'password' | 'otp' = 'password';
  username = '';
  password = '';
  otpId = '';
  otpCode = '';
  otpStep = 1;
  loading = false;
  error = '';
  info = '';

  constructor(private auth: AuthService, private router: Router, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Login',
      description: 'Sign in to your Leo Wear account to track orders, save your wishlist, and check out faster.',
      canonicalPath: '/login'
    });
  }

  onLogin() {
    this.loading = true; this.error = '';
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        this.loading = false;
        const role = res.data?.role;
        if (role === 'ADMIN') this.router.navigate(['/admin']);
        else if (role === 'EMPLOYEE') this.router.navigate(['/admin/products']);
        else this.router.navigate(['/']);
      },
      error: (e) => { this.loading = false; this.error = e.error?.message || 'Login failed'; }
    });
  }

  sendLoginOtp() {
    if (!this.otpId?.includes('@')) {
      this.error = 'Please enter your registered email (mobile OTP is disabled).';
      return;
    }

    this.loading = true; this.error = ''; this.info = '';
    this.auth.sendOtp(this.otpId.trim(), 'LOGIN').subscribe({
      next: () => {
        this.loading = false;
        this.otpStep = 2;
        this.info = 'OTP sent. Check backend console for the code (dev mode).';
      },
      error: (e) => { this.loading = false; this.error = e.error?.message || 'Failed to send OTP'; }
    });
  }

  verifyLoginOtp() {
    this.loading = true; this.error = '';
    this.auth.loginOtp(this.otpId.trim(), this.otpCode.trim()).subscribe({
      next: (res) => {
        this.loading = false;
        const role = res.data?.role;
        if (role === 'ADMIN') this.router.navigate(['/admin']);
        else if (role === 'EMPLOYEE') this.router.navigate(['/admin/products']);
        else this.router.navigate(['/']);
      },
      error: (e) => { this.loading = false; this.error = e.error?.message || 'Invalid OTP'; }
    });
  }
}
