import {
  Component,
  OnInit
} from '@angular/core';
import { User } from '../user-model';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersData: any = {};
  public selectedUser: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((users) => {this.usersData = users});
  }

  public onUserClicked(user: any) {
    this.selectedUser = user;
  }

  public onUserCreated(event: any) {
    console.log(event);
  }
}
