import {
  BehaviorSubject,
  HttpClient,
  Router,
  catchError,
  computed,
  environment,
  filter,
  of,
  signal,
  switchMap,
  take,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.ACCESS_KEY = "cs_access_token";
    this.REFRESH_KEY = "cs_refresh_token";
    this.USER_KEY = "cs_user";
    this.currentUserSignal = signal(this.loadUser());
    this.currentUser = this.currentUserSignal.asReadonly();
    this.isLoggedIn = computed(() => !!this.currentUserSignal() && !!this.getAccessToken());
    this.isAdmin = computed(() => this.currentUserSignal()?.role === "ADMIN");
    this.isEmployee = computed(() => this.currentUserSignal()?.role === "EMPLOYEE");
    this.isStaff = computed(() => {
      const r = this.currentUserSignal()?.role;
      return r === "ADMIN" || r === "EMPLOYEE";
    });
    this.isRefreshing = false;
    this.refreshSubject = new BehaviorSubject(null);
  }
  login(username, password) {
    return this.http.post(`${environment.apiUrl}/auth/login`, { username, password }).pipe(tap((res) => this.handleAuth(res.data)));
  }
  register(data) {
    return this.http.post(`${environment.apiUrl}/auth/register`, data).pipe(tap((res) => this.handleAuth(res.data)));
  }
  sendOtp(identifier, purpose) {
    return this.http.post(`${environment.apiUrl}/auth/otp/send`, { identifier, purpose });
  }
  verifyEmail(email, code) {
    return this.http.post(`${environment.apiUrl}/auth/otp/verify-email`, { email, code }).pipe(tap((res) => this.handleAuth(res.data)));
  }
  verifyPhone(phone, code) {
    return this.http.post(`${environment.apiUrl}/auth/otp/verify-phone`, { phone, code }).pipe(tap((res) => this.handleAuth(res.data)));
  }
  loginOtp(identifier, code) {
    return this.http.post(`${environment.apiUrl}/auth/login-otp`, { identifier, code }).pipe(tap((res) => this.handleAuth(res.data)));
  }
  forgotPassword(identifier) {
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, { identifier });
  }
  resetPassword(identifier, code, newPassword) {
    return this.http.post(`${environment.apiUrl}/auth/reset-password`, { identifier, code, newPassword });
  }
  changePassword(currentPassword, newPassword) {
    return this.http.post(`${environment.apiUrl}/auth/change-password`, { currentPassword, newPassword });
  }
  /**
   * Call /auth/refresh with the stored refresh token.
   * On success the old refresh token is rotated (invalidated server-side).
   */
  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error("No refresh token"));
    }
    if (this.isRefreshing) {
      return this.refreshSubject.pipe(filter((token) => token !== null), take(1), switchMap((token) => of(token)));
    }
    this.isRefreshing = true;
    this.refreshSubject.next(null);
    return this.http.post(`${environment.apiUrl}/auth/refresh`, { refreshToken }).pipe(tap((res) => {
      this.storeTokens({
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        expiresIn: res.data.expiresIn
      });
      if (res.data.username) {
        const user = {
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
    }), switchMap((res) => of(res.data.accessToken)), catchError((err) => {
      this.isRefreshing = false;
      this.refreshSubject.next(null);
      this.clearSession();
      this.router.navigate(["/login"]);
      return throwError(() => err);
    }));
  }
  logout() {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    if (accessToken || refreshToken) {
      this.http.post(`${environment.apiUrl}/auth/logout`, {
        accessToken,
        refreshToken
      }, {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : void 0
      }).subscribe({
        error: () => {
        }
      });
    }
    this.clearSession();
    this.router.navigate(["/"]);
  }
  logoutAll() {
    return this.http.post(`${environment.apiUrl}/auth/logout-all`, {}).pipe(tap(() => {
      this.clearSession();
      this.router.navigate(["/"]);
    }));
  }
  getAccessToken() {
    return localStorage.getItem(this.ACCESS_KEY);
  }
  /** @deprecated use getAccessToken() */
  getToken() {
    return this.getAccessToken();
  }
  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_KEY);
  }
  handleAuth(data) {
    this.storeTokens({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn
    });
    const user = {
      id: data.id,
      username: data.username,
      email: data.email,
      fullName: data.fullName,
      role: data.role
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSignal.set(user);
  }
  storeTokens(tokens) {
    localStorage.setItem(this.ACCESS_KEY, tokens.accessToken);
    localStorage.setItem(this.REFRESH_KEY, tokens.refreshToken);
  }
  clearSession() {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem("cs_token");
    this.currentUserSignal.set(null);
  }
  loadUser() {
    const raw = localStorage.getItem(this.USER_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-TKTZKSCX.js.map
