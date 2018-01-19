import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NewUser, User, ServerFormattedUser, Credentials, Profile } from './user'

@Injectable()
export class UserService {

  private UsersURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

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
}
