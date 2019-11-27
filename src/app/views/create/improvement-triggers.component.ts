import {Component, OnInit} from '@angular/core';
import {VersionControlModel} from '../../model/versionControl.model';
import {ImprovementTriggerModel} from '../../model/create/improvementTrigger.model';
import {ProjectService} from '../../services/project.service';
import {TeamMemberModel} from '../../model/teamMember.model';
import {CommentModel} from '../../model/comment.model';

@Component({
  templateUrl: './improvement-triggers.component.html'
})
export class ImprovementTriggersComponent implements OnInit{

  public elements: VersionControlModel<ImprovementTriggerModel>[];
  public selectedElement: VersionControlModel<ImprovementTriggerModel>;

  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;

  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    this.initElements();
  }

  initElements() {
    this.elements = this.projectService.getImprovementTriggers(sessionStorage.getItem('projectId'));
    if (this.elements.length === 0) {
      const impr = new ImprovementTriggerModel();
      impr.adapt = '';
      impr.anotherUse = '';
      impr.combine = '';
      impr.eliminate = '';
      impr.modify = '';
      impr.reverse = '';
      impr.substitute = '';
      const imprWrapper = new VersionControlModel<ImprovementTriggerModel>();
      imprWrapper.element = impr;
      imprWrapper.date = new Date();
      imprWrapper.version = 1;
      this.elements.push(imprWrapper);
    }
    this.selectedElement = this.elements[0];
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  addComment() {
    const team2 = new TeamMemberModel();
    team2.name = 'Luis Daniel H.';
    this.commentToAdd.date = new Date();
    this.commentToAdd.user = team2;
    this.comments.push(Object.assign({}, this.commentToAdd));
    this.commentToAdd = new CommentModel();
  }
}
