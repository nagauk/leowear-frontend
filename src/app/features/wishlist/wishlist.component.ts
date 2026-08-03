import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../core/services/wishlist.service';
import { HistoryService } from '../../core/services/history.service';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <h2 class="section-title mb-4">Wishlist &amp; Activity</h2>

        <div class="row g-4">
          <!-- Loved items -->
          <div class="col-lg-8">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="mb-0"><i class="bi bi-heart-fill text-danger me-2"></i>Loved items ({{ wishlist.count() }})</h5>
              @if (wishlist.count() > 0) {
                <button class="btn btn-sm btn-outline-secondary" (click)="wishlist.clear()">Clear all</button>
              }
            </div>

            @if (wishlist.count() === 0) {
              <div class="empty-state cs-card p-5">
                <i class="bi bi-heart d-block fs-1 text-muted"></i>
                <h5 class="mt-2">No loved items yet</h5>
                <p class="text-muted">Tap the heart on a product to save it here.</p>
                <a routerLink="/products" class="btn btn-cs-primary mt-2">Browse Shop</a>
              </div>
            } @else {
              <div class="row g-3">
                @for (item of wishlist.items(); track item.productId) {
                  <div class="col-6 col-md-4">
                    <div class="cs-card product-card h-100">
                      <a [routerLink]="['/products', item.productId]" class="text-decoration-none">
                        <div class="product-img-wrap">
                          <img [src]="item.imageUrl || 'https://via.placeholder.com/400x500'" [alt]="item.name">
                        </div>
                      </a>
                      <div class="product-body">
                        <div class="product-brand">{{ item.brand || 'Leo Wear' }}</div>
                        <a [routerLink]="['/products', item.productId]" class="text-decoration-none">
                          <div class="product-name">{{ item.name }}</div>
                        </a>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                          <div class="product-price">₹{{ item.price | number:'1.0-0' }}</div>
                          <button class="btn btn-sm btn-outline-danger" (click)="wishlist.remove(item.productId)" title="Remove">
                            <i class="bi bi-heart-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
          </div>

          <!-- Search history + recently viewed -->
          <div class="col-lg-4">
            <div class="cs-card p-3 mb-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="mb-0"><i class="bi bi-clock-history me-2"></i>Search history</h6>
                @if (history.searches().length) {
                  <button class="btn btn-link btn-sm p-0" (click)="history.clearSearches()">Clear</button>
                }
              </div>
              @if (history.searches().length === 0) {
                <p class="text-muted small mb-0">Your recent searches will appear here.</p>
              } @else {
                <div class="d-flex flex-wrap gap-2">
                  @for (s of history.searches(); track s) {
                    <a class="badge rounded-pill text-bg-light border text-decoration-none"
                       [routerLink]="['/products']" [queryParams]="{ search: s }">
                      {{ s }}
                    </a>
                  }
                </div>
              }
            </div>

            <div class="cs-card p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="mb-0"><i class="bi bi-eye me-2"></i>Recently viewed</h6>
                @if (history.recentViews().length) {
                  <button class="btn btn-link btn-sm p-0" (click)="history.clearViews()">Clear</button>
                }
              </div>
              @if (history.recentViews().length === 0) {
                <p class="text-muted small mb-0">Products you open will show up here.</p>
              } @else {
                <div class="d-flex flex-column gap-2">
                  @for (v of history.recentViews(); track v.productId) {
                    <a [routerLink]="['/products', v.productId]" class="d-flex gap-2 align-items-center text-decoration-none text-dark">
                      <img [src]="v.imageUrl || 'https://via.placeholder.com/48'" width="48" height="56"
                           style="object-fit:cover;border-radius:6px;" [alt]="v.name">
                      <div class="flex-grow-1">
                        <div class="small fw-medium">{{ v.name }}</div>
                        <div class="text-muted small">₹{{ v.price | number:'1.0-0' }}</div>
                      </div>
                    </a>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class WishlistComponent implements OnInit {
  constructor(
    public wishlist: WishlistService,
    public history: HistoryService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Your Wishlist',
      description: 'Items you love, saved for later at Leo Wear.',
      canonicalPath: '/wishlist'
    });
  }
}
