import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {

  title = 'mentions';
  user: User;
  mentions: Tweet[];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.mentions = this.route.snapshot.data['mentions'];
  }

}
