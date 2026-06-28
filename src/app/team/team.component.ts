import { Component } from '@angular/core';

import { teamMembers, TeamMember } from './team.data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  public members: TeamMember[] = teamMembers;

}
