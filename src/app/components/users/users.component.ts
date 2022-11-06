import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { set } from '../../store/user.actions';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private store: Store<{ users: User[] }>) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users.results;
      this.store.dispatch(set({users: this.users}));
    });
  }

  editUser(user: User): void {
    console.log(user);
  }

}
