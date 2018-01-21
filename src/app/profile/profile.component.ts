import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private thisIsMyProfile: boolean;
  sub: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      if(this.username.match(this.userService.getUsername())){
        this.thisIsMyProfile = true;
      }else{
        this.thisIsMyProfile = false;
      }
    })
  }

  clickEditProfile(){
    console.log('this will be a popup')
  }

  clickFollow(){
    console.log('this needs to check whether you are following them or not')
  }
}
