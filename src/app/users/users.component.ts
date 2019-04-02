import {
  Component,
  OnInit
} from '@angular/core';
import { User } from '../user-model';
import { usersData } from './users';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersData: any = usersData;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((users) => console.log(users));
  }

}
