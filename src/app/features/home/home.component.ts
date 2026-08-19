import { Component, OnInit } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { HistoryService } from '../../core/services/history.service';
import { SettingsService } from '../../core/services/settings.service';
import { SeoService } from '../../core/services/seo.service';
import { Product, Category } from '../../core/models/models';
import { isLeoWearBrand } from '../../core/catalog/size-color.catalog';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, RouterLink],
  template: `
    <section class="hero-section position-relative overflow-hidden">

      <!-- 4-tile fashion image grid (kept from earlier) -->
      <div class="hero-bg-grid position-absolute top-0 start-0 w-100 h-100 d-none d-md-grid">
        <div class="grid-tile tile-men"></div>
        <div class="grid-tile tile-women"></div>
        <div class="grid-tile tile-kids"></div>
        <div class="grid-tile tile-denim"></div>
      </div>

      <!-- Colourful aurora wash on top of the images -->
      <div class="hero-aurora" aria-hidden="true">
        <span class="orb orb-1"></span>
        <span class="orb orb-2"></span>
        <span class="orb orb-3"></span>
        <span class="orb orb-4"></span>
        <span class="orb orb-5"></span>
      </div>

      <!-- Dark gradient for readable text -->
      <div class="hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <!-- Subtle dotted grid texture -->
      <div class="hero-grid-pattern" aria-hidden="true"></div>

      <!-- Floating colour tags -->
      <span class="float-tag tag-1">#Trending</span>
      <span class="float-tag tag-2">New Drop ✨</span>
      <span class="float-tag tag-3">Members -20%</span>

      <!-- Roaming sparkles (kept from earlier, more of them, colourful) -->
      <span class="sparkle s1"></span>
      <span class="sparkle s2"></span>
      <span class="sparkle s3"></span>
      <span class="sparkle s4"></span>
      <span class="sparkle s5"></span>
      <span class="sparkle s6"></span>
      <span class="sparkle s7"></span>
      <span class="sparkle s8"></span>
      <span class="sparkle s9"></span>
      <span class="sparkle s10"></span>

      <!-- Hero Content -->
      <div class="container position-relative z-2 py-5 my-lg-4">
        <div class="row align-items-center g-4">

          <!-- Left Column: Typography & Actions -->
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="hero-title">
              <span class="title-line title-light">Wear the</span>
              <span class="title-line title-gradient">Colours of</span>
              <span class="title-line title-light">Confidence</span>
            </h1>

            <p class="hero-description">
              Bold styles for <strong>Men</strong>, <strong>Women</strong> &amp; <strong>Kids</strong> — crafted in India, designed to turn every street into your runway.
            </p>
            <!-- Trust strip -->
            <div class="hero-trust">
              <div class="trust-item">
                <span class="trust-icon" style="background: linear-gradient(135deg,#ff7a59,#ff2d87);">
                  <i class="bi bi-truck"></i>
                </span>
                <div>
                  <strong>Free Shipping</strong>
                  <small>Orders over ₹{{ freeDeliveryMin | number:'1.0-0' }}</small>
                </div>
              </div>
              <div class="trust-item">
                <span class="trust-icon" style="background: linear-gradient(135deg,#7c3aed,#22d3ee);">
                  <i class="bi bi-shield-check"></i>
                </span>
                <div>
                  <strong>Secure Pay</strong>
                  <small>100% protected</small>
                </div>
              </div>
              <div class="trust-item">
                <span class="trust-icon" style="background: linear-gradient(135deg,#10b981,#22d3ee);">
                  <i class="bi bi-arrow-repeat"></i>
                </span>
                <div>
                  <strong>Easy Returns</strong>
                  <small>7-day policy</small>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Floating Product / Category Showcase -->
          <div class="col-lg-5 d-none d-lg-block">
            <div class="hero-showcase">

              <!-- Main big card -->
              <div class="showcase-card showcase-main">
                <span class="showcase-badge">Hot</span>
                <div class="showcase-img showcase-img-men"></div>
                <div class="showcase-meta">
                  <small>Men's Streetwear</small>
                  <strong>From ₹799</strong>
                </div>
              </div>

              <!-- Top-right small card -->
              <div class="showcase-card showcase-top">
                <div class="showcase-img showcase-img-women"></div>
                <div class="showcase-meta">
                  <small>Women</small>
                  <strong>New Drop</strong>
                </div>
              </div>

              <!-- Bottom-right small card -->
              <div class="showcase-card showcase-bottom">
                <div class="showcase-img showcase-img-kids"></div>
                <div class="showcase-meta">
                  <small>Kids</small>
                  <strong>Flat 30% Off</strong>
                </div>
              </div>

              <!-- Floating sale bubble -->
              <div class="showcase-bubble">
                <span>UP TO</span>
                <strong>50%</strong>
                <small>OFF</small>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Wave divider -->
      <svg class="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
      </svg>
    </section>

    <!-- Loved items -->
    @if (lovedProducts.length) {
      <section class="py-5">
        <div class="container">
          <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 class="section-title mb-1"><i class="bi bi-heart-fill text-danger me-2"></i>Your Loved Items</h2>
              <p class="section-subtitle mb-0">Saved for later</p>
            </div>
            <a routerLink="/wishlist" class="btn btn-cs-outline btn-sm">Wishlist</a>
          </div>
          <div class="row g-4">
            @for (p of lovedProducts; track p.id) {
              <div class="col-6 col-md-3">
                <ng-container *ngTemplateOutlet="card; context: {$implicit: p}"></ng-container>
              </div>
            }
          </div>
        </div>
      </section>
    }

    <!-- Recently viewed / search-related -->
    @if (recentProducts.length) {
      <section class="py-5" style="background:#fff;">
        <div class="container">
          <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 class="section-title mb-1"><i class="bi bi-clock-history me-2"></i>Recently Viewed</h2>
              <p class="section-subtitle mb-0">Pick up where you left off</p>
            </div>
          </div>
          <div class="row g-4">
            @for (p of recentProducts; track p.id) {
              <div class="col-6 col-md-3">
                <ng-container *ngTemplateOutlet="card; context: {$implicit: p}"></ng-container>
              </div>
            }
          </div>
        </div>
      </section>
    }

    <!-- Best sellers — only after 1000+ store orders (backend gated) -->
    @if (!loadingBest && bestsellers.length) {
      <section class="py-5" [style.background]="recentProducts.length ? '' : '#fff'">
        <div class="container">
          <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 class="section-title mb-1"><i class="bi bi-fire me-2 text-danger"></i>Most Sold</h2>
              <p class="section-subtitle mb-0">Customer favourites</p>
            </div>
            <a routerLink="/products" class="btn btn-cs-outline btn-sm">View All</a>
          </div>
          <div class="row g-4">
            @for (p of bestsellers; track p.id) {
              <div class="col-6 col-md-3">
                <ng-container *ngTemplateOutlet="card; context: {$implicit: p}"></ng-container>
              </div>
            }
          </div>
        </div>
      </section>
    }

    <!-- Categories -->
    <!--section class="py-5">
      <div class="container">
        <h2 class="section-title text-center">Shop by Category</h2>
        <p class="section-subtitle text-center">Men, Women, Kids &amp; more</p>
        <div class="row g-4">
          @for (cat of categoryTree; track cat.id) {
            <div class="col-6 col-md-3">
              <div class="cs-card p-3 h-100">
                <a [routerLink]="['/products']" [queryParams]="{category: cat.id}" class="text-decoration-none">
                  <h5 class="mb-2" style="color:var(--cs-text)">{{ cat.name }}</h5>
                </a>
                @if (cat.children?.length) {
                  <div class="d-flex flex-wrap gap-1">
                    @for (sub of cat.children; track sub.id) {
                      <a class="badge rounded-pill text-bg-light border text-decoration-none"
                         [routerLink]="['/products']" [queryParams]="{category: sub.id}">
                        {{ sub.name }}
                      </a>
                    }
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section-->

    <!-- Featured -->
    <section class="py-5" style="background:#fff;">
      <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 class="section-title mb-1">Featured</h2>
            <p class="section-subtitle mb-0">Handpicked for you</p>
          </div>
          <a routerLink="/products" class="btn btn-cs-outline btn-sm">View All</a>
        </div>
        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else {
          <div class="row g-4">
            @for (p of products; track p.id) {
              <div class="col-6 col-md-3">
                <ng-container *ngTemplateOutlet="card; context: {$implicit: p}"></ng-container>
              </div>
            }
          </div>
        }
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row g-4 text-center">
          <div class="col-md-4">
            <i class="bi bi-truck fs-1" style="color:var(--cs-accent)"></i>
            <h5 class="mt-3">Free Shipping</h5>
            <p class="text-muted small">On orders over ₹{{ freeDeliveryMin | number:'1.0-0' }}</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-arrow-repeat fs-1" style="color:var(--cs-accent)"></i>
            <h5 class="mt-3">Easy Returns</h5>
            <p class="text-muted small">7-day return policy*</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-shield-check fs-1" style="color:var(--cs-accent)"></i>
            <h5 class="mt-3">Secure Payment</h5>
            <p class="text-muted small">100% secure checkout</p>
          </div>
        </div>
      </div>
    </section>

    <ng-template #card let-p>
      <div class="cs-card product-card h-100">
        <a [routerLink]="['/products', p.id]" class="text-decoration-none">
          <div class="product-img-wrap ">
            <img [src]="p.imageUrl || 'https://via.placeholder.com/400x500?text=Leo+Wear'" [alt]="p.name" loading="lazy">
            @if (isLeo(p.brand)) {
              <span class="badge-leo">Our Choice</span>
            }
          </div>@if (p.originalPrice && p.originalPrice > p.price) {
                                              <span class="sale-tag badge-sale">SALE</span>
                                            }
        </a>
        <div class="product-body">
          <div class="product-brand">
            {{ p.brand || 'Leo Wear' }}
            @if (isLeo(p.brand)) {
              <span class="leo-tag">Leo Wear</span>
            }
          </div>
          <a [routerLink]="['/products', p.id]" class="text-decoration-none">
            <div class="product-name">{{ p.name }}</div>
          </a>
          <div class="product-price mt-1">
                                      ₹{{ p.price | number:'1.0-0' }}
                                      @if (p.originalPrice && p.originalPrice > p.price) {
                                        <span class="original">₹{{ p.originalPrice | number:'1.0-0' }}</span>
                                      }
                                    </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    .badge-leo {
      position: absolute; top: 10px; left: 10px; z-index: 2;
      background: linear-gradient(135deg, #1a1a2e, #e94560);
      color: #fff; font-size: 0.7rem; font-weight: 700;
      letter-spacing: 0.04em; padding: 4px 10px; border-radius: 20px;
      box-shadow: 0 2px 8px rgba(233,69,96,0.35);
    }
    .leo-tag {
      display: inline-block; margin-left: 6px;
      font-size: 0.65rem; font-weight: 700; color: #e94560;
      border: 1px solid #e94560; border-radius: 4px; padding: 0 5px;
      vertical-align: middle;
    }
    .badge-sale {
      position: absolute; top: 10px; right: 10px;
      background: #e94560; color: #fff; font-size: 0.7rem;
      font-weight: 700; padding: 3px 8px; border-radius: 4px;
    }

    /* ===== Hero refresh (theme-preserving) ===== */
    .hero-eyebrow {
      display: inline-block;
      font-size: 0.75rem; font-weight: 600;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--cs-gold);
      border: 1px solid rgba(212, 163, 115, 0.4);
      background: rgba(212, 163, 115, 0.08);
      padding: 4px 12px; border-radius: 20px;
      margin-bottom: 1rem;
    }
    .hero-stats {
      display: flex; gap: 2rem; margin-top: 2rem;
      flex-wrap: wrap;
    }
    .hero-stats > div {
      display: flex; flex-direction: column;
      line-height: 1.1;
    }
    .hero-stats strong {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem; font-weight: 700;
      color: var(--cs-gold);
    }
    .hero-stats span {
      font-size: 0.78rem; color: rgba(255, 255, 255, 0.7);
      margin-top: 2px;
    }
    .hero-collage {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 1rem;
      max-width: 520px;
      margin-left: auto;
    }
    .hero-card {
      position: relative;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: var(--cs-radius);
      padding: 1.25rem 1.1rem;
      color: #fff;
      display: flex; align-items: center; gap: 0.9rem;
      transition: var(--cs-transition);
    }
    .hero-card:hover {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.14);
      border-color: var(--cs-gold);
    }
    .hero-card i {
      font-size: 1.6rem;
      color: var(--cs-gold);
      flex-shrink: 0;
    }
    .hero-card strong {
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
    }
    .hero-card span {
      display: block;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 2px;
    }
    .hero-card-1 { grid-area: 1 / 1 / 2 / 2; }
    .hero-card-2 { grid-area: 1 / 2 / 2 / 3; }
    .hero-card-3 { grid-area: 2 / 1 / 3 / 2; }
    .hero-card-4 { grid-area: 2 / 2 / 3 / 3; }
    @media (max-width: 991.98px) {
      .hero-collage { max-width: 100%; margin: 1rem auto 0; }
    }
  `]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  bestsellers: Product[] = [];
  lovedProducts: Product[] = [];
  recentProducts: Product[] = [];
  categoryTree: Category[] = [];
  loading = true;
  loadingBest = true;
  freeDeliveryMin = 999;
  totalProducts = 0;
  categoryCount = 0;

  constructor(
    private productService: ProductService,
    private cart: CartService,
    private router: Router,
    private wishlist: WishlistService,
    private history: HistoryService,
    private settings: SettingsService,
    private seo: SeoService
  ) {}

  isLeo = isLeoWearBrand;

  ngOnInit() {
    this.seo.setPage({
      title: 'Leo Wear — Premium Fashion for Men, Women & Kids',
      description: 'Shop premium fashion for men, women & kids at Leo Wear. Trendy apparel, easy returns, secure checkout, and free shipping over ' + this.freeDeliveryMin + ' INR.',
      keywords: 'Leo Wear, clothing, fashion, men, women, kids, t-shirts, jeans, online clothing store',
      canonicalPath: '/',
      type: 'website',
      jsonLd: this.buildHomeJsonLd()
    });

    this.settings.getDelivery().subscribe({
      next: res => {
        if (res.data?.freeDeliveryMinAmount != null) {
          this.freeDeliveryMin = Number(res.data.freeDeliveryMinAmount);
        }
      }
    });

    this.productService.getCategoryTree().subscribe({
      next: res => {
        this.categoryTree = res.data || [];
        this.categoryCount = this.categoryTree.length;
      },
      error: () => {
        this.productService.getCategories().subscribe(r => {
          this.categoryTree = r.data || [];
          this.categoryCount = this.categoryTree.length;
        });
      }
    });

    this.productService.getBestsellers(8).subscribe({
      next: res => { this.bestsellers = res.data || []; this.loadingBest = false; },
      error: () => this.loadingBest = false
    });

    this.productService.getProducts(0, 8).subscribe({
      next: res => {
        this.products = res.data?.content || [];
        this.totalProducts = res.data?.totalElements ?? this.products.length;
        this.loading = false;
      },
      error: () => this.loading = false
    });

    // Loved items → hydrate from API
    const lovedIds = this.wishlist.items().map(i => i.productId).slice(0, 8);
    this.hydrateProducts(lovedIds, list => this.lovedProducts = list);

    // Recently viewed
    const recentIds = this.history.recentViews().map(v => v.productId).slice(0, 8);
    this.hydrateProducts(recentIds, list => this.recentProducts = list);
  }

  private hydrateProducts(ids: number[], assign: (list: Product[]) => void) {
    if (!ids.length) { assign([]); return; }
    const unique = [...new Set(ids.map(Number))];
    const results: Product[] = [];
    let pending = unique.length;
    unique.forEach(id => {
      this.productService.getProduct(id).subscribe({
        next: res => {
          if (res.data) results.push(res.data);
          if (--pending === 0) assign(results);
        },
        error: () => { if (--pending === 0) assign(results); }
      });
    });
  }

  private buildHomeJsonLd(): Record<string, any> {
    const base = (environment.siteUrl || '').replace(/\/$/, '');
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: 'Leo Wear',
          url: base || '/',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${base}/products?search={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    };
  }
}
