import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  return router.createUrlTree(['/login']);
};

/** Admin only (dashboard, returns, employees) */
export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isAdmin()) return true;
  if (auth.isLoggedIn() && auth.isEmployee()) return router.createUrlTree(['/admin/products']);
  return router.createUrlTree(['/login']);
};

/** Admin or Employee */
export const staffGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isStaff()) return true;
  return router.createUrlTree(['/login']);
};

/** Customers only — block staff from shopping flows */
export const customerOnlyGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isStaff()) {
    return router.createUrlTree([auth.isAdmin() ? '/admin' : '/admin/products']);
  }
  return true;
};
