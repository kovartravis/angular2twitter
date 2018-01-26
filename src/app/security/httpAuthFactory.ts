import { Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http) {
    return new AuthHttp(new AuthConfig({
      headerPrefix: 'Bearer',
      tokenName: 'token',
      globalHeaders: [{'Content-Type': 'application/json'}],
      noJwtError: false,
      noTokenScheme: true,
      tokenGetter: (() => localStorage.getItem('token'))
    }), http);
  }
