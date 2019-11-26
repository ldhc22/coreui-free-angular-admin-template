import {Component, OnInit, ViewChild} from '@angular/core';
import {InvestigationModel} from '../../model/discover/investigation.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {CommentModel} from '../../model/comment.model';
import {ProjectService} from '../../services/project.service';
import {VersionControlModel} from '../../model/versionControl.model';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  templateUrl: './investigation.component.html'
})
export class InvestigationComponent implements OnInit {
  public elements: VersionControlModel<InvestigationModel>[] = [];
  public elementToAdd: InvestigationModel = new InvestigationModel();
  public selectedElement: VersionControlModel<InvestigationModel>;
  public showComments: boolean = false;
  public commentToAdd: CommentModel = new CommentModel();
  @ViewChild('newInvestigationModal') public newInvestigationModal: ModalDirective;

  constructor(private projectService: ProjectService) {
  }

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
    this.selectedElement.element.comments.push(Object.assign({}, this.commentToAdd));
    this.commentToAdd = new CommentModel();
  }

  initElements() {
    /*const team1 = new TeamMemberModel();
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
    this.elements.push(e3);*/
    this.elements = this.projectService.getTechInvestigation(sessionStorage.getItem('projectId'));
    if (this.elements.length > 0) {
      this.selectedElement = this.elements[this.elements.length - 1];
    } else {
      this.selectedElement = null;
    }

  }

  addInvestigation(): void {
    const team2 = new TeamMemberModel();
    team2.name = 'Luis Daniel H.';
    this.elementToAdd.comments = [];
    this.elementToAdd.date = new Date();
    this.elementToAdd.user = team2;
    const vc = new VersionControlModel<InvestigationModel>();
    vc.element = this.elementToAdd;
    vc.date = this.elementToAdd.date;
    vc.version = 1;
    this.elements.push(vc);
    this.selectedElement = this.elements[this.elements.length - 1];
    this.elementToAdd = new InvestigationModel();
    this.newInvestigationModal.hide();
  }
}
