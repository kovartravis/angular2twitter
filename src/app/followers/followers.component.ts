import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  title = 'followers';
  user: User;
  followers: User[];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.followers = this.route.snapshot.data['followers'];
  }

}
