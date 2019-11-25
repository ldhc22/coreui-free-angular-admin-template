import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectModel} from '../../model/project.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {RestrictionsModel} from '../../model/restrictions.model';
import {ModalDirective} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {routes} from '../../app.routing';
import {ProjectService} from '../../services/project.service';
import {VersionControlModel} from '../../model/versionControl.model';
import {InvestigationModel} from '../../model/discover/investigation.model';
import {FiveWhysModel} from '../../model/discover/fiveWhys.model';
import {QuestionLadderModel} from '../../model/discover/questionLadder.model';
import {VoiceCustomerModel} from '../../model/discover/voiceCustomer.model';
import {AffinityDiagramModel} from '../../model/connect/affinityDiagram.model';
import {InsightsModel} from '../../model/connect/insights.model';
import {ImprovementTriggerModel} from '../../model/create/improvementTrigger.model';
import {MatrizMvpModel} from '../../model/create/matrizMvp.model';
import {PrototypingModel} from '../../model/build/prototyping.model';
import {MarketingMixModel} from '../../model/launch/marketingMix.model';

@Component({
  templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit {
  @ViewChild('newProjectModal') public newProjectModal: ModalDirective;
  public projects: ProjectModel[] = [];
  public projectToAdd: ProjectModel = new ProjectModel();
  private id: string;

  constructor(public router: Router,
              private projectService: ProjectService) {

  }

  ngOnInit(): void {
    this.initProjects();
    this.projectToAdd.teamMembers = [new TeamMemberModel()];
    this.projectToAdd.stakeholders = [new TeamMemberModel()];
    this.projectToAdd.techInvestigation = [new VersionControlModel<InvestigationModel>()];
    this.projectToAdd.fiveWhys = [new VersionControlModel<FiveWhysModel>()];
    this.projectToAdd.questionLadder = [new VersionControlModel<QuestionLadderModel>()];
    this.projectToAdd.voiceCustomer = [new VersionControlModel<VoiceCustomerModel>()];

    this.projectToAdd.affinityDiagram = [new VersionControlModel<AffinityDiagramModel>()];
    this.projectToAdd.insights = [new VersionControlModel<InsightsModel>()];

    this.projectToAdd.ideas = [new VersionControlModel<string[]>()];
    this.projectToAdd.improvementTriggers = [new VersionControlModel<ImprovementTriggerModel>()];
    this.projectToAdd.matrizMvp = [new VersionControlModel<MatrizMvpModel>()];

    this.projectToAdd.lowFidelity = [new VersionControlModel<PrototypingModel>()];
    this.projectToAdd.midFidelity = [new VersionControlModel<PrototypingModel>()];
    this.projectToAdd.highFidelity = [new VersionControlModel<PrototypingModel>()];

    this.projectToAdd.marketingMix = {
      product: [new VersionControlModel<MarketingMixModel>()],
      place: [new VersionControlModel<MarketingMixModel>()],
      price: [new VersionControlModel<MarketingMixModel>()],
      physicalEnv: [new VersionControlModel<MarketingMixModel>()],
      process: [new VersionControlModel<MarketingMixModel>()],
      people: [new VersionControlModel<MarketingMixModel>()],
      promotion: [new VersionControlModel<MarketingMixModel>()]
    };
  }

  initProjects() {
    this.projects.push(...this.projectService.getProjects());
  }

  addStakeholder() {
    this.projectToAdd.stakeholders.push(new TeamMemberModel());
  }

  removeStakeholder(index) {
    this.projectToAdd.stakeholders.splice(index, 1);
  }

  addTeamMember() {
    this.projectToAdd.teamMembers.push(new TeamMemberModel());
  }

  removeTeamMember(index) {
    this.projectToAdd.teamMembers.splice(index, 1);
  }

  addProject() {
    this.projectToAdd.completion = 0;
    this.projectToAdd.startDate = new Date();
    this.projectToAdd.id = Math.floor(Math.random() * 100000000) + '';
    this.projectService.addProject(this.projectToAdd);
    this.projects = this.projectService.getProjects();
    this.resetProject();
    this.newProjectModal.hide();
  }

  resetProject() {
    this.projectToAdd = new ProjectModel();
    this.projectToAdd.teamMembers = [new TeamMemberModel()];
    this.projectToAdd.stakeholders = [new TeamMemberModel()];
    this.projectToAdd.techInvestigation = [new VersionControlModel<InvestigationModel>()];
    this.projectToAdd.fiveWhys = [new VersionControlModel<FiveWhysModel>()];
    this.projectToAdd.questionLadder = [new VersionControlModel<QuestionLadderModel>()];
    this.projectToAdd.voiceCustomer = [new VersionControlModel<VoiceCustomerModel>()];

    this.projectToAdd.affinityDiagram = [new VersionControlModel<AffinityDiagramModel>()];
    this.projectToAdd.insights = [new VersionControlModel<InsightsModel>()];

    this.projectToAdd.ideas = [new VersionControlModel<string[]>()];
    this.projectToAdd.improvementTriggers = [new VersionControlModel<ImprovementTriggerModel>()];
    this.projectToAdd.matrizMvp = [new VersionControlModel<MatrizMvpModel>()];

    this.projectToAdd.lowFidelity = [new VersionControlModel<PrototypingModel>()];
    this.projectToAdd.midFidelity = [new VersionControlModel<PrototypingModel>()];
    this.projectToAdd.highFidelity = [new VersionControlModel<PrototypingModel>()];

    this.projectToAdd.marketingMix = {
      product: [new VersionControlModel<MarketingMixModel>()],
      place: [new VersionControlModel<MarketingMixModel>()],
      price: [new VersionControlModel<MarketingMixModel>()],
      physicalEnv: [new VersionControlModel<MarketingMixModel>()],
      process: [new VersionControlModel<MarketingMixModel>()],
      people: [new VersionControlModel<MarketingMixModel>()],
      promotion: [new VersionControlModel<MarketingMixModel>()]
    };
  }

  goToProject(projectId) {
    sessionStorage.setItem('projectId', projectId);
    this.router.navigate(['/project/discover/']);
  }
}
