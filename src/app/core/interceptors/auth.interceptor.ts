import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Attaches the access token to outgoing requests.
 * On 401, attempts a single refresh-token rotation and retries the original request.
 * If refresh fails, the session is cleared and the user is redirected to login.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  // Don't attach token or try refresh for auth endpoints themselves
  const isAuthEndpoint = req.url.includes('/auth/login')
    || req.url.includes('/auth/register')
    || req.url.includes('/auth/refresh');

  const token = auth.getAccessToken();
  let authReq = req;

  if (token && !isAuthEndpoint) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !isAuthEndpoint && auth.getRefreshToken()) {
        // Access token expired — try rotation
        return auth.refreshToken().pipe(
          switchMap((newAccessToken: string) => {
            const retryReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newAccessToken}` }
            });
            return next(retryReq);
          }),
          catchError(refreshError => throwError(() => refreshError))
        );
      }
      return throwError(() => error);
    })
  );
};
