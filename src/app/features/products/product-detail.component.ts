import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { HistoryService } from '../../core/services/history.service';
import { SeoService } from '../../core/services/seo.service';
import { Product, ProductImage, ProductVariant } from '../../core/models/models';
import { isLeoWearBrand } from '../../core/catalog/size-color.catalog';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="page-container">
      <div class="container">
        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else if (!product) {
          <div class="empty-state">
            <h5>Product not found</h5>
            <a routerLink="/products" class="btn btn-cs-primary mt-2">Back to Shop</a>
          </div>
        } @else {
          <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
              <li class="breadcrumb-item"><a routerLink="/products">Shop</a></li>
              <li class="breadcrumb-item active">{{ product.name }}</li>
            </ol>
          </nav>

          <div class="row g-5">
            <!-- Gallery -->
            <div class="col-md-6">
              <div class="product-carousel cs-card">
                <div class="carousel-main"
                     (touchstart)="onTouchStart($event)"
                     (touchend)="onTouchEnd($event)">
                  <img [src]="currentImageUrl" [alt]="product.name" class="carousel-img">
                  @if (isLeo(product.brand)) {
                    <div class="leo-choice-badge">Our Choice · Leo Wear</div>
                  }

                  @if (gallery.length > 1) {
                    <button type="button" class="carousel-arrow carousel-prev" (click)="prev()" aria-label="Previous">
                      <i class="bi bi-chevron-left"></i>
                    </button>
                    <button type="button" class="carousel-arrow carousel-next" (click)="next()" aria-label="Next">
                      <i class="bi bi-chevron-right"></i>
                    </button>
                    <div class="carousel-counter">{{ activeIndex + 1 }} / {{ gallery.length }}</div>
                  }

                  @if (selectedColor || selectedSize) {
                    <div class="carousel-badge" [class.shifted]="isLeo(product.brand)">
                      @if (selectedColor) {
                        <span class="color-dot sm" [style.background]="colorHex(selectedColor)"
                              [class.light-dot]="isLightColor(selectedColor)"></span>
                        <span>{{ selectedColor }}</span>
                      }
                      @if (selectedColor && selectedSize) { <span>·</span> }
                      @if (selectedSize) { <span>{{ selectedSize }}</span> }
                    </div>
                  }
                </div>

                @if (gallery.length > 1) {
                  <div class="carousel-thumbs">
                    @for (img of gallery; let i = $index; track img.url + '-' + i) {
                      <button type="button" class="thumb" [class.active]="i === activeIndex" (click)="goTo(i)">
                        <img [src]="img.url" [alt]="'View ' + (i + 1)">
                      </button>
                    }
                  </div>
                }
              </div>
            </div>

            <!-- Details -->
            <div class="col-md-6">
              <div class="d-flex justify-content-between align-items-start gap-2">
                <div>
                  <div class="product-brand text-uppercase mb-1">
                    {{ product.brand || 'Leo Wear' }}
                    @if (isLeo(product.brand)) {
                      <span class="leo-inline">Leo Select</span>
                    }
                  </div>
                  <h1 class="display-font product-title">{{ product.name }}</h1>
                  @if (product.parentCategoryName || product.categoryName) {
                    <div class="text-muted small mb-2">
                      {{ product.parentCategoryName }}{{ product.parentCategoryName && product.categoryName ? ' › ' : '' }}{{ product.categoryName }}
                    </div>
                  }
                </div>
                <button type="button" class="btn btn-love"
                        [class.loved]="loved"
                        (click)="toggleLove()"
                        [title]="loved ? 'Remove from wishlist' : 'Add to wishlist'">
                  <i class="bi" [class.bi-heart-fill]="loved" [class.bi-heart]="!loved"></i>
                </button>
              </div>

              <div class="mb-3">
                <span class="fs-3 fw-bold">₹{{ displayPrice | number:'1.0-0' }}</span>
                @if (product.originalPrice && product.originalPrice > displayPrice) {
                  <span class="text-muted text-decoration-line-through ms-2">
                    ₹{{ product.originalPrice | number:'1.0-0' }}
                  </span>
                }
              </div>

              @if (product.description) {
                <p class="text-muted mb-3">{{ product.description }}</p>
              }
              @if (product.material) {
                <div class="mb-2 small"><span class="fw-semibold">Material:</span> {{ product.material }}</div>
              }
              @if (product.features) {
                <div class="mb-3 d-flex flex-wrap gap-1">
                  @for (f of featureList; track f) {
                    <span class="badge rounded-pill text-bg-light border">{{ f }}</span>
                  }
                </div>
              }

              <!-- Color -->
              @if (colors.length > 0) {
                <div class="mb-3">
                  <div class="mb-2 d-flex align-items-center gap-2">
                    <span class="fw-semibold">Color:</span>
                    @if (selectedColor) {
                      <span class="color-dot" [style.background]="colorHex(selectedColor)"
                            [class.light-dot]="isLightColor(selectedColor)"></span>
                      <span>{{ selectedColor }}</span>
                    } @else {
                      <span class="text-muted">Select</span>
                    }
                  </div>
                  <div class="d-flex flex-wrap gap-2">
                    @for (c of colors; track c) {
                      <button type="button" class="color-swatch"
                              [class.selected]="selectedColor === c"
                              [class.disabled]="!isColorAvailable(c)"
                              [disabled]="!isColorAvailable(c)"
                              (click)="selectColor(c)" [title]="c">
                        <span class="color-dot" [style.background]="colorHex(c)"
                              [class.light-dot]="isLightColor(c)"></span>
                        <span>{{ c }}</span>
                      </button>
                    }
                  </div>
                </div>
              }

              <!-- Size -->
              @if (sizes.length > 0) {
                <div class="mb-3">
                  <div class="mb-2">
                    <span class="fw-semibold">Size:</span>
                    <span class="ms-1">{{ selectedSize || 'Select' }}</span>
                  </div>
                  <div class="d-flex flex-wrap gap-2">
                    @for (s of sizes; track s) {
                      <button type="button" class="size-btn"
                              [class.selected]="selectedSize === s"
                              [class.disabled]="!isSizeAvailable(s)"
                              [disabled]="!isSizeAvailable(s)"
                              (click)="selectSize(s)">
                        {{ s }}
                      </button>
                    }
                  </div>
                </div>
              }

              <div class="mb-3 stock-line">
                <span class="text-muted small">Stock:</span>
                <strong class="ms-1"
                        [class.text-danger]="availableStock <= 5 && availableStock > 0"
                        [class.text-success]="availableStock > 5"
                        [class.text-danger]="availableStock === 0">
                  {{ availableStock > 0 ? availableStock + ' available' : 'Out of stock' }}
                </strong>
                @if (selectedSize && selectedColor) {
                  <span class="text-muted small ms-2">({{ selectedSize }} / {{ selectedColor }})</span>
                }
              </div>

              <div class="mb-3 delivery-estimate">
                <i class="bi bi-truck me-2 text-success"></i>
                <span class="text-muted">Delivery by</span>
                <strong class="ms-1">{{ deliveryFromLabel }}</strong>
                <span class="text-muted mx-1">–</span>
                <strong>{{ deliveryToLabel }}</strong>
              </div>

              @if (variantError) {
                <div class="alert alert-warning py-2 small">{{ variantError }}</div>
              }

              <div class="d-flex align-items-center gap-3 mb-4 flex-wrap">
                <div class="input-group qty-group">
                  <button type="button" class="btn btn-outline-secondary" (click)="changeQty(-1)">−</button>
                  <input type="number" class="form-control text-center" [(ngModel)]="qty" min="1" [max]="availableStock || 1">
                  <button type="button" class="btn btn-outline-secondary" (click)="changeQty(1)">+</button>
                </div>
                <button type="button" class="btn btn-cs-primary btn-lg flex-grow-1"
                        (click)="addToCart()"
                        [disabled]="availableStock === 0 || (hasVariants && !selectedVariant)">
                  <i class="bi bi-bag-plus me-2"></i>
                  {{ availableStock === 0 ? 'Out of Stock' : 'Add to Cart' }}
                </button>
              </div>

              @if (added) {
                <div class="alert alert-success d-flex align-items-center">
                  <i class="bi bi-check-circle me-2"></i> Added to cart!
                  <a routerLink="/cart" class="ms-auto fw-semibold">View Cart</a>
                </div>
              }
              @if (loveMsg) {
                <div class="alert alert-light border small py-2">{{ loveMsg }}</div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .product-brand {
      letter-spacing: 1px;
      color: var(--cs-text-muted, #6b7280);
      font-size: 0.85rem;
    }
    .product-title { font-size: 2rem; margin-bottom: 0.5rem; }
    .btn-love {
      width: 44px; height: 44px; border-radius: 50%;
      border: 1px solid #e5e7eb; background: #fff; color: #9ca3af;
      display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
    }
    .btn-love.loved { color: #e94560; border-color: #fecdd3; background: #fff5f7; }
    .product-carousel { overflow: hidden; }
    .carousel-main {
      position: relative; aspect-ratio: 3/4; background: #f3f4f6; user-select: none;
    }
    .carousel-img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .carousel-arrow {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 48px; height: 48px; border-radius: 50%; border: none;
      background: rgba(255,255,255,0.95); box-shadow: 0 4px 16px rgba(0,0,0,0.18);
      color: #1a1a2e; font-size: 1.5rem; display: flex; align-items: center;
      justify-content: center; cursor: pointer; z-index: 3;
    }
    .carousel-prev { left: 14px; }
    .carousel-next { right: 14px; }
    .carousel-counter {
      position: absolute; bottom: 14px; right: 14px;
      background: rgba(0,0,0,0.7); color: #fff; font-size: 0.8rem;
      font-weight: 600; padding: 5px 12px; border-radius: 20px;
    }
    .carousel-badge {
      position: absolute; top: 14px; left: 14px;
      background: rgba(255,255,255,0.92); color: #1a1a2e;
      font-size: 0.75rem; font-weight: 600; padding: 5px 12px;
      border-radius: 20px; display: flex; gap: 6px;
    }
    .carousel-thumbs { display: flex; gap: 8px; padding: 12px; overflow-x: auto; background: #fff; }
    .thumb {
      flex: 0 0 68px; width: 68px; height: 84px; padding: 0;
      border: 2px solid transparent; border-radius: 8px; overflow: hidden;
      cursor: pointer; background: #f3f4f6;
    }
    .thumb.active { border-color: #e94560; }
    .thumb img { width: 100%; height: 100%; object-fit: cover; }
    .color-swatch {
      min-width: 72px; padding: 8px 14px; border: 2px solid #e5e7eb;
      border-radius: 8px; background: #fff; cursor: pointer;
      font-size: 0.85rem; font-weight: 500;
    }
    .color-swatch.selected { border-color: #e94560; background: #fff5f7; color: #e94560; }
    .color-swatch.disabled, .color-swatch:disabled { opacity: 0.4; cursor: not-allowed; text-decoration: line-through; }
    .size-btn {
      min-width: 48px; height: 44px; padding: 0 12px; border: 2px solid #e5e7eb;
      border-radius: 8px; background: #fff; cursor: pointer; font-weight: 600;
    }
    .size-btn.selected { border-color: #1a1a2e; background: #1a1a2e; color: #fff; }
    .size-btn.disabled, .size-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .qty-group { width: 140px; }
    .stock-line { min-height: 1.5rem; }
    .color-swatch {
      display: inline-flex; align-items: center; gap: 8px;
      min-width: 72px; padding: 8px 14px; border: 2px solid #e5e7eb;
      border-radius: 8px; background: #fff; font-size: 0.85rem; cursor: pointer;
    }
    .color-swatch.selected { border-color: #e94560; background: #fff5f7; color: #e94560; font-weight: 600; }
    .color-swatch.disabled { opacity: 0.4; cursor: not-allowed; }
    .color-dot {
      width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
      border: 1px solid rgba(0,0,0,0.15); display: inline-block;
    }
    .color-dot.sm { width: 12px; height: 12px; }
    .color-dot.light-dot { border-color: #9ca3af; }
    .carousel-badge.shifted { top: 52px; }
    .leo-choice-badge {
      position: absolute; top: 14px; left: 14px; z-index: 4;
      background: linear-gradient(135deg, #1a1a2e, #e94560);
      color: #fff; font-size: 0.75rem; font-weight: 700;
      padding: 6px 12px; border-radius: 20px;
      box-shadow: 0 4px 12px rgba(233,69,96,0.3);
    }
    .leo-inline {
      margin-left: 8px; font-size: 0.7rem; color: #e94560;
      border: 1px solid #e94560; border-radius: 4px; padding: 1px 6px;
      letter-spacing: 0.03em;
    }
    .delivery-estimate {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 0.95rem;
      padding: 0.6rem 0.85rem;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      color: #166534;
    }
    .delivery-estimate strong {
      color: #14532d;
    }
  `]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  gallery: ProductImage[] = [];
  activeIndex = 0;
  loading = true;
  qty = 1;
  added = false;
  variantError = '';
  loved = false;
  loveMsg = '';

  selectedSize = '';
  selectedColor = '';
  sizes: string[] = [];
  colors: string[] = [];

  private touchStartX = 0;
  private sub?: Subscription;
  isLeo = isLeoWearBrand;

  get featureList(): string[] {
    if (!this.product?.features) return [];
    return this.product.features.split(',').map(s => s.trim()).filter(Boolean);
  }

  get hasVariants(): boolean {
    return !!(this.product?.variants && this.product.variants.length > 0);
  }

  get selectedVariant(): ProductVariant | null {
    if (!this.product?.variants?.length || !this.selectedSize || !this.selectedColor) return null;
    const size = this.selectedSize.toLowerCase();
    const color = this.selectedColor.toLowerCase();
    return this.product.variants.find(v =>
      (v.size || '').toLowerCase() === size && (v.color || '').toLowerCase() === color
    ) || null;
  }

  get availableStock(): number {
    if (this.selectedVariant) return Number(this.selectedVariant.stock) || 0;
    if (this.hasVariants) return 0;
    return Number(this.product?.stock) || 0;
  }

  get displayPrice(): number {
    if (this.selectedVariant?.price != null) return Number(this.selectedVariant.price);
    return Number(this.product?.price) || 0;
  }

  get currentImageUrl(): string {
    if (this.gallery.length > 0) {
      return this.gallery[this.activeIndex]?.url
        || this.product?.imageUrl
        || 'https://via.placeholder.com/600x700?text=No+Image';
    }
    return this.product?.imageUrl || 'https://via.placeholder.com/600x700?text=No+Image';
  }

  /** Delivery window: today + 3 days → today + 8 days (e.g. Aug 12th – Aug 17th). */
  get deliveryFromLabel(): string {
    return this.formatDeliveryDate(3);
  }

  get deliveryToLabel(): string {
    return this.formatDeliveryDate(8);
  }

  private formatDeliveryDate(daysFromToday: number): string {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + daysFromToday);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = d.getDate();
    const suffix = this.ordinalSuffix(day);
    return `${months[d.getMonth()]} ${day}${suffix}`;
  }

  private ordinalSuffix(n: number): string {
    const j = n % 10;
    const k = n % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cart: CartService,
    private wishlist: WishlistService,
    private history: HistoryService,
    private cdr: ChangeDetectorRef,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!id) return;
      this.loadProduct(id);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private loadProduct(id: number) {
    this.loading = true;
    this.product = null;
    this.selectedSize = '';
    this.selectedColor = '';
    this.sizes = [];
    this.colors = [];
    this.gallery = [];
    this.qty = 1;
    this.added = false;
    this.variantError = '';
    this.cdr.markForCheck();

    this.productService.getProduct(id).subscribe({
      next: res => {
        const data = res?.data;
        if (!data) {
          this.loading = false;
          this.cdr.detectChanges();
          return;
        }

        this.product = data;
        this.loved = this.wishlist.isLoved(data.id);
        this.history.addView(data);

        // Per-route SEO — title from product name, description from product description,
        // canonical = /products/{id} (no query), Product JSON-LD + BreadcrumbList for rich results.
        this.applySeo(data);

        // Build variant lists
        const variants = (data.variants || []).filter(v => v?.size && v?.color);
        const sizeSet = (data.availableSizes?.length
          ? data.availableSizes
          : [...new Set(variants.map(v => v.size))]).filter(Boolean) as string[];
        const colorSet = (data.availableColors?.length
          ? data.availableColors
          : [...new Set(variants.map(v => v.color))]).filter(Boolean) as string[];

        this.sizes = sizeSet;
        this.colors = colorSet;

        // Default to first in-stock size+color pair so stock shows immediately
        this.applyDefaultSelection(variants);

        // Fallback: product-level size/color when no variants
        if (!this.sizes.length && data.size) {
          this.sizes = [data.size];
          this.selectedSize = data.size;
        }
        if (!this.colors.length && data.color) {
          this.colors = [data.color];
          this.selectedColor = data.color;
        }

        this.refreshGallery();
        this.loading = false;
        // Force UI update (fixes "only Stock shows until qty change")
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.product = null;
        this.cdr.detectChanges();
      }
    });
  }

  /** Prefer first variant that has stock > 0 */
  private applyDefaultSelection(variants: ProductVariant[]) {
    if (!variants.length) return;

    const inStock = variants.find(v => (Number(v.stock) || 0) > 0) || variants[0];
    this.selectedColor = inStock.color;
    this.selectedSize = inStock.size;

    // Ensure selected values appear in the option lists
    if (this.selectedColor && !this.colors.includes(this.selectedColor)) {
      this.colors = [this.selectedColor, ...this.colors];
    }
    if (this.selectedSize && !this.sizes.includes(this.selectedSize)) {
      this.sizes = [this.selectedSize, ...this.sizes];
    }
  }

  /** Set per-route metadata: title, description, canonical, OG image, Product JSON-LD. */
  private applySeo(p: Product): void {
    const desc = (p.description || `${p.brand || 'Leo Wear'} ${p.name} — premium clothing at Leo Wear.`)
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 155);
    const image = this.bestImage(p);
    const base = (environment.siteUrl || '').replace(/\/$/, '');
    const productUrl = `${base}/products/${p.id}`;

    this.seo.setPage({
      title: `${p.name} – ${p.brand || 'Leo Wear'}`,
      description: desc,
      image,
      canonicalPath: `/products/${p.id}`,
      type: 'product',
      keywords: [p.name, p.brand, p.material, p.categoryName, p.parentCategoryName]
        .filter(Boolean)
        .join(', '),
      jsonLd: this.buildProductJsonLd(p, image, productUrl)
    });
  }

  private buildProductJsonLd(p: Product, image: string | undefined, url: string): Record<string, any> {
    const offers: any = {
      '@type': 'Offer',
      price: (p.price ?? 0).toFixed(2),
      priceCurrency: 'INR',
      availability: (p.stock > 0)
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url
    };
    if (p.originalPrice && p.originalPrice > p.price) {
      offers.priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString().split('T')[0];
    }
    const ld: any = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      description: (p.description || p.name).slice(0, 500),
      brand: { '@type': 'Brand', name: p.brand || 'Leo Wear' },
      sku: p.id ? `LEO-${p.id}` : undefined,
      image: image ? [image] : undefined,
      offers
    };
    if (p.categoryName) {
      ld.category = p.parentCategoryName
        ? `${p.parentCategoryName} > ${p.categoryName}`
        : p.categoryName;
    }
    return ld;
  }

  private bestImage(p: Product): string | undefined {
    if (!p) return undefined;
    if (p.imageUrl) return p.imageUrl;
    const primary = (p.images || []).find(i => i?.primary);
    return primary?.url || p.images?.[0]?.url;
  }

  isColorAvailable(color: string): boolean {
    if (!this.product?.variants?.length) return true;
    const c = (color || '').toLowerCase();
    return this.product.variants.some(v =>
      (v.color || '').toLowerCase() === c && (Number(v.stock) || 0) > 0
    );
  }

  isSizeAvailable(size: string): boolean {
    if (!this.product?.variants?.length) return true;
    const s = (size || '').toLowerCase();
    if (!this.selectedColor) {
      return this.product.variants.some(v =>
        (v.size || '').toLowerCase() === s && (Number(v.stock) || 0) > 0
      );
    }
    const c = this.selectedColor.toLowerCase();
    return this.product.variants.some(v =>
      (v.size || '').toLowerCase() === s &&
      (v.color || '').toLowerCase() === c &&
      (Number(v.stock) || 0) > 0
    );
  }

  selectColor(c: string) {
    if (!this.isColorAvailable(c)) return;
    this.selectedColor = c;
    if (this.selectedSize && !this.isSizeAvailable(this.selectedSize)) {
      this.selectedSize = this.sizes.find(s => this.isSizeAvailable(s)) || '';
    }
    this.refreshGallery();
    this.qty = 1;
    this.variantError = '';
    this.cdr.detectChanges();
  }

  selectSize(s: string) {
    if (!this.isSizeAvailable(s)) return;
    this.selectedSize = s;
    this.refreshGallery();
    this.qty = 1;
    this.variantError = '';
    this.cdr.detectChanges();
  }

  /**
   * Strict variant gallery:
   * - Image tagged Navy + S  → only when Navy AND S selected
   * - Image tagged Navy only → any size of Navy (not other colors)
   * - Never show a size-specific image for a different size
   * - Never show another color's images
   */
  /**
   * Strict variant gallery:
   * - Image tagged Color+Size → only that exact combination
   * - Image tagged Color only (no size) → all sizes of that color
   * - Never use size-specific image for a different size
   * - Never fall back to other colors' images
   */
  refreshGallery() {
    if (!this.product) {
      this.gallery = [];
      return;
    }
    const all = (this.product.images || []).filter(img => !!img?.url);
    const color = this.norm(this.selectedColor);
    const size = this.norm(this.selectedSize);
    const imgColor = (img: ProductImage) => this.norm(img.color);
    const imgSize = (img: ProductImage) => this.norm(img.size);

    let filtered: ProductImage[] = [];

    if (color && size) {
      // Exact match only
      filtered = all.filter(img => imgColor(img) === color && imgSize(img) === size);
      // Color-only images (no size tag) shared across sizes of this color
      if (!filtered.length) {
        filtered = all.filter(img => imgColor(img) === color && !imgSize(img));
      }
      // Do NOT use images tagged for other sizes of this color
    } else if (color) {
      filtered = all.filter(img => imgColor(img) === color && !imgSize(img));
    } else if (size) {
      filtered = all.filter(img => imgSize(img) === size && !imgColor(img));
    }

    if (!filtered.length) {
      filtered = all.filter(img => !imgColor(img) && !imgSize(img));
    }

    // Avoid leaking primary (often another variant) when a color is selected
    if (!filtered.length && !color && this.product.imageUrl) {
      filtered = [{ url: this.product.imageUrl, primary: true, sortOrder: 0 } as ProductImage];
    }

    if (!filtered.length) {
      const label = encodeURIComponent((this.selectedColor || 'Product') + (this.selectedSize ? ' ' + this.selectedSize : ''));
      filtered = [{
        url: 'https://via.placeholder.com/600x700?text=' + label,
        primary: true,
        sortOrder: 0
      } as ProductImage];
    }

    filtered = [...filtered].sort((a, b) => {
      if (!!a.primary !== !!b.primary) return a.primary ? -1 : 1;
      return (a.sortOrder || 0) - (b.sortOrder || 0);
    });

    this.gallery = filtered;
    this.activeIndex = 0;
    this.cdr.markForCheck();
  }


  private norm(v?: string | null): string {
    return (v || '').trim().toLowerCase();
  }

  /** CSS color for swatch icon */
  colorHex(name: string): string {
    const key = this.norm(name);
    const map: Record<string, string> = {
      black: '#111111', white: '#ffffff', navy: '#1e3a5f', grey: '#9ca3af', gray: '#9ca3af',
      charcoal: '#36454f', beige: '#d8c3a5', cream: '#fffdd0', ivory: '#fffff0',
      brown: '#6b3e26', tan: '#d2b48c', khaki: '#c3b091', olive: '#556b2f',
      maroon: '#800000', burgundy: '#6d0f23', red: '#dc2626', wine: '#722f37',
      pink: '#ec4899', rose: '#f43f5e', peach: '#ffcba4', orange: '#f97316',
      mustard: '#e1ad01', yellow: '#eab308', gold: '#d4af37',
      green: '#16a34a', 'forest green': '#228b22', mint: '#98ff98', teal: '#0d9488',
      turquoise: '#40e0d0', blue: '#2563eb', 'sky blue': '#87ceeb', 'royal blue': '#4169e1',
      indigo: '#4f46e5', purple: '#7c3aed', lavender: '#b57edc', lilac: '#c8a2c8',
      multi: 'linear-gradient(135deg,#e94560,#2563eb,#eab308)',
      print: 'linear-gradient(135deg,#9ca3af,#111)',
      striped: 'repeating-linear-gradient(45deg,#111 0 4px,#fff 4px 8px)',
      checked: 'repeating-linear-gradient(90deg,#111 0 4px,#fff 4px 8px)'
    };
    return map[key] || '#cbd5e1';
  }

  isLightColor(name: string): boolean {
    const key = this.norm(name);
    return ['white', 'cream', 'ivory', 'beige', 'yellow', 'mint', 'peach', 'sky blue'].includes(key);
  }

  changeQty(delta: number) {
    const max = Math.max(1, this.availableStock || 1);
    this.qty = Math.min(max, Math.max(1, (Number(this.qty) || 1) + delta));
  }

  prev() {
    if (this.gallery.length <= 1) return;
    this.activeIndex = (this.activeIndex - 1 + this.gallery.length) % this.gallery.length;
  }

  next() {
    if (this.gallery.length <= 1) return;
    this.activeIndex = (this.activeIndex + 1) % this.gallery.length;
  }

  goTo(i: number) { this.activeIndex = i; }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0]?.screenX ?? 0;
  }

  onTouchEnd(e: TouchEvent) {
    const endX = e.changedTouches[0]?.screenX ?? 0;
    const dx = endX - this.touchStartX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) this.next();
    else this.prev();
  }

  toggleLove() {
    if (!this.product) return;
    this.loved = this.wishlist.toggle(this.product);
    this.loveMsg = this.loved ? 'Saved to wishlist' : 'Removed from wishlist';
    setTimeout(() => this.loveMsg = '', 2000);
  }

  addToCart() {
    if (!this.product) return;
    if (this.hasVariants && !this.selectedVariant) {
      this.variantError = 'Please select size and color';
      return;
    }
    const v = this.selectedVariant;
    this.cart.add(this.product, Number(this.qty) || 1, {
      variantId: v?.id,
      size: this.selectedSize || v?.size,
      color: this.selectedColor || v?.color,
      imageUrl: this.currentImageUrl,
      unitPrice: this.displayPrice,
      maxStock: this.availableStock
    });
    this.added = true;
    setTimeout(() => this.added = false, 3000);
  }
}
