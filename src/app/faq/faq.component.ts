import { Component, OnInit, inject } from '@angular/core';

import { SeoService } from '../seo.service';
import { faq } from './faq.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  private seo = inject(SeoService);

  public faq = faq;

  ngOnInit(): void {
    this.seo.setJsonLd('faq-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faq.flatMap((section) =>
        section.content.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
          },
        })),
      ),
    });
  }

}
