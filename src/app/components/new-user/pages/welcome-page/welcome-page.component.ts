import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { User } from '../../../../interfaces/user';

import { TitleOptions } from 'src/app/global/enums';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  selectedTitle!: TitleOptions;
  submitted: boolean = false;

  @Input() user!: User;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();

  name: string = '';

  title?: string = '';
  firstName: string = '';
  lastName: string = '';
  email?: string = '';

  public get TitleOptions(): typeof TitleOptions {
    return TitleOptions;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = this.user.name.title;
    this.firstName = this.user.name.first;
    this.lastName = this.user.name.last;
    this.email = this.user.email;
  }

  onNextPage() {
    this.submitted = true;

    const newUser = this.user;
    // newUser.name.title = this.user.name.title;
    // newUser.name.first = this.user.name.firstName;
    // newUser.name.last = this.user.name.last;
    // newUser.email = this.user.email;

    this.router.navigate(['/new-user/user-info-input']);
  }
}
