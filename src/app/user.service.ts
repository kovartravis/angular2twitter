import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NewUser, User, ServerFormattedUser, Credentials, Profile } from './user'

@Injectable()
export class UserService {

  private UsersURL = 'http://localhost:8080'
  private componentMethodCallSource = new Subject<any>();
  loginEvent$ = this.componentMethodCallSource.asObservable();

  userLoggedIn: Log;

  constructor(private http: HttpClient) {
    this.userLoggedIn = {status: false};
   }

  getUsernameExists(username: string): Observable<Boolean> {
    return this.http.get<Boolean>(this.UsersURL + '/validate/username/exists/@' + username)    
  }

  postUser(newUser: NewUser){
    var toServer: ServerFormattedUser;
    var credentials: Credentials;
    var profile: Profile;

    toServer = {
      credentials:{
        username: newUser.username,
        password: newUser.password
      },
      profile:{
        email:newUser.email
      }
    }
    return this.http.post<User>(this.UsersURL + '/users', toServer)
  }

  onLoggedIn(){
    this.userLoggedIn.status = true;
    this.componentMethodCallSource.next();
  }
}

export interface Log{
  status: boolean;
}
