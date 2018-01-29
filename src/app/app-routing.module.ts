import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignoutComponent } from './signout/signout.component';
import {
  UserResolve,
  TweetResolve,
  MentionResolve,
  LikesResolve,
  AllTweetResolve,
  AllUserResolve,
  FollowersResolve,
  FollowingResolve
} from './resolve.service';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    resolve: {
      tweets: AllTweetResolve,
      users: AllUserResolve
    }
  }, {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }, {
    path: 'feed',
    component: FeedComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      user: UserResolve,
      tweets: TweetResolve,
      mentions: MentionResolve,
      likes: LikesResolve
    }
  }, {
    path: 'signout',
    component: SignoutComponent
  }, {
    path: ':username/followers',
    component: FollowersComponent,
    resolve: {
      user: UserResolve,
      followers: FollowersResolve
    }
  }, {
    path: ':username/following',
    component: FollowingComponent,
    resolve: {
      user: UserResolve,
      following: FollowingResolve
    }
  }, {
    path: ':username/mentions',
    component: MentionsComponent,
    resolve: {
      user: UserResolve,
      mentions: MentionResolve
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
