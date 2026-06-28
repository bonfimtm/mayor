import { Component, OnInit, inject } from '@angular/core';

import { SeoService } from '../seo.service';
import { ParallaxComponent } from '../parallax/parallax.component';
import { AboutComponent } from '../about/about.component';
import { TeamComponent } from '../team/team.component';
import { PracticeAreasComponent } from '../practice-areas/practice-areas.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { FaqComponent } from '../faq/faq.component';
import { HistoryComponent } from '../history/history.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home-page',
  imports: [
    ParallaxComponent,
    AboutComponent,
    TeamComponent,
    PracticeAreasComponent,
    CarouselComponent,
    FaqComponent,
    HistoryComponent,
    ContactComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Dr. Ney Gutemberg Maia C. Bonfim | Advogado em Direito Eleitoral e Público',
      description: 'Advogado especialista em Direito Eleitoral, Público, Municipal e Penal. ' +
        'Consultoria e assessoria jurídica em Filadélfia e Lauro de Freitas - BA. OAB/BA 40.528.',
      path: '/',
    });
  }

}
