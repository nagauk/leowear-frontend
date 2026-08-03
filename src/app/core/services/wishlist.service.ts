import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/models';

export interface WishlistItem {
  productId: number;
  name: string;
  brand?: string;
  price: number;
  imageUrl?: string;
  addedAt: number;
}

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly KEY = 'cs_wishlist';
  private itemsSignal = signal<WishlistItem[]>(this.load());

  items = this.itemsSignal.asReadonly();
  count = computed(() => this.itemsSignal().length);

  isLoved(productId: number): boolean {
    return this.itemsSignal().some(i => i.productId === Number(productId));
  }

  toggle(product: Product): boolean {
    const id = Number(product.id);
    if (this.isLoved(id)) {
      this.remove(id);
      return false;
    }
    const next: WishlistItem = {
      productId: id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      addedAt: Date.now()
    };
    this.save([next, ...this.itemsSignal().filter(i => i.productId !== id)]);
    return true;
  }

  remove(productId: number): void {
    this.save(this.itemsSignal().filter(i => i.productId !== Number(productId)));
  }

  clear(): void {
    this.save([]);
  }

  private save(items: WishlistItem[]): void {
    this.itemsSignal.set(items);
    localStorage.setItem(this.KEY, JSON.stringify(items));
  }

  private load(): WishlistItem[] {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
