import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-user-blurb',
  templateUrl: './user-blurb.component.html',
  styleUrls: ['./user-blurb-component.scss']
})
export class UserBlurbComponent implements OnInit {
  @Input() user: User;
  followers: User[] = [];
  following: User[] = [];
  mentions: Tweet[] = [];
  isFollowed: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.user) {
      this.getFollowers();
      this.getFollowing();
      this.getMentions();
    }
  }

  setFollowed() {
    this.isFollowed = this.followers.some( follower => follower.username === this.userService.getUsername());
  }
  getFollowers() {
    this.userService.getFollowers(this.user.username)
      .subscribe( followers => {
        // console.log('+UserBlurbComponent.getFollowers() returned: ', followers);
        this.followers = followers;
        this.setFollowed();
      }, err => {
        console.error(err);
      });
  }
  getFollowing() {
    this.userService.getFollowing(this.user.username)
      .subscribe( following => {
        // console.log('+UserBlurbComponent.getFollowing() returned: ', following);
        this.following = following;
      });
  }
  getMentions() {
    this.userService.getMentions(this.user.username)
      .subscribe( mentions => {
        // console.log('+UserBlurbComponent.getMentions() returned: ', mentions);
        this.mentions = mentions;
      });
  }
  showFollow() {
    return this.userService.getUserLogStatus()
      && this.user.username !== this.userService.getUsername();
  }
  getFollowButtonName() {
    return this.isFollowed ? 'Unfollow' : 'Follow';
  }
  onClickFollow() {
    if (this.isFollowed) {
      this.userService.postUnFollowUser(this.user.username)
        .subscribe( result => {
          this.isFollowed = false;
          this.getFollowers();
        }, error => {
          console.log('Error unfollowing user: ', error);
        });
    } else {
      this.userService.postFollowUser(this.user.username)
        .subscribe( result => {
            this.isFollowed = true;
            this.getFollowers();
        }, error => {
            console.log('Error following user: ', error);
          }
        );
    }
  }
}
