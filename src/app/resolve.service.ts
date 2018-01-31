import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { Tweet } from './tweet';
import { TweetService } from './tweet.service';
import { Hashtag } from './hashtag';
import { HashtagService } from './hashtag.service';

@Injectable()
export class UserResolve implements Resolve<User> {
    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<User> {
        const username = route.params['username'];
        return this.userService.getUserWithPromise(username).then( result => result );
    }
}

@Injectable()
export class AllUserResolve implements Resolve<User[]> {
    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<User[]> {
        return this.userService.getAllUsers().toPromise().then( result => result );
    }
}

@Injectable()
export class TweetResolve implements Resolve<Tweet[]> {
    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Tweet[]> {
        const username = route.params['username'];
        return this.userService.getTweets(username).toPromise().then( result => result );
    }
}

@Injectable()
export class AllTweetResolve implements Resolve<Tweet[]> {
    constructor(private router: Router, private tweetService: TweetService) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Tweet[]> {
        return this.tweetService.getTweets().toPromise().then( result => result );
    }
}

@Injectable()
export class MentionResolve implements Resolve<Tweet[]> {
    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Tweet[]> {
        const username = route.params['username'];
        return this.userService.getMentions(username).toPromise().then( result => result );
    }
}

@Injectable()
export class LikesResolve implements Resolve<Tweet[]> {
    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Tweet[]> {
        const username = route.params['username'];
        return this.userService.getLikes(username).toPromise().then( result => result );
    }
}

@Injectable()
export class FollowersResolve implements Resolve<User[]> {
  constructor(private userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<User[]> {
    const username = route.params['username'];
    return this.userService.getFollowers(username).toPromise().then( result => result );
  }
}

@Injectable()
export class FollowingResolve implements Resolve<User[]> {
  constructor(private userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<User[]> {
    const username = route.params['username'];
    return this.userService.getFollowing(username).toPromise().then( result => result );
  }
}

@Injectable()
export class HashtagsResolve implements Resolve<Hashtag[]> {
  constructor(private hashtagService: HashtagService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Hashtag[]> {
    return this.hashtagService.getHashtags().toPromise().then( result => result );
  }
}

@Injectable()
export class TweetsWithTagResolve implements Resolve<Tweet[]> {
  constructor(private hashtagService: HashtagService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Tweet[]> {
    const label = route.params['label'];
    return this.hashtagService.getTweetsWithTag(label).toPromise().then( result => result );
  }
}
