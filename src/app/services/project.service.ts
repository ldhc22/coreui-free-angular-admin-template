import {Injectable, OnInit} from '@angular/core';
import {ProjectModel} from '../model/project.model';
import {TeamMemberModel} from '../model/teamMember.model';
import {VersionControlModel} from '../model/versionControl.model';
import {InvestigationModel} from '../model/discover/investigation.model';
import {FiveWhysModel} from '../model/discover/fiveWhys.model';
import {QuestionLadderModel} from '../model/discover/questionLadder.model';
import {VoiceCustomerModel} from '../model/discover/voiceCustomer.model';
import {AffinityDiagramModel} from '../model/connect/affinityDiagram.model';
import {InsightsModel} from '../model/connect/insights.model';
import {ImprovementTriggerModel} from '../model/create/improvementTrigger.model';
import {MatrizMvpModel} from '../model/create/matrizMvp.model';
import {PrototypingModel} from '../model/build/prototyping.model';
import {MarketingMixModel} from '../model/launch/marketingMix.model';
import {RestrictionsModel} from '../model/restrictions.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private thing: string = 'Hello world';
  private projects: ProjectModel[] = [];

  private team1: TeamMemberModel = new TeamMemberModel();
  private team2: TeamMemberModel = new TeamMemberModel();
  private team3: TeamMemberModel = new TeamMemberModel();
  private team4: TeamMemberModel = new TeamMemberModel();
  private team5: TeamMemberModel = new TeamMemberModel();

  private stakeholder1: TeamMemberModel = new TeamMemberModel();
  private stakeholder2: TeamMemberModel = new TeamMemberModel();

  constructor() {
    this.initTeamMembers();
    this.initProject();
    this.initTestProject();
  }

  initTeamMembers(): void {
    this.team1.name = 'Luis Daniel H.';
    this.team1.email = 'ldhernandez@company.com';
    this.team1.role = 'Programador';
    this.team2.name = 'Marcelo T.';
    this.team2.email = 'mturrubiate@company.com';
    this.team2.role = 'Project Manager';
    this.team3.name = 'Ingridet L.';
    this.team3.email = 'ilafont@company.com';
    this.team3.role = 'Diseñador';
    this.team4.name = 'Jared R.';
    this.team4.email = 'jramirez@company.com';
    this.team4.role = 'Analista';
    this.team5.name = 'Ismael G.';
    this.team5.email = 'igarcia@company.com';
    this.team5.role = 'Diseñador';
    this.stakeholder1.name = 'Juan Perez';
    this.stakeholder1.email = 'j.perez@bigcompany.com';
    this.stakeholder1.role = 'STAKEHOLDER';
    this.stakeholder2.name = 'Pedro Páramo';
    this.stakeholder2.email = 'p.paramo@bigcompany.com';
    this.stakeholder2.role = 'STAKEHOLDER';
  }

  initProject(): void {
    const p = new ProjectModel();
    p.id = '12345678';
    p.name = 'Sistema de enfriamiento sólido';
    p.description = 'Desarrollo de sistema de enfriamiento que utiliza una pieza sólida en lugar de fluidos';
    p.client = 'Big Company S.A de C.V.';
    p.objective = 'Obtener un sistema que reduzca el consumo de energía en un 20%';
    p.restrictions = new RestrictionsModel();
    p.restrictions.time = '60 semanas';
    p.restrictions.cost = '$1,000,000';
    p.restrictions.quality = '';
    p.completion = 60;
    p.stakeholders = [this.stakeholder1, this.stakeholder2];
    p.teamMembers = [this.team1, this.team2, this.team3, this.team4, this.team5];
    p.techInvestigation = [];
    p.fiveWhys = [];
    p.questionLadder = [];
    p.voiceCustomer = [];

    p.affinityDiagram = [];
    p.insights = [];

    p.ideas = [];
    p.improvementTriggers = [];
    p.matrizMvp = [];

    p.lowFidelity = [];
    p.midFidelity = [];
    p.highFidelity = [];

    p.marketingMix = {
      product: [],
      place: [],
      price: [],
      physicalEnv: [],
      process: [],
      people: [],
      promotion: []
    };
    this.projects.push(p);
  }

  initTestProject(): void {
    const p = new ProjectModel();
    p.id = '12358132';
    p.name = 'Desarrollo de un nuevo control remoto para dron';
    p.description = 'Diseñar un nuevo control remoto que se adapte mejor a las necesidades del cliente';
    p.client = 'Adan López, director comercial de Drone Company ';
    p.objective = 'Diseñar un nuevo control remoto que se adapte mejor a las necesidades del cliente';
    p.restrictions = new RestrictionsModel();
    p.restrictions.time = '60 semanas';
    p.restrictions.cost = '$1,000,000';
    p.restrictions.quality = '';
    p.completion = 80;
    p.stakeholders = [this.stakeholder1, this.stakeholder2];
    p.teamMembers = [this.team1, this.team2, this.team3, this.team4, this.team5];
    p.techInvestigation = [];
    p.fiveWhys = [];
    p.questionLadder = [];
    p.voiceCustomer = [];

    p.affinityDiagram = [];
    p.insights = [];

    p.ideas = [];
    p.improvementTriggers = [];
    p.matrizMvp = [];

    p.lowFidelity = [];
    p.midFidelity = [];
    p.highFidelity = [];

    p.marketingMix = {
      product: [],
      place: [],
      price: [],
      physicalEnv: [],
      process: [],
      people: [],
      promotion: []
    };
    this.projects.push(p);
  }

  addProject(p: ProjectModel): void {
    this.projects.push(p);
  }

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  getProject(id: string): ProjectModel {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project;
  }

  getTechInvestigation(id: string): VersionControlModel<InvestigationModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.techInvestigation;
  }

  getFiveWhys(id: string): VersionControlModel<FiveWhysModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.fiveWhys;
  }

  getQuestionLadder(id: string): VersionControlModel<QuestionLadderModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.questionLadder;
  }

  getVoiceCustomer(id: string): VersionControlModel<VoiceCustomerModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.voiceCustomer;
  }

  getAffinityDiagram(id: string): VersionControlModel<AffinityDiagramModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.affinityDiagram;
  }

  getInsights(id: string): VersionControlModel<InsightsModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.insights;
  }

  getIdeas(id: string): VersionControlModel<String[]>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.ideas;
  }

  getImprovementTriggers(id: string): VersionControlModel<ImprovementTriggerModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.improvementTriggers;
  }

  getMatrizMvp(id: string): VersionControlModel<MatrizMvpModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.matrizMvp;
  }

  getLowFidelity(id: string): VersionControlModel<PrototypingModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.lowFidelity;
  }

  getMidFidelity(id: string): VersionControlModel<PrototypingModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.midFidelity;
  }

  getHighFidelity(id: string): VersionControlModel<PrototypingModel>[] {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.highFidelity;
  }

  getMarketingMix(id: string) {
    let project: ProjectModel = null;
    this.projects.forEach(p => {
      if (p.id === id) {
        project = p;
      }
    });
    return project.marketingMix;
  }

}
