import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { AppConfig } from './app.config';
import { Hashtag } from './hashtag';
import { Tweet } from './tweet';

@Injectable()
export class HashtagService {
  private hashtagsUrl = `${AppConfig.API_URL}/tags`;

  constructor(private http: HttpClient) { }

  private log(message: string, ...args) {
    console.log('HashtagService: ' + message, ...args);
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
  /** GET: get all tags */
  getHashtags(): Observable<Hashtag[]> {
    return this.http.get<Hashtag[]>(this.hashtagsUrl)
      .pipe(
        tap(result => this.log('fetched hashtags')),
        catchError(this.handleError('getHashtags', []))
      );
  }
  /** GET: get all tweets with a given tag */
  getTweetsWithTag(label: string): Observable<Tweet[]> {
    const url = `${this.hashtagsUrl}/${label}`;
    return this.http.get<Tweet[]>(url)
      .pipe(
        tap(result => this.log(`fetched tweets with tag '${label}'`)),
        catchError(this.handleError('getTweetsWithTag', []))
      );
  }

}
