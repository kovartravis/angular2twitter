import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Output() tweetDeleted: EventEmitter<any> = new EventEmitter();
  private simplifiedPostDate: string;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.simplifyPostDate();
  }

  simplifyPostDate() {
    const time = (Date.now() - this.tweet.posted) / 1000;
    if (time < 60) { // seconds
      this.simplifiedPostDate = 'now';
    } else if (time < 3600) { // minutes
      const tempTime = (time / 60).toFixed(0);
      this.simplifiedPostDate = tempTime.concat((tempTime === '1') ? ' min ago' : ' mins ago');
    } else if (time < 86400) { // hours
      const tempTime = (time / 3600).toFixed(0);
      this.simplifiedPostDate = tempTime.concat((tempTime === '1') ? ' hour ago' : ' hours ago');
    } else if (time < 31536000) { // days
      const tempTime = (time / 86400).toFixed(0);
      this.simplifiedPostDate = tempTime.concat((tempTime === '1') ? ' day ago' : ' days ago');
    } else { // years
      const tempTime = (time / 31536000).toFixed(0);
      this.simplifiedPostDate = tempTime.concat((tempTime === '1') ? ' year ago' : ' years ago');
    }
  }

  deleteTweet(tweet: Tweet) {
    this.tweetService.deleteTweet(tweet.id)
      .subscribe(() => {
        this.tweetDeleted.emit(tweet);
      });
  }
  likeTweet(tweet: Tweet) {
    this.tweetService.likeTweet(tweet.id)
    // TODO: indicate visually that tweet has been liked
    // TODO: handled already liked tweet error with alert
      .subscribe();
  }

}
