import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  //MOCKUP
  getUsernameExists(username: string){
    if(username === 'user') return true;
    else return false;
  }

}
