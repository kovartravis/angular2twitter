import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  title = 'Users followed by';
  user: User;
  following: User[];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.following = this.route.snapshot.data['following'];
  }

}

