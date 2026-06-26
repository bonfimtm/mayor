import { Component, OnInit } from '@angular/core';

import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.update({
      title: 'Dr. Ney Gutemberg Maia C. Bonfim | Advogado em Direito Eleitoral e Público',
      description: 'Advogado especialista em Direito Eleitoral, Público, Municipal e Penal. ' +
        'Consultoria e assessoria jurídica em Filadélfia e Lauro de Freitas - BA. OAB/BA 40.528.',
      path: '/',
    });
  }

}
