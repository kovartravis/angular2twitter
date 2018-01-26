import { User } from './user';

export class Tweet {
  id: number;
  author: User;
  posted: number;
  content: string;
  inReplyTo: Tweet;
  inRepostOf: Tweet;
  tags: Label[];
}

export class Label {
  id: number;
  label: string;
  firstUsed: number;
  lastUsed: number;
}
