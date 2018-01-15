import { Component, OnInit } from '@angular/core';

import { TWEETS } from '../mock-tweets';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets = TWEETS;

  constructor() { }

  ngOnInit() {
  }

}
