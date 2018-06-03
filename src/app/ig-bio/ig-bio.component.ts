import { Component, OnInit } from '@angular/core';
import { IgService } from '../ig.service';

@Component({
  selector: 'app-ig-bio',
  templateUrl: './ig-bio.component.html',
  styleUrls: ['./ig-bio.component.css']
})
export class IgBioComponent implements OnInit {

  bio: any;

  constructor(private igService: IgService) {
  }

  ngOnInit() {
    this.getBio();
  }

  getBio() {
    this.igService.getBio()
      .subscribe(result => this.bio = result);
  }

}
