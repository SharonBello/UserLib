import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Store } from '@ngrx/store';
import { set } from './store/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[] = [];
  
  constructor(
    private userService: UserService,
    private store: Store<{ users: User[] }>
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users.results;
      this.store.dispatch(set({ users: this.users }));
    });
    window.addEventListener('scroll', this.scrollEvent, true); 
  }

  scrollEvent = (event: any): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
  }
}
