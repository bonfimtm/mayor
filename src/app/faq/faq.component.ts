import { Component, OnInit } from '@angular/core';

import { faq } from './faq.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faq = faq;

  constructor() {
  }

  ngOnInit() {
  }

}
