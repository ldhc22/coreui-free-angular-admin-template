import {Component, OnInit} from '@angular/core';
import {CommentModel} from '../../model/comment.model';
import {TeamMemberModel} from '../../model/teamMember.model';

@Component({
  templateUrl: './voice-customer.component.html'
})
export class VoiceCustomerComponent implements OnInit {

  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;

  ngOnInit(): void {
    this.initComments();
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
