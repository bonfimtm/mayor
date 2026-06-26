import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear = new Date().getFullYear();
  public showScrollLink = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit() {
    this.updateScrollLinkVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateScrollLinkVisibility();
  }

  updateScrollLinkVisibility() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 200) {
      this.showScrollLink = true;
    } else {
      this.showScrollLink = false;
    }
  }

  scrollSmoothly(target: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    import('jquery').then(({ default: $ }) => {
      $(target).each((idx, elm) => {
        $('html, body').animate({
          scrollTop: elm.offsetTop - 100
        }, 500);
      });
    });
  }

}
