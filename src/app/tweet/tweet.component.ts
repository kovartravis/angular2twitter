import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Output() tweetDeleted: EventEmitter<any> = new EventEmitter();
  @Output() tweetPosted: EventEmitter<any> = new EventEmitter();
  @Output() tweetLikes: EventEmitter<any> = new EventEmitter();
  @Output() tweetReplies: EventEmitter<any> = new EventEmitter();
  @Output() tweetReposts: EventEmitter<any> = new EventEmitter();
  replyVisible = false;
  deleteVisible = false;
  @Input() detailButtonsVisible;

  constructor(private tweetService: TweetService, private userService: UserService) { }

  ngOnInit() {
    const username = this.userService.getUsername();
    if (username && username === this.tweet.author.username) {
      this.deleteVisible = true;
    }
    if (this.detailButtonsVisible === undefined) {
      this.detailButtonsVisible = true;
    }
  }
  onClickDelete(tweet: Tweet) {
    this.tweetService.deleteTweet(tweet.id)
      .subscribe(() => {
        this.tweetDeleted.emit(tweet);
      });
  }
  onClickLike(tweet: Tweet) {
    this.tweetService.likeTweet(tweet.id)
    // TODO: indicate visually that tweet has been liked
    // TODO: handled already liked tweet error with alert
      .subscribe();
  }
  toggleReplyVisible() {
    if (this.userService.getUserLogStatus()) {
      this.replyVisible = !this.replyVisible;
    }
  }
  onClickReply(id: number, content: string) {
    this.tweetService.replyToTweet(id, content)
      .subscribe( tweet => {
        this.tweetPosted.emit(tweet);
      });
  }
  onClickRepost(id: number) {
    this.tweetService.repostTweet(id)
      .subscribe(tweet => {
        this.tweetPosted.emit(tweet);
      });
  }

}
