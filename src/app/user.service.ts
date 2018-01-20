import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NewUser, User, ServerFormattedUser, Credentials, Profile } from './user'

@Injectable()
export class UserService {

  private UsersURL = 'http://localhost:8080'

  private userLoggedIn: Log;

  constructor(private http: HttpClient) {
    this.userLoggedIn = { status: false,
                          credentials: null };
  }

  getUserLogStatus(){
    return this.userLoggedIn.status;
  }

  getUsername(){
    return this.userLoggedIn.credentials.username;
  }

  getCredentials(){
    return this.userLoggedIn.credentials;
  }

  getUsernameExists(username: string): Observable<Boolean> {
    return this.http.get<Boolean>(this.UsersURL + '/validate/username/exists/@' + username)    
  }

  getCredentialsValid(creds: Credentials){
    return this.http.post<Boolean>(this.UsersURL + '/validate/username/credentials', creds)
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

  logIn(creds: Credentials){
    this.userLoggedIn.status = true;
    this.userLoggedIn.credentials = creds;
  }
}

export interface Log{
  status: boolean;
  credentials: Credentials;
}
