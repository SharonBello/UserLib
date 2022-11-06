import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  @Input() user!:User;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  email: string = "";
  firstname: string = "";

  name: string = '';
  location: string = '';

  constructor() {}

  ngOnInit(): void {
    this.email = this.user.email;
    this.firstname = this.user.name.first;
  }
  onSubmit() {
    console.log(this.email);

    const editedUser = this.user;
    editedUser.email = this.email;

    this.onEditUser.emit(editedUser);
  }
}
