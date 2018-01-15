import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class EmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  emailMatcher = new EmailErrorStateMatcher();

  user: User = {
    email: '',
    fullname: '',
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  signupButtonClicked(){
    console.log(this.user)
  }

}

interface User{
  email: string;
  fullname: string;
  username: string;
  password: string;
}
