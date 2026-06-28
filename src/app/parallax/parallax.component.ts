import { Component, OnInit, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import $ from 'jquery';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

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
    if (verticalOffset < 85) {
      this.showScrollLink = true;
    } else {
      this.showScrollLink = false;
    }
  }

  scrollSmoothly(target: string) {
    $(target).each((idx, elm) => {
      $('html, body').animate({
        scrollTop: elm.offsetTop - 76
      }, 500);
    });
  }

}
