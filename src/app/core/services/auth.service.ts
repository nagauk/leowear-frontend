import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, BehaviorSubject, filter, take, switchMap, catchError, throwError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, User } from '../models/models';

interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn?: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly ACCESS_KEY = 'cs_access_token';
  private readonly REFRESH_KEY = 'cs_refresh_token';
  private readonly USER_KEY = 'cs_user';

  private currentUserSignal = signal<User | null>(this.loadUser());
  currentUser = this.currentUserSignal.asReadonly();
  isLoggedIn = computed(() => !!this.currentUserSignal() && !!this.getAccessToken());
  isAdmin = computed(() => this.currentUserSignal()?.role === 'ADMIN');
  isEmployee = computed(() => this.currentUserSignal()?.role === 'EMPLOYEE');
  /** Admin or Employee — staff portal */
  isStaff = computed(() => {
    const r = this.currentUserSignal()?.role;
    return r === 'ADMIN' || r === 'EMPLOYEE';
  });

  /** Prevents concurrent refresh calls from racing */
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(tap(res => this.handleAuth(res.data)));
  }

  register(data: any): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/register`, data)
      .pipe(tap(res => this.handleAuth(res.data)));
  }

  sendOtp(identifier: string, purpose: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/otp/send`, { identifier, purpose });
  }

  verifyEmail(email: string, code: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/otp/verify-email`, { email, code })
      .pipe(tap(res => this.handleAuth(res.data)));
  }

  verifyPhone(phone: string, code: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/otp/verify-phone`, { phone, code })
      .pipe(tap(res => this.handleAuth(res.data)));
  }

  loginOtp(identifier: string, code: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/login-otp`, { identifier, code })
      .pipe(tap(res => this.handleAuth(res.data)));
  }

  forgotPassword(identifier: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/forgot-password`, { identifier });
  }

  resetPassword(identifier: string, code: string, newPassword: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/reset-password`, { identifier, code, newPassword });
  }

  changePassword(currentPassword: string, newPassword: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/change-password`, { currentPassword, newPassword });
  }

  /**
   * Call /auth/refresh with the stored refresh token.
   * On success the old refresh token is rotated (invalidated server-side).
   */
  refreshToken(): Observable<string> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token'));
    }

    if (this.isRefreshing) {
      // Wait for the in-flight refresh to complete
      return this.refreshSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token => of(token!))
      );
    }

    this.isRefreshing = true;
    this.refreshSubject.next(null);

    return this.http.post<ApiResponse<any>>(`${environment.apiUrl}/auth/refresh`, { refreshToken }).pipe(
      tap(res => {
        this.storeTokens({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          expiresIn: res.data.expiresIn
        });
        if (res.data.username) {
          const user: User = {
            id: res.data.id,
            username: res.data.username,
            email: res.data.email,
            fullName: res.data.fullName,
            role: res.data.role,
            emailVerified: res.data.emailVerified,
            phoneVerified: res.data.phoneVerified
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
          this.currentUserSignal.set(user);
        }
        this.isRefreshing = false;
        this.refreshSubject.next(res.data.accessToken);
      }),
      switchMap(res => of(res.data.accessToken as string)),
      catchError(err => {
        this.isRefreshing = false;
        this.refreshSubject.next(null);
        this.clearSession();
        this.router.navigate(['/login']);
        return throwError(() => err);
      })
    );
  }

  logout(): void {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    // Send both tokens so server can blacklist access JWT + revoke refresh token
    if (accessToken || refreshToken) {
      this.http.post(`${environment.apiUrl}/auth/logout`, {
        accessToken,
        refreshToken
      }, {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined
      }).subscribe({
        error: () => { /* ignore network errors on logout */ }
      });
    }
    this.clearSession();
    this.router.navigate(['/']);
  }

  logoutAll(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/logout-all`, {}).pipe(
      tap(() => {
        this.clearSession();
        this.router.navigate(['/']);
      })
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_KEY);
  }

  /** @deprecated use getAccessToken() */
  getToken(): string | null {
    return this.getAccessToken();
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_KEY);
  }

  private handleAuth(data: any): void {
    this.storeTokens({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn
    });

    const user: User = {
      id: data.id,
      username: data.username,
      email: data.email,
      fullName: data.fullName,
      role: data.role
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSignal.set(user);
  }

  private storeTokens(tokens: TokenPair): void {
    localStorage.setItem(this.ACCESS_KEY, tokens.accessToken);
    localStorage.setItem(this.REFRESH_KEY, tokens.refreshToken);
  }

  private clearSession(): void {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem('cs_token'); // legacy key cleanup
    this.currentUserSignal.set(null);
  }

  private loadUser(): User | null {
    const raw = localStorage.getItem(this.USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
}
