import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {User} from '../user-model';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersData: any = {};
  public selectedUser: any;

  constructor(private usersService: UsersService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getData();
  }

  public onUserClicked(user: any) {
    this.selectedUser = user;
    this.usersService.getUserById(user._id).subscribe();
  }

  public onUserCreated(user: any) {
    this.usersService.createUser(user).subscribe(
      (response) => {
        console.log(response);
        this.getData();
      }
    );
  }

  private getData() {
    this.usersService.getAllUsers()
      .subscribe((users) => {
          this.usersData = users;
          this.cdRef.markForCheck();
        },
        (err) => console.log(err));
  }
}
