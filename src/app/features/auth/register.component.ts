import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';
import { environment } from '../../../environments/environment';
import { debounceTime, Subject, switchMap, of, catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="auth-card">
        <div class="text-center mb-4">
          <h2 class="display-font">Create Account</h2>
          <p class="text-muted">Join Leo Wear today</p>
        </div>

        <form (ngSubmit)="onSubmit()" #f="ngForm">
          <div class="mb-3">
            <label class="form-label">Username *</label>
            <input type="text" class="form-control cs-form-control"
                   [(ngModel)]="form.username" name="username" required minlength="3"
                   (ngModelChange)="onUsernameChange($event)"
                   [class.is-invalid]="!!fieldErrors['username']"
                   [class.is-valid]="usernameOk">
            @if (fieldErrors['username']) {
              <div class="invalid-feedback d-block">{{ fieldErrors['username'] }}</div>
            } @else if (usernameOk) {
              <div class="valid-feedback d-block">Username is available</div>
            }
          </div>

          <div class="mb-3">
            <label class="form-label">Email *</label>
            <input type="email" class="form-control cs-form-control"
                   [(ngModel)]="form.email" name="email" required email
                   (ngModelChange)="onEmailChange($event)"
                   [class.is-invalid]="!!fieldErrors['email']"
                   [class.is-valid]="emailOk">
            @if (fieldErrors['email']) {
              <div class="invalid-feedback d-block">{{ fieldErrors['email'] }}</div>
            } @else if (emailOk) {
              <div class="valid-feedback d-block">Email is available</div>
            }
          </div>

          <div class="mb-3">
            <label class="form-label">Password *</label>
            <input type="password" class="form-control cs-form-control"
                   [(ngModel)]="form.password" name="password" required
                   (ngModelChange)="validatePassword($event)"
                   [class.is-invalid]="!!fieldErrors['password']"
                   [class.is-valid]="passwordOk">
            @if (fieldErrors['password']) {
              <div class="invalid-feedback d-block">{{ fieldErrors['password'] }}</div>
            }
            <ul class="list-unstyled small mt-2 mb-0 pwd-rules">
              <li [class.ok]="pwdRules.min">• At least 8 characters</li>
              <li [class.ok]="pwdRules.upper">• One uppercase letter (A–Z)</li>
              <li [class.ok]="pwdRules.lower">• One lowercase letter (a–z)</li>
              <li [class.ok]="pwdRules.digit">• One number (0–9)</li>
              <li [class.ok]="pwdRules.special">• One special character (!&#64;#$%…)</li>
            </ul>
          </div>

          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control cs-form-control" [(ngModel)]="form.fullName" name="fullName">
          </div>

          <div class="mb-3">
            <label class="form-label">Mobile number</label>
            <input type="tel" class="form-control cs-form-control"
                   [(ngModel)]="form.phone" name="phone" placeholder="10-digit mobile"
                   (ngModelChange)="onPhoneChange($event)"
                   [class.is-invalid]="!!fieldErrors['phone']"
                   [class.is-valid]="phoneOk">
            @if (fieldErrors['phone']) {
              <div class="invalid-feedback d-block">{{ fieldErrors['phone'] }}</div>
            } @else if (phoneOk) {
              <div class="valid-feedback d-block">Mobile number is available</div>
            }
          </div>

          <div class="mb-3">
            <label class="form-label">Address (optional)</label>
            <textarea class="form-control cs-form-control" [(ngModel)]="form.address" name="address" rows="2"></textarea>
          </div>

          @if (error) {
            <div class="alert alert-danger small">{{ error }}</div>
          }

          <button type="submit" class="btn btn-cs-primary w-100 btn-lg"
                  [disabled]="loading || !canSubmit">
            @if (loading) { <span class="spinner-border spinner-border-sm me-2"></span> }
            Create Account
          </button>
        </form>

        <p class="text-center mt-4 mb-0 text-muted small">
          Already have an account?
          <a routerLink="/login" class="fw-semibold" style="color:var(--cs-accent)">Sign In</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .pwd-rules li { color: #9ca3af; }
    .pwd-rules li.ok { color: #059669; font-weight: 500; }
  `]
})
export class RegisterComponent implements OnInit {
  form = { username: '', email: '', password: '', fullName: '', phone: '', address: '' };
  loading = false;
  error = '';
  fieldErrors: Record<string, string> = {};

  usernameOk = false;
  emailOk = false;
  phoneOk = false;
  passwordOk = false;

  pwdRules = { min: false, upper: false, lower: false, digit: false, special: false };

  private username$ = new Subject<string>();
  private email$ = new Subject<string>();
  private phone$ = new Subject<string>();

  get canSubmit(): boolean {
    return !!this.form.username && !!this.form.email && this.passwordOk
      && !this.fieldErrors['username'] && !this.fieldErrors['email'] && !this.fieldErrors['phone']
      && this.usernameOk && this.emailOk;
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpClient,
    private seo: SeoService
  ) {
    this.username$.pipe(
      debounceTime(400),
      switchMap(v => {
        if (!v || v.length < 3) return of(null);
        if (!/^[a-zA-Z0-9._]+$/.test(v)) {
          this.fieldErrors['username'] = 'Only letters, numbers, dots and underscores allowed';
          this.usernameOk = false;
          return of(null);
        }
        return this.http.get<any>(`${environment.apiUrl}/auth/check-username`, { params: { value: v } })
          .pipe(catchError(() => of(null)));
      })
    ).subscribe(res => {
      if (!res) return;
      if (res.data?.available) {
        delete this.fieldErrors['username'];
        this.usernameOk = true;
      } else {
        this.fieldErrors['username'] = res.message || 'Username is already registered';
        this.usernameOk = false;
      }
    });

    this.email$.pipe(
      debounceTime(400),
      switchMap(v => {
        if (!v || !v.includes('@')) return of(null);
        return this.http.get<any>(`${environment.apiUrl}/auth/check-email`, { params: { value: v } })
          .pipe(catchError(() => of(null)));
      })
    ).subscribe(res => {
      if (!res) return;
      if (res.data?.available) {
        delete this.fieldErrors['email'];
        this.emailOk = true;
      } else {
        this.fieldErrors['email'] = res.message || 'Email is already registered';
        this.emailOk = false;
      }
    });

    this.phone$.pipe(
      debounceTime(400),
      switchMap(v => {
        const digits = (v || '').replace(/\D/g, '');
        if (!digits) {
          delete this.fieldErrors['phone'];
          this.phoneOk = false;
          return of(null);
        }
        if (!/^[6-9]\d{9}$/.test(digits) && !(/^91[6-9]\d{9}$/.test(digits))) {
          this.fieldErrors['phone'] = 'Enter a valid 10-digit Indian mobile number';
          this.phoneOk = false;
          return of(null);
        }
        return this.http.get<any>(`${environment.apiUrl}/auth/check-phone`, { params: { value: digits } })
          .pipe(catchError(() => of(null)));
      })
    ).subscribe(res => {
      if (!res) return;
      if (res.data?.available) {
        delete this.fieldErrors['phone'];
        this.phoneOk = true;
      } else {
        this.fieldErrors['phone'] = res.message || 'Mobile number is already registered';
        this.phoneOk = false;
      }
    });
  }

  onUsernameChange(v: string) {
    this.usernameOk = false;
    delete this.fieldErrors['username'];
    this.username$.next(v?.trim() || '');
  }

  onEmailChange(v: string) {
    this.emailOk = false;
    delete this.fieldErrors['email'];
    this.email$.next(v?.trim() || '');
  }

  onPhoneChange(v: string) {
    this.phoneOk = false;
    delete this.fieldErrors['phone'];
    this.phone$.next(v || '');
  }

  validatePassword(pwd: string) {
    const p = pwd || '';
    this.pwdRules = {
      min: p.length >= 8,
      upper: /[A-Z]/.test(p),
      lower: /[a-z]/.test(p),
      digit: /\d/.test(p),
      special: /[@$!%*?&#^()_\-+={}\[\]|:;"'<>,./~`]/.test(p)
    };
    this.passwordOk = Object.values(this.pwdRules).every(Boolean);
    this.fieldErrors['password'] = this.passwordOk
      ? ''
      : 'Password must have upper, lower, number and special character (min 8)';
    if (this.passwordOk) delete this.fieldErrors['password'];
  }

  onSubmit() {
    this.validatePassword(this.form.password);
    if (!this.canSubmit) {
      this.error = 'Please fix the highlighted fields before submitting.';
      return;
    }
    this.loading = true;
    this.error = '';
    this.auth.register(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/verify']);
      },
      error: (err) => {
        this.loading = false;
        const data = err.error?.data;
        if (data && typeof data === 'object') {
          this.fieldErrors = { ...this.fieldErrors, ...data };
          this.error = err.error?.message || 'Validation failed';
        } else {
          this.error = err.error?.message || 'Registration failed';
        }
      }
    });
  }

  ngOnInit() {
    this.seo.setPage({
      title: 'Create Account',
      description: 'Join Leo Wear — create an account to shop premium fashion and track your orders.',
      canonicalPath: '/register'
    });
  }
}
