import { Component, OnInit } from '@angular/core';

import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets(): void {
    this.tweetService.getTweets()
      .subscribe(tweets => this.tweets = tweets);
  }


}
