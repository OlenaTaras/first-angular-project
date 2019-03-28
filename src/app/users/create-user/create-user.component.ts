import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  @Output() public createdUser = new EventEmitter();
  public userName: string;
  public userAge: number;

  constructor() {}

  public onUserCreated() {
    const newUser = {
      userName: this.userName, userAge: this.userAge
    };
    this.createdUser.emit(newUser);
  }
}
