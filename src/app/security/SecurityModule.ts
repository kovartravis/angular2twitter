import { NgModule } from '@angular/core';
import { authHttpServiceFactory } from './httpAuthFactory';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
      {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [Http]
      },
    ]
  })
  export class SecurityModule {
}
