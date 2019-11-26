import {Component, OnInit} from '@angular/core';
import {CommentModel} from '../../model/comment.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {VersionControlModel} from '../../model/versionControl.model';
import {VoiceCustomerModel} from '../../model/discover/voiceCustomer.model';
import {ProjectService} from '../../services/project.service';

@Component({
  templateUrl: './voice-customer.component.html'
})
export class VoiceCustomerComponent implements OnInit {

  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;
  public elements: VersionControlModel<VoiceCustomerModel>[];
  public selectedElement: VersionControlModel<VoiceCustomerModel>;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.initComments();
    this.initElements();
  }

  initElements() {
    this.elements = this.projectService.getVoiceCustomer(sessionStorage.getItem('projectId'));
    if (this.elements.length === 0) {
      const voc = new VoiceCustomerModel();
      voc.comments = ['', '', '', '', '', ''];
      voc.understanding = ['', '', '', '', '', ''];
      voc.requirements = ['', '', '', '', '', ''];
      const vocWrapper = new VersionControlModel<VoiceCustomerModel>();
      vocWrapper.element = voc;
      vocWrapper.version = 1;
      vocWrapper.date = new Date();
      this.elements.push(vocWrapper);
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
