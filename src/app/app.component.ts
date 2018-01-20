import { Component, Input } from '@angular/core';
import { UserService, Log } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userLoggedIn: Log;

  constructor(private userService: UserService){

  }
}
