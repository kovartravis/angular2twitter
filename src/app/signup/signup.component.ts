import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailErrorStateMatcher, UsernameErrorStateMatcher, PasswordErrorStateMatcher } from '../error-states';
import { UserService } from '../user.service';
import { alreadyExistsNameValidator } from '../validators'

@Component({
  selector: 'app-signup',
  providers: [UserService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  userService: UserService

  emailMatcher: ErrorStateMatcher
  usernameMatcher: ErrorStateMatcher
  passwordMatcher: ErrorStateMatcher

  emailFormControl: FormControl
  usernameFormControl: FormControl
  passwordFormControl: FormControl

  constructor(userService: UserService) { 
    this.userService = userService
    this.emailMatcher = new EmailErrorStateMatcher();
    this.usernameMatcher = new UsernameErrorStateMatcher();
    this.passwordMatcher = new PasswordErrorStateMatcher();
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
    console.log(this.user)
  }
}

interface NewUser{
  email: string;
  fullname: string;
  username: string;
  password: string;
}
