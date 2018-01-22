import { Component, OnInit } from '@angular/core';
import { Credentials } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidLoginAttempt: boolean;
  private serverError: string;
  private user: Credentials = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private state$: Router) {
    this.invalidLoginAttempt = false;
  }

  ngOnInit() {
  }

  loginButtonClicked() {
    this.serverError = '';
    this.userService.getCredentialsValid(this.user).subscribe( result => { if (result) { this.takeUserToFeedPage();
                                                                         } else { this.invalidLoginAttempt = true; }
                                                                         }, error => {
                                                                           this.serverError = error.message;
                                                                         });
  }

  takeUserToFeedPage() {
    this.userService.logIn(this.user);
    this.state$.navigateByUrl('/feed');
  }
}

