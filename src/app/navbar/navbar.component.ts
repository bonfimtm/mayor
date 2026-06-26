import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit() {
  }

  collapse() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    import('jquery').then(({ default: $ }) => {
      $('#appNavbar').removeClass('show');
    });
  }

}
