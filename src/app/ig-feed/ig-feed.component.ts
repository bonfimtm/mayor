import { Component, OnInit } from '@angular/core';
import { IgService } from '../ig.service';

@Component({
  selector: 'app-ig-feed',
  templateUrl: './ig-feed.component.html',
  styleUrls: ['./ig-feed.component.css']
})
export class IgFeedComponent implements OnInit {

  mediaRecent: any;

  constructor(private igService: IgService) {
  }

  ngOnInit() {
    this.getMediaRecent();
  }

  getMediaRecent() {
    this.igService.getMediaRecent()
      .subscribe(result => this.mediaRecent = result);
  }
}
