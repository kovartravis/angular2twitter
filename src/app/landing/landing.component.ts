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

  private users: User[];
  private allUsers: User[];
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
    this.allUsers = this.route.snapshot.data['users'];
    this.users = this.allUsers;
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

    if (data.inputFilterUsers !== this.filter.users) {
      if (data.inputFilterUsers === '') {
        this.users = this.allUsers;
      } else {
        this.filterUsers(data.inputFilterUsers);
      }
    }
    this.filter.tweets = data.inputFilterTweets;
    this.filter.users = data.inputFilterUsers;
  }

  filterTweets (filterParam: string) {
    this.tweets = this.allTweets.filter( tweet => tweet.tags.some( label => {
                              if (label.label.startsWith(filterParam)) { return true; } else { return false; } }));
  }

  filterUsers (filterParam: string) {
    this.users = this.allUsers.filter ( user => user.username.startsWith(filterParam));
  }
}

interface Filter {
  tweets: string;
  users: string;
}
