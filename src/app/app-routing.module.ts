import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
