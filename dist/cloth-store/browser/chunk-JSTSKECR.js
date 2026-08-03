import {
  Meta,
  Title,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-Z4SLSDIZ.js";

// src/app/core/services/seo.service.ts
var DEFAULT_OG_IMAGE = "/assets/og-default.png";
var SeoService = class _SeoService {
  constructor() {
    this.title = inject(Title);
    this.meta = inject(Meta);
    this.siteUrl = environment.siteUrl || "";
  }
  /**
   * Replace per-route metadata in one call. Always overwrites — never stacks —
   * so navigating between product details keeps the head clean.
   */
  setPage(page) {
    const fullTitle = this.brandTitle(page.title);
    const url = this.canonicalUrl(page.canonicalPath);
    const image = page.image || DEFAULT_OG_IMAGE;
    const desc = page.description;
    const ogType = page.type || "website";
    this.title.setTitle(fullTitle);
    const tagUpdates = [
      { name: "description", content: desc },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: desc },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: ogType },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: image }
    ];
    this.upsertTags(tagUpdates);
    if (page.keywords) {
      this.upsertTags([{ name: "keywords", content: page.keywords }]);
    }
    if (page.noindex) {
      this.upsertTags([{ name: "robots", content: "noindex, nofollow" }]);
    } else {
      this.upsertTags([{ name: "robots", content: "index, follow" }]);
    }
    this.setCanonical(url);
    this.setPrimaryJsonLd(page.jsonLd);
  }
  /** Allow another part of the app (admin) to toggle noindex independently. */
  setNoindex(noindex) {
    this.upsertTags([{ name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" }]);
  }
  /**
   * Stack an additional JSON-LD blob (e.g. BreadcrumbList next to a Product).
   * Subsequent calls with the same `id` replace that block, never duplicate.
   */
  addJsonLd(id, data) {
    this.upsertJsonLd(`${id}-${data["@type"] ?? "data"}`, data);
  }
  /** Reset to bare defaults — handy on logout / route to landing. */
  reset() {
    this.setPage({
      title: "Leo Wear \u2014 Premium Fashion",
      description: "Premium clothing for men, women, and kids. Shop the latest trends at Leo Wear.",
      canonicalPath: "/"
    });
  }
  // ---------- helpers ----------
  brandTitle(t) {
    return /\bleo\s*wear\b/i.test(t) ? t : `${t} \u2013 Leo Wear`;
  }
  canonicalUrl(path) {
    const base = (this.siteUrl || "").replace(/\/$/, "");
    const cleanPath = path ? path.startsWith("/") ? path : `/${path}` : "";
    return `${base}${cleanPath}`;
  }
  upsertTags(tags) {
    for (const t of tags) {
      if (t.name) {
        this.meta.updateTag({ name: t.name, content: t.content });
      } else if (t.property) {
        this.meta.updateTag({ property: t.property, content: t.content });
      }
    }
  }
  setCanonical(url) {
    if (typeof document === "undefined")
      return;
    const head = document.head;
    head.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", url);
    head.appendChild(link);
  }
  setPrimaryJsonLd(data) {
    this.upsertJsonLd("primary", data);
  }
  upsertJsonLd(id, data) {
    if (typeof document === "undefined")
      return;
    const elId = `cs-jsonld-${id}`;
    const existing = document.getElementById(elId);
    if (!data) {
      existing?.remove();
      return;
    }
    const html = JSON.stringify(data).replace(/</g, "\\u003c");
    if (existing) {
      existing.textContent = html;
      return;
    }
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = elId;
    script.text = html;
    document.head.appendChild(script);
  }
  static {
    this.\u0275fac = function SeoService_Factory(t) {
      return new (t || _SeoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};

export {
  SeoService
};
//# sourceMappingURL=chunk-JSTSKECR.js.map
