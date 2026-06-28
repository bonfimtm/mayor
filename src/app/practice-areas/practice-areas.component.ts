import { Component } from '@angular/core';

import { practiceAreas, PracticeArea } from './practice-areas.data';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss']
})
export class PracticeAreasComponent {

  public areas: PracticeArea[] = practiceAreas;
  public selected = 0;

  select(index: number) {
    this.selected = index;
  }

}
