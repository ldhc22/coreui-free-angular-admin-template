import {Component, OnInit} from '@angular/core';
import {CommentModel} from '../../model/comment.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {VersionControlModel} from '../../model/versionControl.model';
import {ProjectService} from '../../services/project.service';
import {QuestionLadderModel} from '../../model/discover/questionLadder.model';

@Component({
  templateUrl: './question-ladder.component.html'
})
export class QuestionLadderComponent implements OnInit {

  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;
  public elements: VersionControlModel<QuestionLadderModel>[];
  public selectedElement: VersionControlModel<QuestionLadderModel>;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.initComments();
    this.initElements();
  }
  initElements() {
    this.elements = this.projectService.getQuestionLadder(sessionStorage.getItem('projectId'));
    if (this.elements.length === 0) {
      const q = new QuestionLadderModel();
      q.how = {
        did: '',
        will: '',
        would: '',
        can: '',
        is: '',
        might: ''
      };
      q.what = {
        did: '',
        will: '',
        would: '',
        can: '',
        is: '',
        might: ''
      };
      q.when = {
        did: '',
        will: '',
        would: '',
        can: '',
        is: '',
        might: ''
      };
      q.where = {
        did: '',
        will: '',
        would: '',
        can: '',
        is: '',
        might: ''
      };
      q.who = {
        did: '',
        will: '',
        would: '',
        can: '',
        is: '',
        might: ''
      };
      q.why = {
        did: '',
        will: '',
        would: '',
        can: '',
        is: '',
        might: ''
      };
      const qWrapper = new VersionControlModel<QuestionLadderModel>();
      qWrapper.date = new Date();
      qWrapper.element = q;
      qWrapper.version = 1;
      this.elements.push(qWrapper);
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
