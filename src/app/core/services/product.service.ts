import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Page, Product, Category } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(page = 0, size = 12, categoryId?: number, search?: string): Observable<ApiResponse<Page<Product>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (categoryId) params = params.set('categoryId', categoryId);
    if (search) params = params.set('search', search);
    return this.http.get<ApiResponse<Page<Product>>>(`${environment.apiUrl}/products`, { params });
  }

  getProduct(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${environment.apiUrl}/products/${id}`);
  }

  getCategories(): Observable<ApiResponse<Category[]>> {
    return this.http.get<ApiResponse<Category[]>>(`${environment.apiUrl}/categories`);
  }

  getCategoryTree(): Observable<ApiResponse<Category[]>> {
    return this.http.get<ApiResponse<Category[]>>(`${environment.apiUrl}/categories/tree`);
  }

  getBestsellers(limit = 8): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(`${environment.apiUrl}/products/bestsellers`, {
      params: { limit }
    });
  }

  // Admin
  getAllProductsAdmin(page = 0, size = 10): Observable<ApiResponse<Page<Product>>> {
    return this.http.get<ApiResponse<Page<Product>>>(`${environment.apiUrl}/admin/products`, {
      params: { page, size }
    });
  }

  createProduct(product: Partial<Product>): Observable<ApiResponse<Product>> {
    return this.http.post<ApiResponse<Product>>(`${environment.apiUrl}/admin/products`, product);
  }

  updateProduct(id: number, product: Partial<Product>): Observable<ApiResponse<Product>> {
    return this.http.put<ApiResponse<Product>>(`${environment.apiUrl}/admin/products/${id}`, product);
  }

  /**
   * Staff-only flag flip (PATCH /admin/products/{id}/active). Used to
   * activate or deactivate a product without going through the full edit
   * endpoint, so the reactivation path is easy to audit.
   */
  setProductActive(id: number, active: boolean): Observable<ApiResponse<Product>> {
    return this.http.patch<ApiResponse<Product>>(
      `${environment.apiUrl}/admin/products/${id}/active`,
      null,
      { params: { active } }
    );
  }

  updateStock(id: number, stock: number): Observable<ApiResponse<Product>> {
    return this.http.patch<ApiResponse<Product>>(`${environment.apiUrl}/admin/products/${id}/stock`, null, {
      params: { stock }
    });
  }

  createCategory(cat: Partial<Category>): Observable<ApiResponse<Category>> {
    return this.http.post<ApiResponse<Category>>(`${environment.apiUrl}/admin/categories`, cat);
  }
}
