import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Profile, User } from '../user';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailErrorStateMatcher } from '../error-states';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private thisIsMyProfile: boolean;
  private user: User;
  private tweets: Tweet[];
  sub: any;

  constructor(private route: ActivatedRoute, private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.tweets = this.route.snapshot.data['tweets'];
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      if (this.username.match(this.user.username)) {
        this.thisIsMyProfile = true;
      } else {
        this.thisIsMyProfile = false;
      }
    });
  }

  openDialogEditProfile() {
    const dialogRef = this.dialog.open(ProfileEditPopupComponent, {
      width: '40vw',
      data: { profile: Object.assign({}, this.user.profile) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.userService.setProfile(result);
      this.user.profile = result;
    });
  }
}

@Component({
  selector: 'app-dialog-profile',
  templateUrl: 'popup.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileEditPopupComponent implements OnInit {

  private profile: Profile;
  private saveInitialProfile: Profile;

  private emailMatcher: ErrorStateMatcher;
  private emailFormControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<ProfileEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.profile = data.profile;
      this.saveInitialProfile = Object.assign({}, data.profile);
      this.emailMatcher = new EmailErrorStateMatcher();
      console.log(this.emailMatcher);

    }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickDiscard(): void {
    this.dialogRef.close(this.saveInitialProfile);
  }

  onClickSave(): void {
    this.dialogRef.close(this.profile);
  }

}
