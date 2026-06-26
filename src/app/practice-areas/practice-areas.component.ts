import { Component, OnInit } from '@angular/core';

import { practiceAreas, PracticeArea } from './practice-areas.data';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss']
})
export class PracticeAreasComponent implements OnInit {

  public areas: PracticeArea[] = practiceAreas;
  public selected = 0;

  constructor() { }

  ngOnInit() {
  }

  select(index: number) {
    this.selected = index;
  }

}
