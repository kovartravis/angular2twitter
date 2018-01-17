import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLoginAttempt: boolean;

  constructor() {
    this.invalidLoginAttempt = false;
  }

  ngOnInit() {
  }

  loginButtonClicked(){
    //MOCKUP
    console.log('login')
    this.invalidLoginAttempt = true;
  }
}

