import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    function scrollSmoothly(target: string) {
      $(target).each((idx, elm) => {
        $('html, body').animate({
          scrollTop: elm.offsetTop - 76
        }, 500);
      });
    }

    $('a.smooth-scroll').click(function (event) {
      event.preventDefault();
      scrollSmoothly($(event.target).attr('href'));
    });
  }

}
