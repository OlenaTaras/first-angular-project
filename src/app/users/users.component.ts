import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersData: any = {};
  public selectedUser: any;

  constructor(private usersService: UsersService,
              private cdRef: ChangeDetectorRef,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.getData();
    this.router.params.subscribe((resp) => {
      console.log(resp);
    });
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
