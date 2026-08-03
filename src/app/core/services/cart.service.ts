import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem, Product, ApiResponse } from '../models/models';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly CART_KEY = 'cs_cart';
  private itemsSignal = signal<CartItem[]>(this.load());
  private http = inject(HttpClient);

  items = this.itemsSignal.asReadonly();
  itemCount = computed(() => this.itemsSignal().reduce((s, i) => s + i.quantity, 0));
  total = computed(() => this.itemsSignal().reduce((s, i) => {
    const price = i.unitPrice ?? i.product?.price ?? 0;
    return s + price * i.quantity;
  }, 0));

  add(
    product: Product,
    quantity = 1,
    opts?: { variantId?: number; size?: string; color?: string; imageUrl?: string; unitPrice?: number; maxStock?: number }
  ): boolean {
    const productId = Number(product.id);
    const hasVariants = !!(product.variants && product.variants.length > 0)
      || !!(product.availableSizes && product.availableSizes.length)
      || !!(product.availableColors && product.availableColors.length);

    const variantId = opts?.variantId != null ? Number(opts.variantId) : undefined;
    const size = (opts?.size || '').trim() || undefined;
    const color = (opts?.color || '').trim() || undefined;

    // Products with size/color options must have both selected before cart
    if (hasVariants && (!size || !color)) {
      return false;
    }

    const items = [...this.itemsSignal()];
    const maxStock = opts?.maxStock ?? product.stock ?? 99;

    const existing = items.find(i =>
      Number(i.product.id) === productId &&
      (i.variantId != null ? Number(i.variantId) : null) === (variantId ?? null) &&
      (i.size || '') === (size || '') &&
      (i.color || '') === (color || '')
    );

    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, maxStock);
    } else {
      items.push({
        product: { ...product, id: productId },
        quantity: Math.min(quantity, maxStock),
        variantId,
        size,
        color,
        imageUrl: opts?.imageUrl || product.imageUrl,
        unitPrice: opts?.unitPrice ?? product.price
      });
    }
    this.save(items);
    return true;
  }

  updateQuantity(key: { productId: number; variantId?: number; size?: string; color?: string }, quantity: number): void {
    const items = this.itemsSignal().map(i => {
      if (this.matches(i, key)) {
        const max = i.product.variants?.find(v => Number(v.id) === Number(i.variantId))?.stock
          ?? i.product.stock
          ?? 99;
        return { ...i, quantity: Math.max(1, Math.min(quantity, max)) };
      }
      return i;
    });
    this.save(items);
  }

  remove(key: { productId: number; variantId?: number; size?: string; color?: string }): void {
    this.save(this.itemsSignal().filter(i => !this.matches(i, key)));
  }

  clear(): void {
    this.save([]);
  }

  /**
   * Drop cart lines whose product no longer exists (e.g. after H2 restart).
   * Returns list of removed product names/ids for UI message.
   */
  async validateAgainstServer(): Promise<string[]> {
    const items = this.itemsSignal();
    if (!items.length) return [];

    const removed: string[] = [];
    const valid: CartItem[] = [];

    for (const item of items) {
      const id = Number(item.product?.id);
      if (!id || Number.isNaN(id)) {
        removed.push('Invalid item');
        continue;
      }
      try {
        const res = await firstValueFrom(
          this.http.get<ApiResponse<Product>>(`${environment.apiUrl}/products/${id}`)
        );
        if (res?.success && res.data) {
          const p = res.data;
          const needsVariant = !!(p.variants && p.variants.length > 0)
            || !!(p.availableSizes && p.availableSizes.length)
            || !!(p.availableColors && p.availableColors.length);
          if (needsVariant && (!(item.size || '').trim() || !(item.color || '').trim())) {
            removed.push((item.product?.name || p.name || `Product #${id}`) + ' (select size & color)');
            continue;
          }
          valid.push({
            ...item,
            product: { ...p, id: Number(p.id) },
            variantId: item.variantId != null ? Number(item.variantId) : undefined,
            size: item.size,
            color: item.color
          });
        } else {
          removed.push(item.product?.name || `Product #${id}`);
        }
      } catch {
        removed.push(item.product?.name || `Product #${id}`);
      }
    }

    this.save(valid);
    return removed;
  }

  private matches(
    i: CartItem,
    key: { productId: number; variantId?: number; size?: string; color?: string }
  ): boolean {
    return Number(i.product.id) === Number(key.productId)
      && (i.variantId != null ? Number(i.variantId) : null) === (key.variantId != null ? Number(key.variantId) : null)
      && (i.size || '') === (key.size || '')
      && (i.color || '') === (key.color || '');
  }

  private save(items: CartItem[]): void {
    this.itemsSignal.set(items);
    localStorage.setItem(this.CART_KEY, JSON.stringify(items));
  }

  private load(): CartItem[] {
    try {
      const raw = localStorage.getItem(this.CART_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as CartItem[];
      return (parsed || []).map(i => ({
        ...i,
        product: i.product ? { ...i.product, id: Number(i.product.id) } : i.product,
        variantId: i.variantId != null ? Number(i.variantId) : undefined,
        quantity: Number(i.quantity) || 1
      })).filter(i => i.product && i.product.id);
    } catch {
      return [];
    }
  }
}
