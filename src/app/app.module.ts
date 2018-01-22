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
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import { UserBlurbComponent } from './user-blurb/user-blurb.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetService } from './tweet.service';
import { ProfileComponent, DialogOverviewExampleDialog } from './profile/profile.component';
import { SignoutComponent } from './signout/signout.component';
import { MatDialogModule } from '@angular/material';

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
    DialogOverviewExampleDialog
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
    MatDialogModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [UserService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
