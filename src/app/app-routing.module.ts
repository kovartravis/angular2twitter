import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile/:username', component: ProfileComponent},
  { path: 'signout', component: SignoutComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
