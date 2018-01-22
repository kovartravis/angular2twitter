import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NewUser, User, ServerFormattedUser, Credentials, Profile } from './user';
import { Tweet } from './tweet';

@Injectable()
export class UserService {

  private UsersURL = 'http://localhost:8080';

  private userLoggedIn: Log;

  constructor(private http: HttpClient) {
    this.userLoggedIn = { status: false, credentials: undefined, user: undefined };
  }

  /*
    getUserLoggedIn returns the whole user data object
  */
  getUserLoggedIn(): Log {
    return this.userLoggedIn;
  }

  /*
    getUserLogStatus returns a boolean indicating whether or not there is a user currently logged in.
  */

  getUserLogStatus(): boolean {
    return this.userLoggedIn.status;
  }

  /*
    getUsername returns the currently logged in users username as a string.

    return: Returns the current users username as a string or returns undefined if there is no user logged in.
  */
  getUsername(): string {
    return this.getUserLogStatus() ? this.userLoggedIn.credentials.username : undefined;
  }

  /*
      getUser returns the whole user object which may or may not be undefined, or an optional user can be supplied to 
    access another users data.
  */
  getUser(optionalUser?: string): User | Observable<User> {
    if (optionalUser) {
      return this.http.get<User>(this.UsersURL + '/users/@' + optionalUser);
    }
    return this.userLoggedIn.user;
  }

  /*
    get Profile returns only the profile object of the user object or undefined if there is no user logged in
  */
  getProfile(): Profile {
    return this.getUserLogStatus() ? this.userLoggedIn.user.profile : undefined;
  }

  /*
    getCredentials returns the credentials of the user currently logged in which may or may not be undefined
  */
  getCredentials(): Credentials {
    return this.userLoggedIn.credentials;
  }

  /*
      getUsernameExists returns the api endpoint '/validate/username/exists/@username'. getUsernameExists is used to
    give realtime validation data to the signup form to inform the user whether a username they are typing currently exists or not.

      arguments: you must supply a username as a string.

      return: returns an observable that returns a boolean indicating whether or not the username exists on the server.
  */
  getUsernameExists(username: string): Observable<Boolean> {
    return this.http.get<Boolean>(this.UsersURL + '/validate/username/exists/@' + username)
  }

  /*
      getCredentialsValid returns the api endpoint '/validate/username/credentials' and is used when someone logs in to verify their
    username and password exist on the server.

      bad practices: The http request is a post so that the body can be used but it does not modify anything on the server.

      arguments: you must supply a credentials object.

      return: returns an observable that returns a boolean indicating whether or not the supplied credentials are valid or not.
  */
  getCredentialsValid(creds: Credentials): Observable<Boolean> {
    return this.http.post<Boolean>(this.UsersURL + '/validate/username/credentials', creds)
  }

  /*
    getFeed returns the value of the '/users/@username/feed' api endpoint. getFeed is normally used to get
  the feed of the logged in user but it can access any users feed and doesnt require credentials.

    arguments: To access the feed of the logged in user give no arguments. To access the feed of another user give
  the username of the user as an optional argument. If no argument is supplied and no user is logged in it will return undefined
  with a silent error and a console output.

    return: Returns an observable that returns an array of tweets.

    error: 404 - UserNotFound
  */
  getFeed(optionalUser?: string): Observable<Tweet[]> {
    if (!this.getUserLogStatus() && !optionalUser) {
      console.log('ERROR: tried to access feed but no user is logged in and no arguments supplied')
      return undefined;
    } else if (optionalUser) {
      return this.http.get<Tweet[]>(this.UsersURL + '/users/@' + optionalUser + '/feed')
    }
    return this.http.get<Tweet[]>(this.UsersURL + '/users/@' + this.getUsername() + '/feed')
  }

  /*
      getTweets returns the value of the '/users/@username/tweets' api endpoint.

      arguments: To access the tweets of the logged in user give no arguments. To access the tweets of another user give
    the username of the user as an optional argument. If no argument is supplied and no user is logged in it will return undefined
    with a silent error and a console output.

      return: Returns an observable that returns an array of tweets.

      error: 404 - UserNotFound
  */
  getTweets(optionalUser = undefined): Observable<Tweet[]> {
    if (!this.getUserLogStatus() && !optionalUser) {
      console.log('ERROR: tried to access tweets but no user is logged in and no arguments supplied')
      return undefined;
    } else if (optionalUser) {
      return this.http.get<Tweet[]>(this.UsersURL + '/users/@' + optionalUser + '/tweets')
    }
    return this.http.get<Tweet[]>(this.UsersURL + '/users/@' + this.getUsername() + '/tweets')
  }

  /*
      getMentions returns the value of the '/users/@username/mentions' api endpoint.

      arguments: To access the mentions of the logged in user give no arguments. To access the mentions of another user give
    the username of the user as an optional argument. If no argument is supplied and no user is logged in it will return undefined
    with a silent error and a console output.

      return: Returns an observable that returns an array of tweets.

      error: 404 - UserNotFound
  */
  getMentions(optionalUser = undefined): Observable<Tweet[]> {
    if (!this.getUserLogStatus() && !optionalUser) {
      console.log('ERROR: tried to access mentions but no user is logged in and no arguments supplied')
      return undefined;
    } else if (optionalUser) {
      return this.http.get<Tweet[]>(this.UsersURL + '/users/@' + optionalUser + '/mentions')
    }
    return this.http.get<Tweet[]>(this.UsersURL + '/users/@' + this.getUsername() + '/mentions')
  }

