import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  collapse() {
    $('#appNavbar').removeClass('show');
  }

}
