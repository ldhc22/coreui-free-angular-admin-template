import {CommentModel} from '../comment.model';

export class PrototypingModel {
  title: string;
  description: string;
  file: string;
  model: string;
  image: string;
  date: Date;
  comments: CommentModel[];
}
