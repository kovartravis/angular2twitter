import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailErrorStateMatcher, UsernameErrorStateMatcher, PasswordErrorStateMatcher } from '../error-states';
import { UserService } from '../user.service';
import { alreadyExistsNameValidator } from '../validators'
import { NewUser } from '../user'
import { StateService } from '@uirouter/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  emailMatcher: ErrorStateMatcher;
  usernameMatcher: ErrorStateMatcher;
  passwordMatcher: ErrorStateMatcher;

  emailFormControl: FormControl;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;

  serverError: string;

  constructor(private userService: UserService, private state$: Router) { 
    this.emailMatcher = new EmailErrorStateMatcher();
    this.usernameMatcher = new UsernameErrorStateMatcher();
    this.passwordMatcher = new PasswordErrorStateMatcher();
    this.serverError = null;
  }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.usernameFormControl = new FormControl('',
     [Validators.required],
     [alreadyExistsNameValidator(this.userService)]
    )

    this.passwordFormControl = new FormControl('',[
      Validators.required
    ])
  }

  user: NewUser = {
    email: '',
    fullname: '',
    username: '',
    password: ''
  }

  signupButtonClicked(){
    if(this.emailFormControl.errors || this.usernameFormControl.errors || this.passwordFormControl.errors){
      console.log('Form Validation Error!')
    }else{
      this.userService.postUser(this.user).subscribe( result => { console.log(result); this.takeUserToFeedPage(); }, error => { this.serverError = error.message })
    }
  }

  takeUserToFeedPage(){
    this.userService.onLoggedIn();
    this.state$.navigateByUrl('/feed')
  }
}


