import { Component, OnInit, Input } from '@angular/core';

import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit() {
    // this.linkifyContent(this.tweet.content);
  }
  linkifyContent(content) {
    this.tweet.content = content.split(' ')
      .map(token => {
          if (token.startsWith('@')) {
            return `<a mat-button color="primary">@{{${token}}}</a>`;
          }
          if (token.startsWith('#')) {
            return `<a mat-button color="primary">@{{${token}}}</a>`;
          }
          return token;
        })
      .join(' ');
  }

}
