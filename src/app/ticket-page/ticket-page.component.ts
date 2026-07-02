import { Component, OnInit, inject } from '@angular/core';

import { SeoService } from '../seo.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { TrackWhatsappDirective } from '../track-whatsapp.directive';

@Component({
  selector: 'app-ticket-page',
  imports: [ContactFormComponent, TrackWhatsappDirective],
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Recorrer Infrações de Trânsito | Dr. Ney Gutemberg Advocacia',
      description: 'Recorra de multas e infrações de trânsito de forma 100% legal. ' +
        'Evite a perda de pontos, a suspensão e a cassação da CNH. Faça uma avaliação gratuita.',
      path: '/recorrer-infracoes-de-transito',
    });
  }

}
