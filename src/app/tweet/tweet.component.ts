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

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
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
