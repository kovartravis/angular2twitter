import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';

@Injectable()
export class UserResolve implements Resolve<User> {
    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<User> {
        const username = route.params['username'];
        return this.userService.getUserWithPromise(username).then( result => result );
    }
}
