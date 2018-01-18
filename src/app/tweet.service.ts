import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Tweet } from './tweet';
import { TWEETS } from './mock-tweets';

@Injectable()
export class TweetService {

  constructor() { }

  getTweets(): Observable<Tweet[]> {
    return of(TWEETS);
  }

}
