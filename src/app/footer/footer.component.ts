import { Component, OnInit, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  public currentYear = new Date().getFullYear();
  public showScrollLink = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScrollLinkVisibility();
    }
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
