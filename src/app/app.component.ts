import { Component, Input } from '@angular/core';
import { UserService, Log } from './user.service'

@Component({
  selector: 'app-root',
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userLoggedIn: Log;
  userService: UserService;

  constructor(userService: UserService){
    this.userLoggedIn = userService.userLoggedIn;
    userService.loginEvent$.subscribe( () => { console.log('hello'); }, () => console.log('error') );
  }
}
