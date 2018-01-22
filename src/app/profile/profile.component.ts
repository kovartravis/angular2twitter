import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Profile } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private thisIsMyProfile: boolean;
  private profile: Profile
  sub: any;

  constructor(private route: ActivatedRoute, private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      if(this.username.match(this.userService.getUsername())){
        this.thisIsMyProfile = true;
        this.profile = this.userService.getProfile();
      }else{
        this.thisIsMyProfile = false;
      }
    })
  }

  openDialogEditProfile(){
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { profile: this.profile }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      //this.profile = result;
    });
  }

  clickFollow(){
    console.log('this needs to check whether you are following them or not')
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'popup.component.html'
})
export class DialogOverviewExampleDialog {

  private profile: Profile;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.profile = data.profile;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.dialogRef.close(this.profile);
  }

}
