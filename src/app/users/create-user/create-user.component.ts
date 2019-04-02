import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  @Output() public createdUser = new EventEmitter();
  public fullName: string;
  public userAge: string;
  public surname: string;

  constructor() {}

  public onUserCreated() {
    const newUser = {
      fullname: this.fullName, surname: this.surname, age: this.userAge
    };
    this.createdUser.emit(newUser);
  }
}
