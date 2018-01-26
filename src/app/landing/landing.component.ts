import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Tweet } from '../tweet';
import { ActivatedRoute } from '@angular/router';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private users: User;
  private tweets: Tweet[];
  private allTweets: Tweet[];
  private form: FormGroup;
  private filter: Filter;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      inputFilterTweets: '',
      inputFilterUsers: ''
    });

    this.filter = { tweets: '', users: '' };
    this.form.valueChanges.subscribe( data => this.filterData(data) );
  }

  ngOnInit() {
    this.allTweets = this.route.snapshot.data['tweets'];
    this.tweets = this.allTweets;
    this.users = this.route.snapshot.data['users'];
  }

  filterData( data ) {
    console.log(data);
    if (data.inputFilterTweets !== this.filter.tweets) {
      if (data.inputFilterTweets === '') {
        this.tweets = this.allTweets;
      } else {
        this.filterTweets(data.inputFilterTweets);
      }
    }
    this.filter.tweets = data.inputFilterTweets;
  }

  filterTweets (filterParam: string) {
    this.tweets = this.allTweets.filter( tweet => tweet.tags.some( label => {
                              if (label.label.startsWith(filterParam)) { return true; } else { return false; } }));
  }
}

interface Filter {
  tweets: string;
  users: string;
}
