import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: []
})
export class AppRoutingModule { }
