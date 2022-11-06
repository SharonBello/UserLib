import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

  @Input() user!: User;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  email?: string = '';
  firstName: string = '';
  lastName: string = '';
  streetName: string = '';
  streetNumber!: number;
  city: string = '';
  state: string = '';
  country: string = '';
  postcode!: number;

  name: string = '';
  location: string = '';

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.email = this.user.email;
    this.firstName = this.user.name.first;
    this.lastName = this.user.name.last;
    this.streetName = this.user.location.street.name;
    this.streetNumber = this.user.location.street.number;
    this.city = this.user.location.city;
    this.state = this.user.location.state;
    this.country = this.user.location.country;
    this.postcode = this.user.location.postcode;
  }

  onSubmit() {
    console.log(this.email);

    const editedUser = this.user;
    editedUser.email = this.email;
    editedUser.name.first = this.firstName;
    editedUser.name.last = this.lastName;
    editedUser.location.street.name = this.streetName;
    editedUser.location.street.number = this.streetNumber;
    editedUser.location.city = this.city;
    editedUser.location.state = this.state;
    editedUser.location.country = this.country;
    editedUser.location.postcode = this.postcode;

    this.onEditUser.emit(editedUser);
  }
}
