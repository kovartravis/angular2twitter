import { Component, OnInit } from '@angular/core';
import { Hashtag } from '../hashtag';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Tweet } from '../tweet';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  hashtags: Hashtag[];
  tweets: Tweet[];
  stateCtrl: FormControl;
  filteredHashtags: Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.hashtags = this.route.snapshot.data['hashtags'];
          this.tweets = this.route.snapshot.data['tweets'];
        }
      });
    this.stateCtrl = new FormControl();
    this.filteredHashtags = this.stateCtrl.valueChanges
      .pipe(
        map(state => state ? this.filterHashtags(state) : this.hashtags.slice())
      );
  }

  ngOnInit() { }

  filterHashtags(label: string) {
    return this.hashtags.filter(tag =>
      tag.label.toLowerCase().indexOf(label.toLowerCase()) === 0);
  }

  onTagSelected(label: string) {
    this.router.navigateByUrl(`/hashtag/${label}`);
  }

}
