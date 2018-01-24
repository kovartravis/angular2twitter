import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from './app.config';
import { Tweet } from './tweet';
import { TweetDto } from './tweet-dto';
import {User} from './user';
import {Hashtag} from './hashtag';
import {Context} from './context';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface Credentials {
  username: string;
  password: string;
}

@Injectable()
export class TweetService {
  private tweetsUrl = `${AppConfig.API_URL}/tweets`;

  constructor(private http: HttpClient, private userService: UserService) { }

  private log(message: string) {
    console.log('TweetService: ' + message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Log error to console
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** GET: get all tweets */
  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrl)
      .pipe(
        tap(() => this.log('fetched tweets')),
        catchError(this.handleError('getTweets', []))
      );
  }
  /** POST: add a new tweet */
  addTweet (content: string): Observable<Tweet> {
    if (this.userService.getUserLogStatus()) {
      console.log('ERROR: tried to tweet but no user logged in');
      return undefined;
    }
    const tweetDto: TweetDto = {
      credentials: this.userService.getCredentials(),
      content
    };
    return this.http.post<Tweet>(this.tweetsUrl, tweetDto, httpOptions)
      .pipe(
        tap((tweet: Tweet) => this.log(`added tweet id=${tweet.id}`)),
        catchError(this.handleError<Tweet>('addTweet'))
      );
  }
  /** GET tweet by id. Will 404 if id not found */
  getTweet(id: number): Observable<Tweet> {
    const url = `${this.tweetsUrl}/${id}`;
    return this.http.get<Tweet>(url)
      .pipe(
        tap( tweet => this.log(`fetched tweet id=${tweet.id}`)),
        catchError(this.handleError<Tweet>(`getTweet id=${id}`))
      );
  }
  /** DELETE tweet by id. */
  deleteTweet(id: number): Observable<Tweet> {
    const url = `${this.tweetsUrl}/${id}`;
    return this.http.delete<Tweet>(url)
      .pipe(
        tap( tweet => this.log(`deleted tweet id=${tweet.id}`)),
        catchError(this.handleError<Tweet>(`deleteTweet id=${id}`))
      );
  }
  /** POST: like a tweet */
  likeTweet (id: number): Observable<any> {
    if (this.userService.getUserLogStatus()) {
      console.log('ERROR: tried to like tweet but no user logged in');
      return undefined;
    }
    const url = `${this.tweetsUrl}/${id}/like`;
    return this.http.post(url, this.userService.getCredentials(), httpOptions)
      .pipe(
        tap(() => this.log(`liked tweet id=${id}`)),
        catchError(this.handleError<Tweet>('likeTweet'))
      );
  }
  /** POST: reply to a tweet */
  replyToTweet (id: number, content: string): Observable<Tweet> {
    if (this.userService.getUserLogStatus()) {
      console.log('ERROR: tried to reply to tweet but no user logged in');
      return undefined;
    }
    const url = `${this.tweetsUrl}/${id}/reply`;
    const tweetDto: TweetDto = {
      credentials: this.userService.getCredentials(),
      content
    };
    return this.http.post<Tweet>(url, tweetDto, httpOptions)
      .pipe(
        tap((tweet: Tweet) => this.log(`replied to tweet, reply id=${tweet.id}`)),
        catchError(this.handleError<Tweet>('replyToTweet'))
      );
  }
  /** POST: repost a tweet */
  repostTweet (id: number): Observable<Tweet> {
    if (this.userService.getUserLogStatus()) {
      console.log('ERROR: tried to repost tweet but no user logged in');
      return undefined;
    }
    const url = `${this.tweetsUrl}/${id}/repost`;
    return this.http.post<Tweet>(url, this.userService.getCredentials(), httpOptions)
      .pipe(
        tap((tweet: Tweet) => this.log(`replosted tweet, repost id=${tweet.id}`)),
        catchError(this.handleError<Tweet>('repostTweet'))
      );
  }
  /** GET: get all replies for a tweets */
  getReplies(id: number): Observable<Tweet[]> {
    const url = `${this.tweetsUrl}/${id}/replies`;
    return this.http.get<Tweet[]>(url)
      .pipe(
        tap(() => this.log('fetched replies')),
        catchError(this.handleError<Tweet[]>('getReplies', []))
      );
  }
  /** GET: get all reposts for a tweets */
  getReposts(id: number): Observable<Tweet[]> {
    const url = `${this.tweetsUrl}/${id}/reposts`;
    return this.http.get<Tweet[]>(url)
      .pipe(
        tap(() => this.log('fetched reposts')),
        catchError(this.handleError<Tweet[]>('getReposts', []))
      );
  }
  /** GET: get all likes (users) for a tweets */
  getLikes(id: number): Observable<User[]> {
    const url = `${this.tweetsUrl}/${id}/likes`;
    return this.http.get<User[]>(url)
      .pipe(
        tap(() => this.log('fetched likes')),
        catchError(this.handleError<User[]>('getLikes', []))
      );
  }
  /** GET: get all mentions (users) for a tweets */
  getMentions(id: number): Observable<User[]> {
    const url = `${this.tweetsUrl}/${id}/mentions`;
    return this.http.get<User[]>(url)
      .pipe(
        tap(() => this.log('fetched mentions')),
        catchError(this.handleError<User[]>('getMentions', []))
      );
  }
  /** GET: get all tags associated with a tweets */
  getTags(id: number): Observable<Hashtag[]> {
    const url = `${this.tweetsUrl}/${id}/tags`;
    return this.http.get<Hashtag[]>(url)
      .pipe(
        tap(() => this.log('fetched tags')),
        catchError(this.handleError<Hashtag[]>('getTags', []))
      );
  }
  /** GET: get context for a tweets */
  getContext(id: number): Observable<Context> {
    const url = `${this.tweetsUrl}/${id}/context`;
    return this.http.get<Context>(url)
      .pipe(
        tap(() => this.log('fetched context')),
        catchError(this.handleError<Context>('getContext'))
      );
  }

}
