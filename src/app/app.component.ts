import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';
import { CartService } from './core/services/cart.service';
import { WishlistService } from './core/services/wishlist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg cs-navbar">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Leo<span>Wear</span></a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <i class="bi bi-list text-white fs-3"></i>
        </button>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="navbar-nav me-auto ms-lg-4">
            @if (auth.isAdmin()) {
              <li class="nav-item"><a class="nav-link" routerLink="/admin" routerLinkActive="active">Dashboard</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/products" routerLinkActive="active">Products</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/orders" routerLinkActive="active">Orders</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/returns" routerLinkActive="active">Returns</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/settings" routerLinkActive="active">Complaints &amp; Feedback</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/employees" routerLinkActive="active">Employees</a></li>
            } @else if (auth.isEmployee()) {
              <li class="nav-item"><a class="nav-link" routerLink="/admin/products" routerLinkActive="active">Products &amp; Stock</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/orders" routerLinkActive="active">Orders</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/admin/settings" routerLinkActive="active">Complaints</a></li>
            } @else {
              <li class="nav-item"><a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="/products" routerLinkActive="active">Shop</a></li>
              @if (auth.isLoggedIn()) {
                <li class="nav-item"><a class="nav-link" routerLink="/orders" routerLinkActive="active">My Orders</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/returns" routerLinkActive="active">Returns</a></li>
              }
              <li class="nav-item"><a class="nav-link" routerLink="/feedback" routerLinkActive="active">Feedback</a></li>
            }
          </ul>
          <div class="d-flex align-items-center gap-3">
            @if (!auth.isStaff()) {
              <a routerLink="/wishlist" class="btn btn-link text-white text-decoration-none btn-cart position-relative" title="Wishlist">
                <i class="bi bi-heart fs-5"></i>
                @if (wishlist.count() > 0) {
                  <span class="badge">{{ wishlist.count() }}</span>
                }
              </a>
              <a routerLink="/cart" class="btn btn-link text-white text-decoration-none btn-cart position-relative" title="Cart">
                <i class="bi bi-bag fs-5"></i>
                @if (cart.itemCount() > 0) {
                  <span class="badge">{{ cart.itemCount() }}</span>
                }
              </a>
            }
            @if (auth.isLoggedIn()) {
              <div class="dropdown">
                <button class="btn btn-sm btn-outline-light dropdown-toggle" type="button"
                        id="userMenuBtn" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-circle me-1"></i>
                  {{ auth.currentUser()?.fullName || auth.currentUser()?.username || 'Account' }}
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userMenuBtn">
                  @if (auth.isAdmin()) {
                    <li><a class="dropdown-item" routerLink="/admin"><i class="bi bi-speedometer2 me-2"></i>Dashboard</a></li>
                    <li><a class="dropdown-item" routerLink="/admin/employees"><i class="bi bi-people me-2"></i>Employees</a></li>
                    <li><hr class="dropdown-divider"></li>
                  } @else if (auth.isEmployee()) {
                    <li><a class="dropdown-item" routerLink="/admin/products"><i class="bi bi-box-seam me-2"></i>Products</a></li>
                    <li><a class="dropdown-item" routerLink="/admin/orders"><i class="bi bi-receipt me-2"></i>Orders</a></li>
                    <li><hr class="dropdown-divider"></li>
                  } @else {
                    <li><a class="dropdown-item" routerLink="/orders"><i class="bi bi-bag-check me-2"></i>My Orders</a></li>
                    <li><a class="dropdown-item" routerLink="/returns"><i class="bi bi-arrow-return-left me-2"></i>Returns</a></li>
                    <li><a class="dropdown-item" routerLink="/complaints"><i class="bi bi-chat-left-text me-2"></i>Complaints</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" routerLink="/verify"><i class="bi bi-shield-check me-2"></i>Verify account</a></li>
                    <li><a class="dropdown-item" routerLink="/change-password"><i class="bi bi-key me-2"></i>Password</a></li>
                    <li><hr class="dropdown-divider"></li>
                  }
                  <li><button class="dropdown-item text-danger" type="button" (click)="auth.logout()">
                    <i class="bi bi-box-arrow-right me-2"></i>Logout
                  </button></li>
                </ul>
              </div>
            } @else {
              <a routerLink="/login" class="btn btn-sm btn-outline-light">Login</a>
              <a routerLink="/register" class="btn btn-sm btn-cs-primary">Sign Up</a>
            }
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="cs-footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h5>Leo Wear</h5>
            <p class="small">Premium fashion for everyone. Quality clothing for men, women, and kids.</p>
          </div>
          <div class="col-md-2">
            <h5>Shop</h5>
            <ul class="list-unstyled small">
              <li><a routerLink="/products">All Products</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 1}">Men</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 2}">Women</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 3}">Kids</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Support</h5>
            <ul class="list-unstyled small">
              <li><a routerLink="/orders">Track Orders</a></li>
              <li><a routerLink="/returns">Returns</a></li>
              <li><a routerLink="/wishlist">Wishlist</a></li>
              <li><a routerLink="/feedback">Feedback</a></li>
              <li><a routerLink="/complaints">Complaints</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Contact</h5>
            <p class="small mb-1"><i class="bi bi-envelope me-2"></i>hello&#64;clothstore.com</p>
            <p class="small"><i class="bi bi-telephone me-2"></i>+91 7989398156</p>
          </div>
        </div>
        <div class="footer-bottom text-center">
          &copy; 2026 Leo Wear. All rights reserved.
        </div>
      </div>
    </footer>
  `
})
export class AppComponent {
  constructor(public auth: AuthService, public cart: CartService, public wishlist: WishlistService) {}
}
