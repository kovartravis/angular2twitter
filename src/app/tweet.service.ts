import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from './app.config';
import { Tweet } from './tweet';
import { TweetDto } from './tweet-dto';

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
  // temporary hard-coded credentials
  credentials = {username: 'cbrugger0', password: 'password'};

  constructor(private http: HttpClient) { }

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
  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrl)
      .pipe(
        tap(() => this.log('fetched tweets')),
        catchError(this.handleError('getTweets', []))
      );
  }
  /** POST: add a new tweet */
  addTweet (content: string): Observable<Tweet> {
    const tweetDto: TweetDto = {
      credentials: this.credentials,
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
    const url = `${this.tweetsUrl}/${id}/like`;
    return this.http.post(url, this.credentials, httpOptions)
      .pipe(
        tap(() => this.log(`liked tweet id=${id}`)),
        catchError(this.handleError<Tweet>('likeTweet'))
      );
  }

}
