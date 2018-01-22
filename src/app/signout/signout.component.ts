import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private state$: Router, service: UserService) {
    service.logOut();
    state$.navigateByUrl('/landing');

   }

  ngOnInit() {

  }
}
