import {Component, OnInit} from '@angular/core';
import {CommentModel} from '../../model/comment.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {VersionControlModel} from '../../model/versionControl.model';
import {PrototypingModel} from '../../model/build/prototyping.model';

@Component(
  {
    templateUrl: './mid-fidelity.component.html'
  }
)
export class MidFidelityComponent implements OnInit {

  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;

  public elements: VersionControlModel<PrototypingModel>[];
  public selectedElement: VersionControlModel<PrototypingModel>;

  ngOnInit(): void {
    this.elements = [];
    const ele = new PrototypingModel();
    ele.title = 'Prototipo 1';
    ele.date = new Date();
    ele.description = 'Prototipo  1';
    const eleWrapper = new VersionControlModel<PrototypingModel>();
    eleWrapper.element = ele;
    eleWrapper.version = 1;
    eleWrapper.date = new Date();
    this.elements.push(eleWrapper);
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
