import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { HistoryService } from '../../core/services/history.service';
import { SeoService } from '../../core/services/seo.service';
import { Product, Category } from '../../core/models/models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <div class="row g-4">
          <!-- Filters -->
          <div class="col-lg-3">
            <div class="cs-card p-3 sticky-top" style="top:1rem">
              <h6 class="fw-semibold mb-3">Search &amp; filters</h6>

              <label class="form-label small mb-1">Search</label>
              <input type="text" class="form-control cs-form-control mb-3"
                     [(ngModel)]="search" (keyup.enter)="applyFilters()"
                     placeholder="Search products...">

              @if (history.searches().length) {
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="small text-muted">Recent searches</span>
                  </div>
                  <div class="d-flex flex-wrap gap-1">
                    @for (s of history.searches(); track s) {
                      <button type="button" class="btn btn-sm btn-outline-secondary py-0" (click)="useSearch(s)">{{ s }}</button>
                    }
                  </div>
                </div>
              }

              <!-- Category (top-level from DB) -->
              <label class="form-label small mb-1">Category</label>
              <select class="form-select cs-form-control mb-3"
                      [(ngModel)]="categoryId" (ngModelChange)="onCategoryChange()">
                <option [ngValue]="null">All categories</option>
                @for (c of rootCategories; track c.id) {
                  <option [ngValue]="c.id">{{ c.name }}</option>
                }
              </select>

              <!-- Subcategory (children of selected category) -->
              <label class="form-label small mb-1">Subcategory</label>
              <select class="form-select cs-form-control mb-3"
                      [(ngModel)]="subcategoryId" (ngModelChange)="applyFilters()"
                      [disabled]="!categoryId || subcategories.length === 0">
                <option [ngValue]="null">
                  {{ !categoryId ? 'Select a category first' : (subcategories.length ? 'All subcategories' : 'No subcategories') }}
                </option>
                @for (s of subcategories; track s.id) {
                  <option [ngValue]="s.id">{{ s.name }}</option>
                }
              </select>

              <div class="d-grid gap-2">
                <button class="btn btn-cs-primary btn-sm" (click)="applyFilters()">Apply</button>
                <button class="btn btn-outline-secondary btn-sm" (click)="reset()">Clear all</button>
              </div>

            </div>
          </div>

          <!-- Results -->
          <div class="col-lg-9">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div>
                <h2 class="section-title mb-0">{{ title }}</h2>
                @if (breadcrumb) {
                  <div class="text-muted small mt-1">{{ breadcrumb }}</div>
                }
              </div>
              <span class="text-muted small">{{ total }} products</span>
            </div>

            @if (loading) {
              <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
            } @else if (products.length === 0) {
              <div class="empty-state">
                <i class="bi bi-search d-block"></i>
                <h5>No products found</h5>
                <p>Try adjusting your filters</p>
              </div>
            } @else {
              <div class="row g-4">
                @for (p of products; track p.id) {
                  <div class="col-6 col-md-4">
                    <div class="cs-card product-card h-100">
                      <a [routerLink]="['/products', p.id]" class="text-decoration-none">
                        <div class="product-img-wrap position-relative">
                          <img [src]="p.imageUrl || 'https://via.placeholder.com/400x500?text=Leo+Wear'" [alt]="p.name" loading="lazy">
                          @if (isLeo(p.brand)) {
                            <span class="badge bg-dark position-absolute top-0 start-0 m-2" style="font-size:0.65rem;">Our Choice</span>
                          }
                          @if (p.originalPrice && p.originalPrice > p.price) {
                            <span class="text-right badge-sale">SALE</span>
                          }
                          @if (p.stock === 0) {
                            <span class="badge-stock">Sold Out</span>
                          }
                        </div>
                      </a>
                      <div class="product-body">
                        <div class="product-brand">{{ p.brand || 'Leo Wear' }}</div>
                        @if (p.categoryName) {
                          <div class="text-muted" style="font-size:0.7rem">{{ p.categoryName }}</div>
                        }
                        <a [routerLink]="['/products', p.id]" class="text-decoration-none">
                          <div class="product-name">{{ p.name }}</div>
                        </a>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                          <div class="product-price">
                            ₹{{ p.price | number:'1.0-0' }}
                            @if (p.originalPrice && p.originalPrice > p.price) {
                              <span class="original">₹{{ p.originalPrice | number:'1.0-0' }}</span>
                            }
                          </div>
                          <div class="d-flex gap-1">
                            <button class="btn btn-sm btn-link text-danger p-0" (click)="toggleLove(p)" title="Wishlist">
                              <i class="bi" [class.bi-heart-fill]="wishlist.isLoved(p.id)" [class.bi-heart]="!wishlist.isLoved(p.id)"></i>
                            </button>
                            <button class="btn btn-sm btn-cs-primary" (click)="addToCart(p)" [disabled]="p.stock === 0">
                              <i class="bi bi-bag-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>

              @if (totalPages > 1) {
                <nav class="mt-4 d-flex justify-content-center">
                  <ul class="pagination">
                    <li class="page-item" [class.disabled]="page === 0">
                      <button class="page-link" (click)="goPage(page - 1)">Prev</button>
                    </li>
                    @for (p of pages; track p) {
                      <li class="page-item" [class.active]="p === page">
                        <button class="page-link" (click)="goPage(p)">{{ p + 1 }}</button>
                      </li>
                    }
                    <li class="page-item" [class.disabled]="page >= totalPages - 1">
                      <button class="page-link" (click)="goPage(page + 1)">Next</button>
                    </li>
                  </ul>
                </nav>
              }
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  /** Full tree from DB: roots with children */
  rootCategories: Category[] = [];
  subcategories: Category[] = [];

  categoryId: number | null = null;
  subcategoryId: number | null = null;
  search = '';

  page = 0;
  size = 12;
  total = 0;
  totalPages = 0;
  loading = true;
  title = 'All Products';
  breadcrumb = '';

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  constructor(
    private productService: ProductService,
    private cart: CartService,
    public wishlist: WishlistService,
    public history: HistoryService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Shop All Products',
      description: 'Browse our full collection of premium clothing for men, women & kids. Filter by category, brand, and size to find your fit.',
      canonicalPath: '/products',
      keywords: 'shop, clothing, men, women, kids, t-shirts, jeans, apparel'
    });
    this.productService.getCategoryTree().subscribe({
      next: res => {
        this.rootCategories = res.data || [];
        this.syncSubcategories();
      },
      error: () => {
        // fallback flat list
        this.productService.getCategories().subscribe(r => {
          this.rootCategories = (r.data || []).filter(c => !c.parentId);
        });
      }
    });

    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category'] ? +params['category'] : null;
      this.subcategoryId = params['subcategory'] ? +params['subcategory'] : null;
      this.search = params['search'] || '';
      this.page = 0;
      this.syncSubcategories();
      this.load();
    });
  }

  /** Subcategories of selected parent — always from DB tree */
  syncSubcategories() {
    if (!this.categoryId) {
      this.subcategories = [];
      return;
    }
    const root = this.rootCategories.find(c => c.id === this.categoryId);
    this.subcategories = root?.children || [];
    // If selected subcategory is not under this parent, clear it
    if (this.subcategoryId && !this.subcategories.some(s => s.id === this.subcategoryId)) {
      this.subcategoryId = null;
    }
  }

  onCategoryChange() {
    this.subcategoryId = null;
    this.syncSubcategories();
    this.applyFilters();
  }

  /** Effective category id sent to API: subcategory if set, else parent */
  private filterCategoryId(): number | undefined {
    if (this.subcategoryId) return this.subcategoryId;
    if (this.categoryId) return this.categoryId;
    return undefined;
  }

  load() {
    this.loading = true;
    if (this.search?.trim()) {
      this.history.addSearch(this.search.trim());
    }
    const catId = this.filterCategoryId();
    this.productService.getProducts(this.page, this.size, catId, this.search || undefined)
      .subscribe({
        next: res => {
          this.products = res.data?.content || [];
          this.total = res.data?.totalElements || 0;
          this.totalPages = res.data?.totalPages || 0;
          this.loading = false;
          this.updateTitle();
        },
        error: () => this.loading = false
      });
  }

  updateTitle() {
    const root = this.rootCategories.find(c => c.id === this.categoryId);
    const sub = this.subcategories.find(s => s.id === this.subcategoryId);

    if (sub && root) {
      this.title = sub.name;
      this.breadcrumb = `${root.name} › ${sub.name}`;
    } else if (root) {
      this.title = root.name;
      this.breadcrumb = `${root.name} · all subcategories`;
    } else if (this.search) {
      this.title = `Results for "${this.search}"`;
      this.breadcrumb = '';
    } else {
      this.title = 'All Products';
      this.breadcrumb = '';
    }

    // Per-route SEO metadata — title/desc react to category & search filters.
    // Canonical stays /products (no query string) so /products?category=3 isn't
    // seen as a duplicate of /products.
    const desc = this.search
      ? `Search results for "${this.search}" at Leo Wear — ${this.total} products.`
      : sub
        ? `Shop ${sub.name} from ${root?.name || 'Leo Wear'} — ${this.total} styles, premium quality clothing.`
        : root
          ? `Shop ${root.name} clothing — ${this.total} products at Leo Wear.`
          : `Browse ${this.total} premium clothing products at Leo Wear. Men, women & kids, free returns, secure checkout.`;
    this.seo.setPage({
      title: this.title,
      description: desc,
      canonicalPath: '/products',
      keywords: root ? `${root.name}, ${root.name} clothing, Leo Wear` : undefined,
      jsonLd: this.buildItemListJsonLd()
    });
  }

  private buildItemListJsonLd(): Record<string, any> {
    const base = (environment.siteUrl || '').replace(/\/$/, '');
    const items = (this.products || []).slice(0, 20).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${base}/products/${p.id}`,
      name: p.name
    }));
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: items
    };
  }

  goPage(p: number) {
    if (p < 0 || p >= this.totalPages) return;
    this.page = p;
    this.load();
  }

  reset() {
    this.categoryId = null;
    this.subcategoryId = null;
    this.search = '';
    this.page = 0;
    this.subcategories = [];
    this.router.navigate(['/products']);
    this.load();
  }

  applyFilters() {
    if (this.search?.trim()) {
      this.history.addSearch(this.search.trim());
    }
    this.page = 0;
    this.router.navigate(['/products'], {
      queryParams: {
        category: this.categoryId || null,
        subcategory: this.subcategoryId || null,
        search: this.search?.trim() || null
      }
    });
    this.load();
  }

  useSearch(q: string) {
    this.search = q;
    this.applyFilters();
  }

  isLeo(brand?: string): boolean {
    return !!brand && brand.toLowerCase().replace(/\s/g, '').includes('leowear');
  }

  toggleLove(p: Product) {
    this.wishlist.toggle(p);
  }

  addToCart(p: Product) {
    const needsOptions = !!(p.variants && p.variants.length)
      || !!(p.availableSizes && p.availableSizes.length)
      || !!(p.availableColors && p.availableColors.length);
    if (needsOptions) {
      this.router.navigate(['/products', p.id]);
      return;
    }
    this.cart.add(p);
  }
}
