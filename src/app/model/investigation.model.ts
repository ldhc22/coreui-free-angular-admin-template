import {TeamMemberModel} from './teamMember.model';
import {CommentModel} from './comment.model';

export class InvestigationModel {
  title: string;
  description: string;
  fileName: string;
  url: string;
  user: TeamMemberModel;
  date: Date;
  comments: CommentModel[];
}
