import {
  Component,
  OnInit
} from '@angular/core';
import { User } from '../user-model';
import { usersData } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersData: any = usersData;

  constructor() {
  }

  ngOnInit() {
  }

}
