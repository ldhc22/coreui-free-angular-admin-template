import {TeamMemberModel} from './teamMember.model';

export class CommentModel {
  user: TeamMemberModel;
  date: Date;
  body: string;
}
