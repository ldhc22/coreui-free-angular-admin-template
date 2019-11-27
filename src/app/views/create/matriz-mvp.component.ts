import {Component, OnInit} from '@angular/core';
import {VersionControlModel} from '../../model/versionControl.model';
import {ProjectService} from '../../services/project.service';
import {MatrizMvpModel} from '../../model/create/matrizMvp.model';
import {CommentModel} from '../../model/comment.model';
import {TeamMemberModel} from '../../model/teamMember.model';

@Component({
  templateUrl: './matriz-mvp.component.html'
})
export class MatrizMvpComponent implements OnInit {

  public elements: VersionControlModel<MatrizMvpModel>[];
  public selectedElement: VersionControlModel<MatrizMvpModel>;
  public selectedIdeas: string[];
  public ideaToAdd: string;
  public quadrant: number;

  public comments: CommentModel[] = [];
  public commentToAdd: CommentModel = new CommentModel();
  public showComments: boolean = false;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.initElements();
  }

  initElements() {
    this.elements = this.projectService.getMatrizMvp(sessionStorage.getItem('projectId'));
    if (this.elements.length === 0) {
      const matriz = new MatrizMvpModel();
      matriz.first = [];
      matriz.second = [];
      matriz.third = [];
      matriz.fourth = [];
      matriz.selectIdeas = [''];
      matriz.selectedPrototype = 'LOW_FIDELITY';
      const matrizWrapper = new VersionControlModel<MatrizMvpModel>();
      matrizWrapper.element = matriz;
      matrizWrapper.date = new Date();
      matrizWrapper.version = 1;
      this.elements.push(matrizWrapper);
    }
    this.selectedElement = this.elements[0];
  }

  addIdea(index) {
    this.quadrant = index;
  }

  saveIdea() {
    if (this.quadrant === 1) {
      this.selectedElement.element.first.push(this.ideaToAdd);
    } else if (this.quadrant === 2) {
      this.selectedElement.element.second.push(this.ideaToAdd);
    } else if (this.quadrant === 3) {
      this.selectedElement.element.third.push(this.ideaToAdd);
    } else if (this.quadrant === 4) {
      this.selectedElement.element.fourth.push(this.ideaToAdd);
    }
  }

  addSelectIdea(){
    this.selectedElement.element.selectIdeas.push('');
  }

  removeSelectedIdea(index){
    this.selectedElement.element.selectIdeas.splice(index, 1);
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
