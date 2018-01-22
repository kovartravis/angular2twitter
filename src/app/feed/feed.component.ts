import { Component, OnInit } from '@angular/core';

import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  user: User;
  tweets: Tweet[];

  constructor(private userService: UserService, private tweetService: TweetService) { }

  ngOnInit() {
    if (this.userService.getUserLogStatus()) {
      setTimeout( () => this.user = this.userService.getUser() );
      this.getTweets();
    }
  }

  getTweets(): void {
    this.tweetService.getTweets()
      .subscribe(tweets => this.tweets = tweets);
  }
  onClickChirp(content: string): void {
    content = content.trim();
    if (!content) { return; }
    this.tweetService.addTweet(content)
      .subscribe(tweet => {
        this.tweets.unshift(tweet);
      });
  }
  onTweetDeleted(tweet: Tweet): void {
    const index = this.tweets.findIndex(x => tweet === x);
    if (index !== -1) {
      this.tweets.splice(index, 1);
    }
  }


}
