import { Injectable, signal } from '@angular/core';
import { Product } from '../models/models';

export interface RecentProduct {
  productId: number;
  name: string;
  brand?: string;
  price: number;
  imageUrl?: string;
  viewedAt: number;
}

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private readonly SEARCH_KEY = 'cs_search_history';
  private readonly VIEW_KEY = 'cs_recent_views';
  private readonly MAX_SEARCH = 12;
  private readonly MAX_VIEWS = 12;

  private searchesSignal = signal<string[]>(this.loadSearches());
  private viewsSignal = signal<RecentProduct[]>(this.loadViews());

  searches = this.searchesSignal.asReadonly();
  recentViews = this.viewsSignal.asReadonly();

  addSearch(query: string): void {
    const q = (query || '').trim();
    if (!q || q.length < 2) return;
    const next = [q, ...this.searchesSignal().filter(s => s.toLowerCase() !== q.toLowerCase())]
      .slice(0, this.MAX_SEARCH);
    this.searchesSignal.set(next);
    localStorage.setItem(this.SEARCH_KEY, JSON.stringify(next));
  }

  removeSearch(query: string): void {
    const next = this.searchesSignal().filter(s => s !== query);
    this.searchesSignal.set(next);
    localStorage.setItem(this.SEARCH_KEY, JSON.stringify(next));
  }

  clearSearches(): void {
    this.searchesSignal.set([]);
    localStorage.removeItem(this.SEARCH_KEY);
  }

  addView(product: Product): void {
    if (!product?.id) return;
    const id = Number(product.id);
    const entry: RecentProduct = {
      productId: id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      viewedAt: Date.now()
    };
    const next = [entry, ...this.viewsSignal().filter(v => v.productId !== id)]
      .slice(0, this.MAX_VIEWS);
    this.viewsSignal.set(next);
    localStorage.setItem(this.VIEW_KEY, JSON.stringify(next));
  }

  clearViews(): void {
    this.viewsSignal.set([]);
    localStorage.removeItem(this.VIEW_KEY);
  }

  private loadSearches(): string[] {
    try {
      const raw = localStorage.getItem(this.SEARCH_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private loadViews(): RecentProduct[] {
    try {
      const raw = localStorage.getItem(this.VIEW_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
