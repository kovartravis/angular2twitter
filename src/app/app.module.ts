import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FeedComponent } from './feed/feed.component';
import { UserService } from './user.service';
import { TweetComponent } from './tweet/tweet.component';
import { LinkifyPipe } from './linkify.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { UserBlurbComponent } from './user-blurb/user-blurb.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetService } from './tweet.service';
import { ProfileComponent, ProfileEditPopupComponent } from './profile/profile.component';
import { SignoutComponent } from './signout/signout.component';
import { MatDialogModule } from '@angular/material';
import {
  UserResolve,
  TweetResolve,
  MentionResolve,
  LikesResolve,
  AllTweetResolve,
  AllUserResolve,
  FollowersResolve,
  FollowingResolve,
  HashtagsResolve,
  TweetsWithTagResolve,
} from './resolve.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { MentionsComponent } from './mentions/mentions.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { HashtagService } from './hashtag.service';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    FeedComponent,
    TweetComponent,
    LinkifyPipe,
    LoginComponent,
    UserBlurbComponent,
    ProfileComponent,
    SignoutComponent,
    ProfileEditPopupComponent,
    FollowersComponent,
    FollowingComponent,
    MentionsComponent,
    HashtagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatAutocompleteModule,
  ],
  entryComponents: [ProfileEditPopupComponent],
  providers: [
    UserService,
    TweetService,
    UserResolve,
    CookieService,
    TweetResolve,
    MentionResolve,
    LikesResolve,
    AllTweetResolve,
    AllUserResolve,
    FollowersResolve,
    FollowingResolve,
    HashtagService,
    HashtagsResolve,
    TweetsWithTagResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
