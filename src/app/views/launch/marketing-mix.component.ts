import {Component} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {ProjectModel} from '../../model/project.model';
import {TeamMemberModel} from '../../model/teamMember.model';

@Component(
  {
    templateUrl: './marketing-mix.component.html'
  }
)
export class MarketingMixComponent {
  constructor(private projectService: ProjectService) {
  }

}
