import { Tweet } from './tweet';

export class Context {
  target: Tweet;
  before: Tweet[];
  after: Tweet[];
}
