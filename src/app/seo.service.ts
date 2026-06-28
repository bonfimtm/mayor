import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoData {
  /** Page <title>. */
  title: string;
  /** Meta description / social description. */
  description: string;
  /** Route path starting with '/' (e.g. '/' or '/recorrer-infracoes-de-transito'). */
  path: string;
  /** Optional absolute-from-root image path for social previews. */
  image?: string;
}

/**
 * Centralizes per-route SEO metadata: <title>, description, canonical link and
 * Open Graph / Twitter Card tags. Components call update() in ngOnInit so each
 * route exposes distinct, crawler-friendly metadata even in a single-page app.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://neygutemberg.com.br';
  private readonly siteName = 'Ney Gutemberg Maia C. Bonfim';
  private readonly defaultImage = '/assets/images/photo1.jpg';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  update(data: SeoData): void {
    const url = this.baseUrl + (data.path === '/' ? '' : data.path);
    const image = this.baseUrl + (data.image || this.defaultImage);

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
