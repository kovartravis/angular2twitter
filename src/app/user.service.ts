import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  private UsersURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getUsernameExists(username: string): Observable<Boolean> {
    return this.http.get<Boolean>(this.UsersURL + '/validate/username/exists/@' + username)    
  }
}
