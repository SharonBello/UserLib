import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  faEdit = faEdit;
  showEditUser = false;

  constructor() {}

  ngOnInit(): void {}

  onEdit(user: User): void {
    this.onEditUser.emit(user);
    this.showEditUser = !this.showEditUser;
  }

  editUser(user: User): void {
    console.log(user);
    //TODO: send action to save user to store users
  }

}
