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

      <!-- Tricolor strip across the top -->
      <div class="hero-tricolor-strip" aria-hidden="true">
        <div class="stripe saffron"></div>
        <div class="stripe white"></div>
        <div class="stripe green"></div>
      </div>

      <!-- Grid Background with Men, Women & Kids Fashion -->
      <div class="hero-bg-grid position-absolute top-0 start-0 w-100 h-100 d-none d-md-grid">
        <div class="grid-tile tile-men"></div>
        <div class="grid-tile tile-women"></div>
        <div class="grid-tile tile-kids"></div>
        <div class="grid-tile tile-denim"></div>
      </div>

      <!-- Soft tricolor glow -->
      <div class="hero-tricolor-glow"></div>

      <!-- Gradient Overlay for High Text Readability -->
      <div class="hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <!-- Sparkles -->
      <span class="sparkle s1"></span>
      <span class="sparkle s2"></span>
      <span class="sparkle s3"></span>
      <span class="sparkle s4"></span>
      <span class="sparkle s5"></span>

      <!-- Launching offer ribbon -->
      <span class="id-offer-ribbon">Launch Offer</span>

      <!-- Hero Content & Cards Layer -->
      <div class="container position-relative z-2 py-5 my-lg-4">
        <div class="row align-items-center g-4">

          <!-- Left Column: Typography & Actions -->
          <div class="col-lg-6 text-center text-lg-start">
            <span class="hero-eyebrow d-inline-block px-3 py-1 rounded-pill mb-3 text-uppercase fw-semibold">
              Launching Offer: flat 20% off <br/> CouponCode: FREEDOM20
            </span>

            <h1 class="display-2 fw-bold text-white mb-3 hero-title">
              Celebrate Freedom<br>
              <span class="text-accent">with Leo Wear</span>
            </h1>

            <p class="lead hero-description mb-4 pe-lg-4">
              Honouring the heroes of our nation. Premium fashion for men, women &amp; kids — crafted with pride, made for India.
            </p>

            <div class="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <a routerLink="/products" class="btn btn-accent btn-lg px-4 py-3 fw-bold rounded-2">
                Shop the Launch
              </a>
              <a routerLink="/products" [queryParams]="{search: 'Leo Wear'}" class="btn btn-outline-custom btn-lg px-4 py-3 fw-bold rounded-2">
                Leo Wear Picks
              </a>
            </div>
          </div>

          <!-- Right Column: Independence Day Launch Card -->
          <div class="col-lg-6 d-none d-lg-block">
            <div class="id-card-stack ms-auto me-lg-4">

              <!-- Headline + flag + soldiers -->
              <div class="id-headline">
                <span class="aug-badge">
                  <span class="dot"></span>
                  AUG 15 · INDEPENDENCE DAY
                </span>

                <!-- Indian flag + salute soldiers -->
                <div class="d-flex align-items-end justify-content-center gap-3 mt-3">
                  <div class="hero-flag" aria-label="Indian Flag">
                    <div class="band saffron"></div>
                    <div class="band white"><div class="chakra"></div></div>
                    <div class="band green"></div>
                  </div>

                  <div class="hero-soldiers">
                    <div class="hero-soldier" aria-label="Soldier saluting">
                      <svg viewBox="0 0 64 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                        <!-- Helmet -->
                        <path d="M10 30 Q10 8 32 8 Q54 8 54 30 L54 36 L10 36 Z" fill="#4b5a2a"/>
                        <rect x="10" y="34" width="44" height="4" fill="#2e3815"/>
                        <!-- Face -->
                        <ellipse cx="32" cy="44" rx="11" ry="12" fill="#e8b89a"/>
                        <!-- Salute arm -->
                        <path d="M48 42 L60 24 L62 28 L52 48 Z" fill="#e8b89a"/>
                        <!-- Uniform body -->
                        <path d="M14 56 Q14 48 32 48 Q50 48 50 56 L50 84 L14 84 Z" fill="#6b7d3f"/>
                        <rect x="28" y="48" width="8" height="36" fill="#4b5a2a"/>
                        <!-- Belt -->
                        <rect x="14" y="68" width="36" height="4" fill="#2e3815"/>
                        <!-- Boots -->
                        <rect x="16" y="80" width="14" height="4" fill="#1a1a2e"/>
                        <rect x="34" y="80" width="14" height="4" fill="#1a1a2e"/>
                      </svg>
                      <span class="soldier-salute">✋</span>
                    </div>

                    <div class="hero-soldier" aria-label="Soldier saluting">
                      <svg viewBox="0 0 64 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                        <path d="M10 30 Q10 8 32 8 Q54 8 54 30 L54 36 L10 36 Z" fill="#4b5a2a"/>
                        <rect x="10" y="34" width="44" height="4" fill="#2e3815"/>
                        <ellipse cx="32" cy="44" rx="11" ry="12" fill="#dca37f"/>
                        <path d="M16 42 L4 24 L2 28 L12 48 Z" fill="#dca37f"/>
                        <path d="M14 56 Q14 48 32 48 Q50 48 50 56 L50 84 L14 84 Z" fill="#6b7d3f"/>
                        <rect x="28" y="48" width="8" height="36" fill="#4b5a2a"/>
                        <rect x="14" y="68" width="36" height="4" fill="#2e3815"/>
                        <rect x="16" y="80" width="14" height="4" fill="#1a1a2e"/>
                        <rect x="34" y="80" width="14" height="4" fill="#1a1a2e"/>
                      </svg>
                      <span class="soldier-salute">🎖️</span>
                    </div>
                  </div>
                </div>

                <h3 class="aug-title">Leo Wear <em>Launching</em> Offer</h3>
                <p class="aug-sub">A tribute to India — style, pride &amp; freedom in every stitch.</p>
              </div>

              <!-- Coupon block -->
              <div class="id-coupon">
                <div class="coupon-icon">
                  <i class="bi bi-stars"></i>
                </div>
                <div class="coupon-text">
                  <small>Independence Day Offer</small>
                  <h4>Flat 20% OFF</h4>
                  <p>Use the code below at checkout — valid till 17 Aug.</p>
                </div>
                <div class="coupon-code" title="Click to copy" role="button" tabindex="0">FREEDOM20</div>
              </div>



            </div>
          </div>

        </div>
      </div>
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
