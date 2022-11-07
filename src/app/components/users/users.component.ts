import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private store: Store<{ data: {users: User[]} }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.users = state.data.users;
    });
  }

  editUser(user: User): void {
    console.log(user);
  }
}
