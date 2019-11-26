import {Component, OnInit} from '@angular/core';
import {CommentModel} from '../../model/comment.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {ProjectService} from '../../services/project.service';
import {VersionControlModel} from '../../model/versionControl.model';
import {InsightsModel} from '../../model/connect/insights.model';

@Component({
  templateUrl: './insights.component.html'
})
export class InsightsComponent implements OnInit{
  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;
  public elements: VersionControlModel<InsightsModel>[];
  public selectedElement: VersionControlModel<InsightsModel>;
  public actionFlag: boolean = false;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.initComments();
    this.initElements();
  }

  initElements() {
    this.elements = this.projectService.getInsights(sessionStorage.getItem('projectId'));
    if (this.elements.length === 0) {
      const ins = new InsightsModel();
      ins.insights = [];
      ins.insights.push({text: '', action: ''});
      const insWrapper = new VersionControlModel<InsightsModel>();
      insWrapper.element = ins;
      insWrapper.version = 1;
      insWrapper.date = new Date();
      this.elements.push(insWrapper);
    } else {
      this.actionFlag = true;
    }
    this.selectedElement = this.elements[0];
  }

  addInsight() {
    this.selectedElement.element.insights.push({text: '', action: ''});
  }

  removeInsight(index) {
    this.selectedElement.element.insights.splice(index, 1);
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

  initComments() {
    const team1 = new TeamMemberModel();
    team1.name = 'Marcelo T.';
    const team2 = new TeamMemberModel();
    team2.name = 'Luis Daniel H.';
    const c1 = new CommentModel();
    c1.user = team1;
    c1.date = new Date();
    c1.body = 'Me parece que el avance está bien. Adelante con la siguiente actividad';
    const c2 = new CommentModel();
    c2.user = team1;
    c2.date = new Date();
    c2.body = 'Me parece que el avance está bien. Adelante con la siguiente actividad';
    const c3 = new CommentModel();
    c3.user = team1;
    c3.date = new Date();
    c3.body = 'Me parece que el avance está bien. Adelante con la siguiente actividad';
    this.comments.push(c1);
    this.comments.push(c2);
    this.comments.push(c3);
  }
}
