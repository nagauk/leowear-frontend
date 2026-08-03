import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

export interface SeoPage {
  /** Browser tab + og:title + twitter:title. Required. */
  title: string;
  /** meta description + og:description + twitter:description (max ~155 chars recommended). */
  description: string;
  /** Absolute image URL used by og:image + twitter:image. Falls back to default OG image. */
  image?: string;
  /** Comma-separated keywords. Optional. */
  keywords?: string;
  /** og:type. Defaults to 'website'. */
  type?: 'website' | 'article' | 'product';
  /** Site-relative path (e.g. '/products/42'). If omitted, canonical/og:url fall back to site root. */
  canonicalPath?: string;
  /** Adds <meta name="robots" content="noindex, nofollow">. Use for authenticated/admin pages. */
  noindex?: boolean;
  /** Primary JSON-LD structured data object. Replaces any previous primary blob. */
  jsonLd?: Record<string, any>;
}

export const DEFAULT_OG_IMAGE = '/assets/og-default.png';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private siteUrl = environment.siteUrl || '';

  /**
   * Replace per-route metadata in one call. Always overwrites — never stacks —
   * so navigating between product details keeps the head clean.
   */
  setPage(page: SeoPage): void {
    const fullTitle = this.brandTitle(page.title);
    const url = this.canonicalUrl(page.canonicalPath);
    const image = page.image || DEFAULT_OG_IMAGE;
    const desc = page.description;
    const ogType = page.type || 'website';

    this.title.setTitle(fullTitle);

    const tagUpdates: Array<{ name?: string; property?: string; content: string }> = [
      { name: 'description', content: desc },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: ogType },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: image }
    ];
    this.upsertTags(tagUpdates);

    if (page.keywords) {
      this.upsertTags([{ name: 'keywords', content: page.keywords }]);
    }

    if (page.noindex) {
      this.upsertTags([{ name: 'robots', content: 'noindex, nofollow' }]);
    } else {
      this.upsertTags([{ name: 'robots', content: 'index, follow' }]);
    }

    this.setCanonical(url);
    this.setPrimaryJsonLd(page.jsonLd);
  }

  /** Allow another part of the app (admin) to toggle noindex independently. */
  setNoindex(noindex: boolean): void {
    this.upsertTags([{ name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' }]);
  }

  /**
   * Stack an additional JSON-LD blob (e.g. BreadcrumbList next to a Product).
   * Subsequent calls with the same `id` replace that block, never duplicate.
   */
  addJsonLd(id: string, data: Record<string, any>): void {
    this.upsertJsonLd(`${id}-${data['@type'] ?? 'data'}`, data);
  }

  /** Reset to bare defaults — handy on logout / route to landing. */
  reset(): void {
    this.setPage({
      title: 'Leo Wear — Premium Fashion',
      description: 'Premium clothing for men, women, and kids. Shop the latest trends at Leo Wear.',
      canonicalPath: '/'
    });
  }

  // ---------- helpers ----------

  private brandTitle(t: string): string {
    return /\bleo\s*wear\b/i.test(t) ? t : `${t} – Leo Wear`;
  }

  private canonicalUrl(path?: string): string {
    const base = (this.siteUrl || '').replace(/\/$/, '');
    const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
    return `${base}${cleanPath}`;
  }

  private upsertTags(tags: Array<{ name?: string; property?: string; content: string }>): void {
    for (const t of tags) {
      if (t.name) {
        this.meta.updateTag({ name: t.name, content: t.content });
      } else if (t.property) {
        this.meta.updateTag({ property: t.property, content: t.content });
      }
    }
  }

  private setCanonical(url: string): void {
    if (typeof document === 'undefined') return;
    const head = document.head;
    head.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    head.appendChild(link);
  }

  private setPrimaryJsonLd(data?: Record<string, any>): void {
    this.upsertJsonLd('primary', data);
  }

  private upsertJsonLd(id: string, data?: Record<string, any>): void {
    if (typeof document === 'undefined') return;
    const elId = `cs-jsonld-${id}`;
    const existing = document.getElementById(elId);
    if (!data) {
      existing?.remove();
      return;
    }
    const html = JSON.stringify(data).replace(/</g, '\\u003c');
    if (existing) {
      existing.textContent = html;
      return;
    }
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = elId;
    script.text = html;
    document.head.appendChild(script);
  }
}
