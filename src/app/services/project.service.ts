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
    /*Información general del proyecto*/
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
    /*Investigación Técnica*/
    p.techInvestigation = [];
    const techInv = new InvestigationModel();
    techInv.title = 'Manual de Usuario Control remoto - Drones';
    techInv.date = new Date();
    techInv.description = 'Ficha técnica / Manual de usuario de dron con descripción de perfil de control remoto y funcionalidades de cada uno de sus componentes. Producto actual en el mercado.';
    techInv.user = this.team2;
    techInv.url = 'https://www.bidcom.com.ar/manuales/DRVIS001.pdf';
    techInv.fileName = 'User_Manual_Drones.pdf';
    techInv.comments = [];
    const techInvWrapper = new VersionControlModel<InvestigationModel>();
    techInvWrapper.element = techInv;
    techInvWrapper.version = 1;
    techInvWrapper.date = new Date();
    const techInv2 = new InvestigationModel();
    techInv2.title = 'Manual de Instrucciones – Dron con cámara';
    techInv2.date = new Date();
    techInv2.description = 'Manual de instrucciones de dron con camara, producto actualmente en el mercado con control remoto de última tecnología.';
    techInv2.user = this.team3;
    techInv2.url = 'https://www.bidcom.com.ar/manuales/DRVIS001.pdf';
    techInv2.fileName = 'Manual_DRVIS001.pdf';
    techInv2.comments = [];
    const techInvWrapper2 = new VersionControlModel<InvestigationModel>();
    techInvWrapper2.element = techInv2;
    techInvWrapper2.version = 1;
    techInvWrapper2.date = new Date();
    const techInv3 = new InvestigationModel();
    techInv3.title = 'Manual de Operación de Control remoto';
    techInv3.date = new Date();
    techInv3.description = 'Instructivo con las precauciones de seguridad que debe de tener el usuario para el uso del control remoto, considerando los botones y funciones que integran el dispositivo, así como los materiales utilizados para la manufactura de este y factores externos que lo afectan.';
    techInv3.user = this.team2;
    techInv3.url = 'https://www.daikin.com.mt/content/dam/document-library/operation-manuals/ctrl/sky-air/brc2e52c/BRC2E52C7_BRC3E52C7_4PES368042-1_Operation%20manuals_Spanish.pdf';
    techInv3.fileName = 'Manual_Operacion_ControlRemoto.pdf';
    techInv3.comments = [];
    const techInvWrapper3 = new VersionControlModel<InvestigationModel>();
    techInvWrapper3.element = techInv3;
    techInvWrapper3.version = 1;
    techInvWrapper3.date = new Date();
    p.techInvestigation.push(techInvWrapper);
    p.techInvestigation.push(techInvWrapper2);
    p.techInvestigation.push(techInvWrapper3);
    /*Five whys*/
    p.fiveWhys = [];
    p.questionLadder = [];
    p.voiceCustomer = [];
    const voc = new VoiceCustomerModel();
    voc.comments = [
      'El modelo actual del control es incómodo de usar',
      'Los comandos del control son inestables',
      'Las palancas de movimiento son de mala calidad',
      'Al colocar el celular en el control, se cae fácilmente',
      'Es difícil ver información del dron en el control',
      ''
    ];
    voc.understanding = [
      'El control se hace incómodo de usar cuando se usa de forma prolongada',
      'La conexión del control con el dron es intermitente y presenta lag',
      'Las palancas se aflojan con el uso',
      'El control del dron es dinámico por lo que necesita mejor agarre con el celular',
      'El hub de información del dron opera a través de focos LED pequeños',
      ''
    ];
    voc.requirements = [
      'Un control que se pueda usar con una postura de las manos más natural (ergonomía)',
      'Actualizar el hardware para tener mejor recepción',
      'Que las palancas conserven su rigidez con el paso del tiempo.',
      'Un porta celular con estructura más robusta',
      'Un hub de información más amigable y con mayor visibilidad',
      ''
    ];
    const vocWrapper = new VersionControlModel<VoiceCustomerModel>();
    vocWrapper.element = voc;
    vocWrapper.version = 1;
    vocWrapper.date = new Date();
    p.voiceCustomer.push(vocWrapper);

    /*Affinity diagram*/
    p.affinityDiagram = [];
    const aff: AffinityDiagramModel = new AffinityDiagramModel();
    aff.group1 = {
      name: 'Ergonomía', concepts: [
        'El uso prolongado del control es incomodo',
        'La posición del porta celular es inconveniente',
        'Un factor crucial en la ergonomía es el balance o centro de gravedad del producto',
        '',
        ''
      ]
    };
    aff.group2 = {
      name: 'Diseño', concepts: [
        'Palancas de mala calidad',
        'Existen mecanismos de palancas más robustos',
        'Porta celular frágil',
        '',
        ''
      ]
    };
    aff.group3 = {
      name: 'Conectividad', concepts: [
        'Intemitencia en conexión',
        'Comandos de control inestables',
        'El modelo actual usa BT 4.1',
        'Existe un nuevo protocolo de BT',
        ''
      ]
    };
    aff.group4 = {
      name: 'Funcionalidad', concepts: [
        'Baja visibilidad de información del dron en el control',
        'Uso de focos LED no ayuda en exteriores',
        'Existen en el mercado pantallas de bajo consumo energético',
        '',
        ''
      ]
    };
    const affWrapper = new VersionControlModel<AffinityDiagramModel>();
    affWrapper.element = aff;
    affWrapper.date = new Date();
    affWrapper.version = 1;
    p.affinityDiagram.push(affWrapper);
    /* Insights */
    p.insights = [];
    const ins = new InsightsModel();
    ins.insights = [
      {
        text: 'Se puede mejorar la ubicación del porta celular para mejorar balance de control',
        action: '¿Cuál pudiera ser la mejor posición del portacelular en el control para mejorar la ergonomía?'
      },
      {
        text: 'La conexión es inestable porque el protocolo de comunicación está obsoleto.',
        action: '¿Cómo podemos integrar el protocolo de comunicación más vigente en el mercado al control?'
      },
      {
        text: 'La fragilidad y baja rigidez se debe a la calidad de materiales y a un diseño erróneo de los mecanismos del control',
        action: '¿Cómo podemos incrementar la durabilidad de los componentes mediante el un proceso de reingeniería?'
      },
      {
        text: 'La interfaz informativa del dron en el control es limitada y poco amigable para el usuario.',
        action: '¿Cómo le podemos brindar al usuario más información del estatus del dron y de forma más clara/visible? '
      }
    ];
    const insWrapper = new VersionControlModel<InsightsModel>();
    insWrapper.element = ins;
    insWrapper.version = 1;
    insWrapper.date = new Date();
    p.insights.push(insWrapper);

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