  /*
      getFollowing returns the value of the '/users/@username/following' api endpoint.

      arguments: To access following of the logged in user give no arguments. To access the following of another user give
    the username of the user as an optional argument. If no argument is supplied and no user is logged in it will return undefined
    with a silent error and a console output.

      return: Returns an observable that returns an array of users.

      error: 404 - UserNotFound
  */
  getFollowing(optionalUser = undefined): Observable<User[]> {
    if (!this.getUserLogStatus() && !optionalUser) {
      console.log('ERROR: tried to access followers but no user is logged in and no arguments supplied');
      return undefined;
    } else if (optionalUser) {
      return this.http.get<User[]>(this.UsersURL + '/users/@' + optionalUser + '/following')
    }
    return this.http.get<User[]>(this.UsersURL + '/users/@' + this.getUsername() + '/following')
  }

  /*
      getFollowers returns the value of the '/users/@username/followers' api endpoint.

      arguments: To access the followers of the logged in user give no arguments. To access the followers of another user give
    the username of the user as an optional argument. If no argument is supplied and no user is logged in it will return undefined
    with a silent error and a console output.

      return: Returns an observable that returns an array of users.

      error: 404 - UserNotFound
  */
  getFollowers(optionalUser = undefined): Observable<User[]> {
    if (!this.getUserLogStatus() && !optionalUser) {
      console.log('ERROR: tried to access followers but no user is logged in and no arguments supplied')
      return undefined;
    } else if (optionalUser) {
      return this.http.get<User[]>(this.UsersURL + '/users/@' + optionalUser + '/followers')
    }
    return this.http.get<User[]>(this.UsersURL + '/users/@' + this.getUsername() + '/followers')
  }

  /*
      postUser sends a new user to the api endpoint '/users'. postUser is used by the signup form to create a new user on the server.

      arguments: you must supply a NewUser. A NewUser object exists only on the frontend and the new user is converted into a format the server
    understands by this function.

      return: returns an observable that returns the user object created by the server.

      error: 400 - SomethingIsNullAndShouldntBe
             403 - UserAlreadyExists
  */
  postUser(newUser: NewUser): Observable<User> {
    var toServer: ServerFormattedUser;
    let credentials: Credentials;
    let profile: Profile;

    let name = newUser.fullname.split(' ');

    toServer = {
      credentials: {
        username: newUser.username,
        password: newUser.password
      },
      profile: {
        email: newUser.email,
        firstName: name[0],
        lastName: name[1],
        phone: null
      }
    };
    return this.http.post<User>(this.UsersURL + '/users', toServer);
  }

  /*
      patchUser updates the profile of an existing user.

      arguments: you must supply a profile object.

      return: returns an observable that returns the updated user object.

      error: 404 - UserDoesNotExistException
             401 - CredentialsDoNotMatchException
             400 - SomethingIsNullAndShouldntBe
  */
  patchUser(profile: Profile): Observable<User> {
    if (!this.getUserLogStatus()) {
      console.log('ERROR: tried to patch user but no user is logged in');
      return undefined;
    }
    return this.http.patch<User>(this.UsersURL + '/@' + this.getUsername(), profile);
  }

  /*
      deleteUser deletes an existing user.

      arguments: none.

      return: returns an observable that returns the deleted user object.

      error: 404 - UserDoesNotExistException
             401 - CredentialsDoNotMatchException
  */
  deleteUser(): Observable<User> {
    if (!this.getUserLogStatus()) {
      console.log('ERROR: tried to delete user but no user is logged in');
      return undefined;
    }
    return this.http.post<User>(this.UsersURL + '/@' + this.getUsername(), this.getCredentials());
  }

  /*
      postFollowUser posts to the apit endpoint '/users/@username/follow' to set the logged in user to be following the username supplied in the arguments.

      arguments: you must supply the username of the user that you want to follow.

      return: void

      error: 404 - UserDoesNotExist (either the user logged in or the user to be followed does not exist)
             401 - CredentialsDoNotMatch
             403 - AlreadyFollowingUser
             400 - SomthingIsNullAndItShouldntBe

  */
  postFollowUser(username: string): void {
    if (!this.getUserLogStatus()) {
      console.log('ERROR: tried to follow a user but no user logged in');
      return;
    }
    this.http.post(this.UsersURL + '/users/@' + username + '/follow', this.getCredentials());
  }

  /*
    postFollowUser posts to the apit endpoint '/users/@username/unfollow' to remove the username supplied from the list of followers of the logged in user.

    arguments: you must supply the username of the user that you want to unfollow.

    return: void

    error: 404 - UserDoesNotExist (either the user logged in or the user to be followed does not exist)
           401 - CredentialsDoNotMatch
           403 - NotFollowingUser
           400 - SomthingIsNullAndItShouldntBe

*/
  postUnFollowUser(username: string): void {
    if (!this.getUserLogStatus()) {
      console.log('ERROR: tried to follow a user but no user logged in');
      return;
    }
    this.http.post(this.UsersURL + '/users/@' + username + '/unfollow', this.getCredentials());
  }

  /*
    logIn sets userLoggedIn.status to true and sets all userLoggedIn.credentials and userLoggedIn.user based on the supplied credentials.
  */
  logIn(creds: Credentials) {
    this.userLoggedIn.status = true;
    this.userLoggedIn.credentials = creds;
    this.http.get<User>(this.UsersURL + '/users/@' + creds.username).subscribe(result => { this.userLoggedIn.user = result; });
  }

  /*
    logOut sets everything to indicate a user is not logged in.
  */
  logOut() {
    this.userLoggedIn.status = false;
    this.userLoggedIn.credentials = undefined;
    this.userLoggedIn.user = undefined;
  }
}

export interface Log {
  status: boolean;
  credentials: Credentials;
  user: User;
}
