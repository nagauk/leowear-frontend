import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { UploadService } from '../../core/services/upload.service';
import { Product, Category, ProductVariant, ProductImage } from '../../core/models/models';
import { sizesForGuide, colorsForCategory, MATERIALS, FEATURES } from '../../core/catalog/size-color.catalog';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container-fluid px-4">
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a routerLink="/admin" class="btn btn-outline-dark btn-sm">Dashboard</a>
          <a routerLink="/admin/products" class="btn btn-cs-dark btn-sm">Products</a>
          <a routerLink="/admin/orders" class="btn btn-outline-dark btn-sm">Orders</a>
          <a routerLink="/admin/returns" class="btn btn-outline-dark btn-sm">Returns</a>
          <a routerLink="/admin/coupons" class="btn btn-outline-dark btn-sm">Coupons</a>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="section-title mb-0">Manage Products</h2>
          <button class="btn btn-cs-primary" (click)="showForm = !showForm; editing = null; resetForm()">
            <i class="bi bi-plus-lg me-1"></i> Add Product
          </button>
        </div>

        <div class="d-flex align-items-center gap-2 mb-3 flex-wrap">
          <span class="text-muted small me-1">Status:</span>
          <div class="btn-group btn-group-sm" role="group" aria-label="Status filter">
            <button type="button" class="btn"
                    [class.btn-cs-dark]="statusFilter === 'all'"
                    [class.btn-outline-dark]="statusFilter !== 'all'"
                    (click)="setStatusFilter('all')">All</button>
            <button type="button" class="btn"
                    [class.btn-cs-dark]="statusFilter === 'active'"
                    [class.btn-outline-dark]="statusFilter !== 'active'"
                    (click)="setStatusFilter('active')">Active</button>
            <button type="button" class="btn"
                    [class.btn-cs-dark]="statusFilter === 'inactive'"
                    [class.btn-outline-dark]="statusFilter !== 'inactive'"
                    (click)="setStatusFilter('inactive')">Inactive</button>
          </div>
        </div>

        @if (showForm) {
          <div class="cs-card p-4 mb-4">
            <h5>{{ editing ? 'Edit Product' : 'New Product' }}</h5>
            <form (ngSubmit)="saveProduct()" class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Name *</label>
                <input class="form-control cs-form-control" [(ngModel)]="form.name" name="name" required>
              </div>
              <div class="col-md-3">
                <label class="form-label">Base Price (₹) *</label>
                <input type="number" step="1" class="form-control cs-form-control" [(ngModel)]="form.price" name="price" required>
              </div>
              <div class="col-md-3">
                <label class="form-label">Original Price (₹)</label>
                <input type="number" step="1" class="form-control cs-form-control" [(ngModel)]="form.originalPrice" name="originalPrice">
              </div>
              <div class="col-md-12">
                <label class="form-label">Description</label>
                <textarea class="form-control cs-form-control" [(ngModel)]="form.description" name="description" rows="2"></textarea>
              </div>
              <div class="col-md-4">
                <label class="form-label">Brand</label>
                <input class="form-control cs-form-control" [(ngModel)]="form.brand" name="brand" placeholder="Leo Wear">
              </div>
              <div class="col-md-4">
                <label class="form-label">Material / Fabric</label>
                <select class="form-select cs-form-control" [(ngModel)]="form.material" name="material">
                  <option value="">— Select material —</option>
                  @for (m of materials; track m) {
                    <option [ngValue]="m">{{ m }}</option>
                  }
                </select>
              </div>
              <div class="col-12">
                <label class="form-label">Features</label>
                <div class="d-flex flex-wrap gap-2 mb-1">
                  @for (f of featureOptions; track f) {
                    <label class="badge rounded-pill border px-2 py-1" style="cursor:pointer"
                           [class.text-bg-dark]="selectedFeatures.includes(f)"
                           [class.text-bg-light]="!selectedFeatures.includes(f)">
                      <input type="checkbox" class="d-none" [checked]="selectedFeatures.includes(f)"
                             (change)="toggleFeature(f)">
                      {{ f }}
                    </label>
                  }
                </div>
              </div>
              <div class="col-md-4">
                <label class="form-label">Category</label>
                <select class="form-select cs-form-control" [(ngModel)]="formParentId" name="parentCategoryId"
                        (ngModelChange)="onParentCategoryChange()">
                  <option [ngValue]="null">Select category</option>
                  @for (c of rootCategories; track c.id) {
                    <option [ngValue]="c.id">{{ c.name }}</option>
                  }
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label">Subcategory</label>
                <select class="form-select cs-form-control" [(ngModel)]="form.categoryId" name="categoryId"
                        (ngModelChange)="onCategoryChange($event)"
                        [disabled]="!formParentId">
                  <option [ngValue]="null">{{ formParentId ? 'Select subcategory' : 'Select category first' }}</option>
                  @for (s of formSubcategories; track s.id) {
                    <option [ngValue]="s.id">{{ s.name }}</option>
                  }
                </select>
                <div class="form-text">Product is stored under the subcategory (extensible from DB).</div>
              </div>
              <div class="col-md-4">
                <label class="form-label">Base stock (if no variants)</label>
                <input type="number" class="form-control cs-form-control" [(ngModel)]="form.stock" name="stock">
              </div>

              <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <label class="form-label mb-0">Images (tag color so gallery updates on selection)</label>
                  <button type="button" class="btn btn-sm btn-outline-primary" (click)="addImageRow()">
                    <i class="bi bi-plus"></i> Add Image
                  </button>
                </div>
                @for (img of form.images; let i = $index; track i) {
                  <div class="d-flex gap-2 align-items-center mb-2 flex-wrap">
                    <input type="radio" class="form-check-input" name="primaryImg"
                           [checked]="img.primary" (change)="setPrimaryImage(i)" title="Prime image">
                    <span class="badge" [class.bg-danger]="img.primary" [class.bg-secondary]="!img.primary">
                      {{ img.primary ? 'Prime' : i + 1 }}
                    </span>
                    <input class="form-control cs-form-control" style="flex:1;min-width:200px"
                           [(ngModel)]="img.url" [name]="'imgUrl'+i" placeholder="Image URL (paste or upload)">
                    <label class="btn btn-sm btn-outline-secondary mb-0" style="cursor:pointer" title="Upload image to Cloudinary">
                      <i class="bi" [class.bi-cloud-upload]="!img.uploading" [class.bi-spinner]="img.uploading" [class.bi-spin]="img.uploading"></i>
                      {{ img.uploading ? 'Uploading…' : 'Upload' }}
                      <input type="file" accept="image/jpeg,image/png,image/webp" class="d-none"
                             (change)="onImageFileSelected($event, i)" [disabled]="img.uploading">
                    </label>
                    <select class="form-select cs-form-control" style="width:130px"
                            [(ngModel)]="img.color" [name]="'imgColor'+i">
                      <option value="">Any color</option>
                      @for (c of colorOptions; track c) {
                        <option [style.background]="colorHex(c)" [ngValue]="c">  {{ c }}</option>
                      }
                    </select>
                    <select class="form-select cs-form-control" style="width:110px"
                            [(ngModel)]="img.size" [name]="'imgSize'+i">
                      <option value="">Any size</option>
                      @for (s of sizeOptions; track s) {
                        <option [ngValue]="s">{{ s }}</option>
                      }
                    </select>
                    @if (img.previewUrl && !img.url) {
                      <img [src]="img.previewUrl" width="40" height="48" style="object-fit:cover;border-radius:4px;" title="Local preview">
                    }
                    @if (img.url) {
                      <img [src]="img.url" width="40" height="48" style="object-fit:cover;border-radius:4px;" title="Cloudinary image">
                    }
                    <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeImageRow(i)">
                      <i class="bi bi-x"></i>
                    </button>
                    @if (img.uploadError) {
                      <div class="text-danger small w-100">{{ img.uploadError }}</div>
                    }
                  </div>
                }
              </div>

              <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                  <label class="form-label mb-0">Size &amp; Color Variants</label>
                  <span class="text-muted small">Sizes/colors based on category: <strong>{{ categoryName || 'All apparel' }}</strong></span>
                </div>

                <!-- Bulk generate matrix -->
                <div class="border rounded p-3 mb-3 bg-light">
                  <div class="row g-2 align-items-end">
                    <div class="col-md-4">
                      <label class="form-label small mb-1">Sizes</label>
                      <select multiple class="form-select form-select-sm" [(ngModel)]="bulkSizes" name="bulkSizes" size="6">
                        @for (s of sizeOptions; track s) {
                          <option [ngValue]="s">{{ s }}</option>
                        }
                      </select>
                      <div class="form-text">Ctrl/Cmd + click for multiple</div>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label small mb-1">Colors</label>
                      <select multiple class="form-select form-select-sm" [(ngModel)]="bulkColors" name="bulkColors" size="6">
                        @for (c of colorOptions; track c) {
                          <option [style.background]="colorHex(c)" [ngValue]="c">{{ c }}</option>
                        }
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label class="form-label small mb-1">Stock each</label>
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="bulkStock" name="bulkStock" min="0">
                    </div>
                    <div class="col-md-2">
                      <button type="button" class="btn btn-sm btn-cs-primary w-100" (click)="generateVariants()">
                        Generate
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary w-100 mt-1" (click)="addVariantRow()">
                        + One row
                      </button>
                    </div>
                  </div>
                </div>

                <div class="table-responsive">
                  <table class="table table-sm align-middle mb-0">
                    <thead>
                      <tr>
                        <th>Size</th><th>Color</th><th>Stock</th><th>Price (optional)</th><th>SKU</th><th></th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (v of form.variants; let i = $index; track i) {
                        <tr>
                          <td>
                            <select class="form-select form-select-sm" [(ngModel)]="v.size" [name]="'vsize'+i">
                              <option value="">Size</option>
                              @for (s of sizeOptions; track s) {
                                <option [ngValue]="s">{{ s }}</option>
                              }
                            </select>
                          </td>
                          <td>
                            <select class="form-select form-select-sm" [(ngModel)]="v.color" [name]="'vcolor'+i">
                              <option value="">Color</option>
                              @for (c of colorOptions; track c) {
                                <option [ngValue]="c">{{ c }}</option>
                              }
                            </select>
                          </td>
                          <td><input type="number" class="form-control form-control-sm" [(ngModel)]="v.stock" [name]="'vstock'+i" style="width:80px"></td>
                          <td><input type="number" class="form-control form-control-sm" [(ngModel)]="v.price" [name]="'vprice'+i" placeholder="base" style="width:100px"></td>
                          <td><input class="form-control form-control-sm" [(ngModel)]="v.sku" [name]="'vsku'+i" placeholder="SKU"></td>
                          <td>
                            <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeVariantRow(i)">
                              <i class="bi bi-x"></i>
                            </button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
                @if (form.variants.length === 0) {
                  <p class="text-muted small mb-0">No variants — product uses base stock only. Use Generate to create size×color rows.</p>
                }
              </div>

              <div class="col-12">
                @if (formError) {
                  <div class="col-12"><div class="alert alert-danger py-2 small mb-0">{{ formError }}</div></div>
                }
                @if (formSuccess) {
                  <div class="col-12"><div class="alert alert-success py-2 small mb-0">{{ formSuccess }}</div></div>
                }
                <div class="col-12">
                <button type="submit" class="btn btn-cs-primary me-2" [disabled]="saving">
                  {{ editing ? 'Update' : 'Create' }}
                </button>
                <button type="button" class="btn btn-outline-secondary" (click)="showForm = false">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        }

        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else {
          <div class="cs-card p-0 overflow-hidden">
            <div class="table-responsive">
              <table class="table cs-table mb-0">
                <thead>
                  <tr>
                    <th>ID</th><th>Image</th><th>Name</th><th>Price</th><th>Stock</th>
                    <th>Variants</th><th>Status</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (p of filteredProducts; track p.id) {
                    <tr>
                      <td>{{ p.id }}</td>
                      <td>
                        <img [src]="p.imageUrl || 'https://via.placeholder.com/40'" width="40" height="50"
                             style="object-fit:cover;border-radius:4px;">
                      </td>
                      <td>
                        <div class="fw-medium">{{ p.name }}</div>
                        <div class="text-muted small">{{ p.brand }}</div>
                      </td>
                      <td>₹{{ p.price | number:'1.0-0' }}</td>
                      <td>
                        <span [class]="p.stock <= 5 ? 'text-danger fw-bold' : ''">{{ p.stock }}</span>
                      </td>
                      <td>
                        @if (p.variants?.length) {
                          <span class="badge bg-info text-dark">{{ p.variants!.length }} SKUs</span>
                          <div class="small text-muted">
                            {{ p.availableSizes?.join(', ') }} · {{ p.availableColors?.join(', ') }}
                          </div>
                        } @else {
                          <span class="text-muted">—</span>
                        }
                      </td>
                      <td>
                        <span class="badge" [class]="p.active ? 'bg-success' : 'bg-secondary'">
                          {{ p.active ? 'Active' : 'Inactive' }}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-outline-primary me-1" (click)="edit(p)">
                          <i class="bi bi-pencil"></i>
                        </button>
                        @if (p.active) {
                          <button class="btn btn-sm btn-outline-danger" (click)="deactivate(p.id)">
                            <i class="bi bi-trash"></i>
                          </button>
                        } @else {
                          <button class="btn btn-sm btn-outline-success" (click)="reactivate(p.id)">
                            <i class="bi bi-arrow-counterclockwise"></i> Reactivate
                          </button>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  rootCategories: Category[] = [];
  formSubcategories: Category[] = [];
  formParentId: number | null = null;
  loading = true;
  showForm = false;
  editing: Product | null = null;
  saving = false;
  formError = '';
  formSuccess = '';
  form: any = this.emptyForm();
  sizeOptions: string[] = sizesForGuide(null, null);
  materials = MATERIALS;
  featureOptions = FEATURES;
  selectedFeatures: string[] = [];
  colorOptions: string[] = colorsForCategory(null);
  bulkSizes: string[] = [];
  bulkColors: string[] = [];
  bulkStock = 10;
  /** Status filter for the admin product table: 'all' | 'active' | 'inactive'. */
  statusFilter: 'all' | 'active' | 'inactive' = 'all';

  get filteredProducts(): Product[] {
    if (this.statusFilter === 'active') return this.products.filter(p => p.active);
    if (this.statusFilter === 'inactive') return this.products.filter(p => !p.active);
    return this.products;
  }
    private norm(v?: string | null): string {
      return (v || '').trim().toLowerCase();
    }
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

  get categoryName(): string {
    const c = this.categories.find(x => Number(x.id) === Number(this.form.categoryId));
    return c?.name || '';
  }

  constructor(
    private productService: ProductService,
    private uploadService: UploadService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Manage Products',
      description: 'Leo Wear admin — manage products, stock, and visibility.',
      canonicalPath: '/admin/products',
      noindex: true
    });
    this.load();
    this.productService.getCategoryTree().subscribe(res => {
      this.rootCategories = res.data || [];
    });
    this.productService.getCategories().subscribe(res => this.categories = res.data || []);
  }

  onParentCategoryChange() {
    const root = this.rootCategories.find(c => Number(c.id) === Number(this.formParentId));
    this.formSubcategories = root?.children || [];
    this.form.categoryId = null;
    this.onCategoryChange(null);
  }

  load() {
    this.loading = true;
    this.productService.getAllProductsAdmin(0, 50).subscribe({
      next: res => { this.products = res.data.content; this.loading = false; },
      error: () => this.loading = false
    });
  }

  setStatusFilter(filter: 'all' | 'active' | 'inactive') {
    this.statusFilter = filter;
  }

  emptyForm() {
    return {
      name: '', description: '', price: 0, originalPrice: null, stock: 0,
      brand: 'Leo Wear', material: '', features: '', categoryId: null,
      images: [this.firstImageRow()],
      variants: [] as ProductVariant[]
    };
  }

  /** Initial image row — primary by default, with upload-state fields. */
  firstImageRow() {
    return {
      url: '', color: '', size: '', primary: true, sortOrder: 0,
      previewUrl: undefined, uploading: false, uploadError: ''
    };
  }

  resetForm() { this.form = this.emptyForm(); this.formParentId = null; this.formSubcategories = []; this.selectedFeatures = []; }

  addImageRow() {
    this.form.images = [...this.form.images, this.newImageRowState()];
  }

  removeImageRow(i: number) {
    this.form.images = this.form.images.filter((_: any, idx: number) => idx !== i);
    if (this.form.images.length && !this.form.images.some((img: ProductImage) => img.primary)) {
      this.form.images[0].primary = true;
    }
  }

  setPrimaryImage(i: number) {
    this.form.images.forEach((img: ProductImage, idx: number) => img.primary = idx === i);
  }

  /**
   * Handle a file picked from the per-row file input. Previews the chosen
   * file locally, then POSTs to the backend which resizes to the configured
   * byte target and uploads to Cloudinary. On success, the returned URL is
   * written into the row's URL field; the existing JSON save flow then
   * persists it via the standard product create/update endpoint.
   */
  onImageFileSelected(ev: Event, i: number) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    // Client-side guards (backend re-validates).
    if (!file.type || !file.type.startsWith('image/')) {
      this.formError = 'Please choose an image file (JPEG, PNG, or WEBP)';
      input.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.formError = 'Image must be under 5MB';
      input.value = '';
      return;
    }

    const img = this.form.images[i];
    img.uploadError = '';
    img.uploading = true;
    img.previewUrl = undefined;

    // Local preview via FileReader while the upload is in flight.
    const reader = new FileReader();
    reader.onload = () => {
      img.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);

    this.uploadService.uploadImage(file).subscribe({
      next: (res) => {
        img.uploading = false;
        img.previewUrl = undefined;
        img.url = res.data?.url || '';
        input.value = ''; // allow re-selecting the same file later
      },
      error: (err) => {
        img.uploading = false;
        img.uploadError = err.error?.message || 'Upload failed';
        input.value = '';
      }
    });
  }

  /** Initialise per-row upload state when adding a new image row. */
  private newImageRowState(): any {
    return {
      url: '',
      color: '',
      size: '',
      primary: false,
      sortOrder: this.form.images.length,
      previewUrl: undefined,
      uploading: false,
      uploadError: ''
    };
  }

  /**
   * Ensure all image rows have the upload-state fields the template depends
   * on. Used when loading an existing product (rows may lack these.
   */
  private ensureImageRowState(rows: any[]): any[] {
    return rows.map(r => ({
      url: r.url || '',
      color: r.color || '',
      size: r.size || '',
      primary: !!r.primary,
      sortOrder: r.sortOrder || 0,
      previewUrl: undefined,
      uploading: false,
      uploadError: ''
    }));
  }

  resolveParentFromCategory(categoryId: number | null) {
    if (!categoryId) {
      this.formParentId = null;
      this.formSubcategories = [];
      return;
    }
    const flat = this.categories.find(x => Number(x.id) === Number(categoryId));
    if (flat?.parentId) {
      this.formParentId = Number(flat.parentId);
      const root = this.rootCategories.find(c => Number(c.id) === this.formParentId);
      this.formSubcategories = root?.children || [];
    } else {
      // Product linked to a root category
      this.formParentId = Number(categoryId);
      const root = this.rootCategories.find(c => Number(c.id) === this.formParentId);
      this.formSubcategories = root?.children || [];
    }
  }

  onCategoryChange(_id: any) {
    const cat = this.categories.find(x => Number(x.id) === Number(this.form.categoryId))
      || this.formSubcategories.find(x => Number(x.id) === Number(this.form.categoryId));
    const guide = cat?.sizeGuide || null;
    const name = cat?.name || this.categoryName;
    this.sizeOptions = sizesForGuide(guide, name);
    this.colorOptions = colorsForCategory(name);
    this.bulkSizes = [];
    this.bulkColors = [];
  }

  toggleFeature(f: string) {
    if (this.selectedFeatures.includes(f)) {
      this.selectedFeatures = this.selectedFeatures.filter(x => x !== f);
    } else {
      this.selectedFeatures = [...this.selectedFeatures, f];
    }
    this.form.features = this.selectedFeatures.join(', ');
  }

  addVariantRow() {
    const size = this.sizeOptions[0] || '';
    const color = this.colorOptions[0] || '';
    this.form.variants = [...this.form.variants, {
      size, color, stock: this.bulkStock || 0, price: null, sku: '', active: true
    }];
  }

  /** Create size × color matrix; skip duplicates already in the table */
  generateVariants() {
    if (!this.bulkSizes?.length || !this.bulkColors?.length) {
      this.formError = 'Select at least one size and one color to generate variants';
      return;
    }
    this.formError = '';
    const existing = new Set(
      (this.form.variants || []).map((v: any) =>
        `${(v.size || '').toLowerCase()}|${(v.color || '').toLowerCase()}`)
    );
    const next = [...(this.form.variants || [])];
    for (const size of this.bulkSizes) {
      for (const color of this.bulkColors) {
        const key = `${size.toLowerCase()}|${color.toLowerCase()}`;
        if (existing.has(key)) continue;
        existing.add(key);
        next.push({
          size, color,
          stock: Number(this.bulkStock) || 0,
          price: null, sku: '', active: true
        });
      }
    }
    this.form.variants = next;
  }

  removeVariantRow(i: number) {
    this.form.variants = this.form.variants.filter((_: any, idx: number) => idx !== i);
  }

  edit(p: Product) {
    this.formError = '';
    this.formSuccess = '';
    this.showForm = true;
    this.editing = p;
    // Load full product (list view may omit images/variants)
    this.productService.getProduct(Number(p.id)).subscribe({
      next: res => {
        const full = res.data || p;
        this.editing = full;
        const images = (full.images && full.images.length)
          ? this.ensureImageRowState(full.images.map(img => ({
              url: img.url,
              color: img.color || '',
              size: img.size || '',
              primary: !!img.primary,
              sortOrder: img.sortOrder || 0
            })))
          : [this.firstImageRow()];
        this.form = {
          name: full.name,
          description: full.description || '',
          price: Number(full.price),
          originalPrice: full.originalPrice != null ? Number(full.originalPrice) : null,
          stock: Number(full.stock) || 0,
          brand: full.brand || 'Leo Wear',
          material: full.material || '',
          features: full.features || '',
          categoryId: full.categoryId ?? null,
          images,
          variants: (full.variants || []).map(v => ({
            size: v.size,
            color: v.color,
            stock: Number(v.stock) || 0,
            price: v.price != null ? Number(v.price) : null,
            sku: v.sku || '',
            active: v.active !== false
          }))
        };
        this.selectedFeatures = (full.features || '').split(',').map((s: string) => s.trim()).filter(Boolean);
        this.resolveParentFromCategory(this.form.categoryId);
        this.onCategoryChange(this.form.categoryId);
      },
      error: () => {
        // Fallback to list row data
        const images = (p.images && p.images.length)
          ? this.ensureImageRowState(p.images.map(img => ({ ...img })))
          : [this.firstImageRow()];
        this.form = {
          name: p.name,
          description: p.description,
          price: Number(p.price),
          originalPrice: p.originalPrice != null ? Number(p.originalPrice) : null,
          stock: Number(p.stock) || 0,
          brand: p.brand,
          categoryId: p.categoryId,
          images,
          variants: (p.variants || []).map(v => ({ ...v }))
        };
      }
    });
  }

  saveProduct() {
    this.formError = '';
    this.formSuccess = '';
    if (!this.form.name?.trim()) {
      this.formError = 'Product name is required';
      return;
    }
    if (this.form.price == null || Number(this.form.price) < 0.01) {
      this.formError = 'Enter a valid price (min ₹0.01)';
      return;
    }

    this.saving = true;
    const payload: any = {
      name: String(this.form.name).trim(),
      description: this.form.description || '',
      price: Number(this.form.price),
      originalPrice: this.form.originalPrice != null && String(this.form.originalPrice).trim() !== ''
        ? Number(this.form.originalPrice) : null,
      stock: Number(this.form.stock) || 0,
      brand: this.form.brand || 'Leo Wear',
      material: this.form.material || '',
      features: this.selectedFeatures.join(', ') || this.form.features || '',
      categoryId: this.form.categoryId != null ? Number(this.form.categoryId) : null,
      active: true,
      imageList: (this.form.images || [])
        .filter((img: ProductImage) => img.url && String(img.url).trim())
        .map((img: ProductImage, i: number) => ({
          url: String(img.url).trim(),
          color: img.color ? String(img.color).trim() : null,
          size: img.size ? String(img.size).trim() : null,
          primary: !!img.primary,
          sortOrder: i
        })),
      variants: (this.form.variants || [])
        .filter((v: ProductVariant) => v.size && v.color)
        .map((v: ProductVariant) => ({
          size: String(v.size).trim(),
          color: String(v.color).trim(),
          stock: Number(v.stock) || 0,
          price: v.price != null && String(v.price).trim() !== '' ? Number(v.price) : null,
          sku: v.sku || null,
          active: true
        }))
    };

    const id = this.editing?.id != null ? Number(this.editing.id) : null;
    const obs = id
      ? this.productService.updateProduct(id, payload)
      : this.productService.createProduct(payload);

    obs.subscribe({
      next: (res) => {
        this.saving = false;
        this.formSuccess = res?.message || (id ? 'Product updated' : 'Product created');
        this.showForm = false;
        this.editing = null;
        this.resetForm();
        this.load();
      },
      error: (err) => {
        this.saving = false;
        const data = err.error?.data;
        if (data && typeof data === 'object') {
          this.formError = Object.values(data).join(' · ');
        } else {
          this.formError = err.error?.message || 'Failed to save product';
        }
      }
    });
  }

  deactivate(id: number) {
    if (!confirm('Deactivate this product? Customers will no longer see it.')) return;
    this.productService.setProductActive(id, false).subscribe({
      next: () => this.load(),
      error: (err) => alert(err.error?.message || 'Failed to deactivate product')
    });
  }

  reactivate(id: number) {
    this.productService.setProductActive(id, true).subscribe({
      next: () => this.load(),
      error: (err) => alert(err.error?.message || 'Failed to reactivate product')
    });
  }
}
