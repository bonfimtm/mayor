import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import $ from 'jquery';

import { TrackWhatsappDirective } from '../track-whatsapp.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TrackWhatsappDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  collapse() {
    $('#appNavbar').removeClass('show');
  }

}
