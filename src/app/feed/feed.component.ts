import { Component, OnInit } from '@angular/core';

import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  user: User;
  feed: Tweet[];

  constructor(private userService: UserService, private tweetService: TweetService, private state$: Router) { }

  ngOnInit() {
    if (this.userService.getUserLogStatus()) {
      this.user = this.userService.getUser();
      this.getTweets();
    } else {
      this.state$.navigateByUrl('/landing');
    }
  }
  getTweets(): void {
    this.userService.getFeed(this.user.username)
      .subscribe(tweets => this.feed = tweets);
  }
  onClickChirp(content: string): void {
    content = content.trim();
    if (!content) { return; }
    this.tweetService.addTweet(content)
      .subscribe(tweet => {
        this.feed.unshift(tweet);
      });
  }
  onTweetDeleted(tweet: Tweet): void {
    const index = this.feed.findIndex(x => tweet === x);
    if (index !== -1) {
      this.feed.splice(index, 1);
    }
  }
  onTweetPosted(tweet: Tweet): void {
    this.feed.unshift(tweet);
  }


}
