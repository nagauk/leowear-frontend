import { Routes } from '@angular/router';
import { authGuard, adminGuard, staffGuard, customerOnlyGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent), canActivate: [customerOnlyGuard] },
  { path: 'products', loadComponent: () => import('./features/products/product-list.component').then(m => m.ProductListComponent), canActivate: [customerOnlyGuard] },
  { path: 'products/:id', loadComponent: () => import('./features/products/product-detail.component').then(m => m.ProductDetailComponent), canActivate: [customerOnlyGuard] },
  { path: 'cart', loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent), canActivate: [customerOnlyGuard] },
  { path: 'wishlist', loadComponent: () => import('./features/wishlist/wishlist.component').then(m => m.WishlistComponent), canActivate: [customerOnlyGuard] },
  { path: 'feedback', loadComponent: () => import('./features/support/feedback.component').then(m => m.FeedbackComponent), canActivate: [customerOnlyGuard] },
  { path: 'complaints', loadComponent: () => import('./features/support/complaints.component').then(m => m.ComplaintsComponent), canActivate: [authGuard, customerOnlyGuard] },
  { path: 'login', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./features/auth/register.component').then(m => m.RegisterComponent) },
  { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'change-password', loadComponent: () => import('./features/auth/change-password.component').then(m => m.ChangePasswordComponent), canActivate: [authGuard] },
  { path: 'verify', loadComponent: () => import('./features/auth/verify.component').then(m => m.VerifyComponent), canActivate: [authGuard] },
  { path: 'orders', loadComponent: () => import('./features/orders/orders.component').then(m => m.OrdersComponent), canActivate: [authGuard, customerOnlyGuard] },
  { path: 'pay/:orderId', loadComponent: () => import('./features/payment/payment.component').then(m => m.PaymentComponent), canActivate: [authGuard, customerOnlyGuard] },
  { path: 'returns', loadComponent: () => import('./features/returns/returns.component').then(m => m.ReturnsComponent), canActivate: [authGuard, customerOnlyGuard] },
  {
    path: 'admin',
    canActivate: [staffGuard],
    children: [
      { path: '', loadComponent: () => import('./features/admin/dashboard.component').then(m => m.DashboardComponent), canActivate: [adminGuard] },
      { path: 'products', loadComponent: () => import('./features/admin/admin-products.component').then(m => m.AdminProductsComponent) },
      { path: 'orders', loadComponent: () => import('./features/admin/admin-orders.component').then(m => m.AdminOrdersComponent) },
      { path: 'returns', loadComponent: () => import('./features/admin/admin-returns.component').then(m => m.AdminReturnsComponent), canActivate: [adminGuard] },
      { path: 'settings', loadComponent: () => import('./features/admin/admin-settings.component').then(m => m.AdminSettingsComponent) },
      { path: 'coupons', loadComponent: () => import('./features/admin/admin-coupons.component').then(m => m.AdminCouponsComponent), canActivate: [adminGuard] },
      { path: 'employees', loadComponent: () => import('./features/admin/admin-employees.component').then(m => m.AdminEmployeesComponent), canActivate: [adminGuard] }
    ]
  },
  { path: '**', redirectTo: '' }
];
