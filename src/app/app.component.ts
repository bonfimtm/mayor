import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    function scrollSmoothly(target: string) {
      const segments = target.split('/');
      const targetId = segments[segments.length - 1];
      $(targetId).each((idx, elm) => {
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
