import { Component, OnInit, HostListener } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public showScrollLink = false;

  constructor() {
  }

  ngOnInit() {
    this.updateScrollLinkVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateScrollLinkVisibility();
  }

  updateScrollLinkVisibility() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 200) {
      this.showScrollLink = true;
    } else {
      this.showScrollLink = false;
    }
  }

  scrollSmoothly(target: string) {
    $(target).each((idx, elm) => {
      $('html, body').animate({
        scrollTop: elm.offsetTop - 100
      }, 500);
    });
  }

}
