import {TeamMemberModel} from './teamMember.model';
import {RestrictionsModel} from './restrictions.model';

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
}