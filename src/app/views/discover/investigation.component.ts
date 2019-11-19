import {Component, OnInit} from '@angular/core';
import {InvestigationModel} from '../../model/investigation.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {CommentModel} from '../../model/comment.model';

@Component({
  templateUrl: './investigation.component.html'
})
export class InvestigationComponent implements OnInit {
  public elements: InvestigationModel[] = [];
  public selectedElement: InvestigationModel;
  public showComments: boolean = false;
  public commentToAdd: CommentModel = new CommentModel();

  ngOnInit(): void {
    this.initElements();
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  addComment() {
    const team2 = new TeamMemberModel();
    team2.name = 'Luis Daniel H.';
    this.commentToAdd.date = new Date();
    this.commentToAdd.user = team2;
    this.selectedElement.comments.push(Object.assign({}, this.commentToAdd));
    this.commentToAdd = new CommentModel();
  }

  initElements() {
    const team1 = new TeamMemberModel();
    team1.name = 'Marcelo T.';
    const team2 = new TeamMemberModel();
    team2.name = 'Luis Daniel H.';
    const c1 = new CommentModel();
    c1.user = team1;
    c1.date = new Date();
    c1.body = 'Buena aportación, pero falta profundizar en el diseño';
    const c2 = new CommentModel();
    c2.user = team2;
    c2.date = new Date();
    c2.body = 'Considero que podemos seguir adelante con la información que tenemos actualmente';

    const e1 = new InvestigationModel();
    e1.comments = [];
    e1.title = 'Results for PSP';
    e1.description = 'Artículo de investigación que expone los resultados de la implementación de PSP.';
    e1.fileName = 'ResultsForPSP.pdf';
    e1.url = 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.110.9799&rep=rep1&type=pdf';
    e1.user = team1;
    e1.date = new Date();
    e1.comments.push(c1);
    e1.comments.push(c2);
    const e2 = new InvestigationModel();
    e2.comments = [];
    e2.title = 'The Team Software Process';
    e2.description = 'Documentación oficial para la capacitación de TSP publicada por el SEI.';
    e2.fileName = 'TSP.pdf';
    e2.url = 'https://resources.sei.cmu.edu/asset_files/Brochure/2010_015_001_72817.pdf';

    e2.user = team2;
    e2.date = new Date();
    e2.comments.push(c1);
    e2.comments.push(c2);
    const e3 = new InvestigationModel();
    e3.comments = [];
    e3.title = 'Otra investigación';
    e3.description = 'Otra pieza de información para el proyecto';
    e3.url = null;
    e3.date = new Date();
    e3.fileName = 'OnlyDownloadFIle.docx';
    e3.user = team2;
    e3.comments.push(c1);
    e3.comments.push(c2);
    this.elements.push(e1);
    this.elements.push(e2);
    this.elements.push(e3);
    this.selectedElement = this.elements[1];
  }
}
