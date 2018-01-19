import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailErrorStateMatcher, UsernameErrorStateMatcher, PasswordErrorStateMatcher } from '../error-states';
import { UserService } from '../user.service';
import { alreadyExistsNameValidator } from '../validators'
import { NewUser } from '../user'

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

  serverError: string

  constructor(userService: UserService) { 
    this.userService = userService
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
      this.userService.postUser(this.user).subscribe( result => { console.log(result) }, error => { this.serverError = error.message })
    }
  }
}


