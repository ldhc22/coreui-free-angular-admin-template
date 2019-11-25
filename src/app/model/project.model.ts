import {TeamMemberModel} from './teamMember.model';
import {RestrictionsModel} from './restrictions.model';
import {VersionControlModel} from './versionControl.model';
import {InvestigationModel} from './discover/investigation.model';
import {FiveWhysModel} from './discover/fiveWhys.model';
import {QuestionLadderModel} from './discover/questionLadder.model';
import {VoiceCustomerModel} from './discover/voiceCustomer.model';
import {AffinityDiagramModel} from './connect/affinityDiagram.model';
import {InsightsModel} from './connect/insights.model';
import {MatrizMvpModel} from './create/matrizMvp.model';
import {ImprovementTriggerModel} from './create/improvementTrigger.model';
import {PrototypingModel} from './build/prototyping.model';
import {MarketingMixModel} from './launch/marketingMix.model';

export class ProjectModel {
  id: string;
  name: string;
  description: string;
  client: string;
  objective: string;
  restrictions: RestrictionsModel;
  completion: number;
  challenges: string;
  expectations: string;
  stakeholders: TeamMemberModel[];
  teamMembers: TeamMemberModel[];
  startDate: Date;
  techInvestigation: VersionControlModel<InvestigationModel>[];
  fiveWhys: VersionControlModel<FiveWhysModel>[];
  questionLadder: VersionControlModel<QuestionLadderModel>[];
  voiceCustomer: VersionControlModel<VoiceCustomerModel>[];

  affinityDiagram: VersionControlModel<AffinityDiagramModel>[];
  insights: VersionControlModel<InsightsModel>[];

  ideas: VersionControlModel<string[]>[];
  matrizMvp: VersionControlModel<MatrizMvpModel>[];
  improvementTriggers: VersionControlModel<ImprovementTriggerModel>[];

  lowFidelity: VersionControlModel<PrototypingModel>[];
  midFidelity: VersionControlModel<PrototypingModel>[];
  highFidelity: VersionControlModel<PrototypingModel>[];

  marketingMix: {
    product: VersionControlModel<MarketingMixModel>[],
    place: VersionControlModel<MarketingMixModel>[],
    price: VersionControlModel<MarketingMixModel>[],
    physicalEnv: VersionControlModel<MarketingMixModel>[],
    process: VersionControlModel<MarketingMixModel>[],
    people: VersionControlModel<MarketingMixModel>[],
    promotion: VersionControlModel<MarketingMixModel>[]
  };
}
