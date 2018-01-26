import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Tweet } from '../tweet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private user: User;
  private tweets: Tweet[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.tweets = this.route.snapshot.data['tweets'];
  }

}
