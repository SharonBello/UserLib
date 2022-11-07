import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { TitleOptions } from 'src/app/global/enums';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { EmailValidatorDirective } from '../../../../directives/email-validator.directive';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})

export class WelcomePageComponent implements OnInit {
  users: User[] = [];
  selectedTitle!: TitleOptions;
  submitted: boolean = false;
  public newUserForm: FormGroup;
  emailValidator = new EmailValidatorDirective();

  @Input() user!: User;
  @Output() addNewUser: EventEmitter<User> = new EventEmitter();

  title: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  streetName: string = '';
  streetNumber: number = 0;
  city: string = '';
  state: string = '';
  country: string = '';
  postcode: number = 0;
  name: string = '';
  location: string = '';

  public get TitleOptions(): typeof TitleOptions {
    return TitleOptions;
  }

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _fb: FormBuilder,
    private store: Store<{ users: User[] }>
  ) {}

  ngOnInit(): void {
    this.newUserForm = this._fb.group({
      user: this._fb.array([this.initUser()]),
    });
  }

  initUser() {
    return this._fb.group({
      first: ['', [Validators.required, Validators.minLength(3)]],
      last: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, this.emailValidator]],
      streetName: ['', Validators.required],
      streetNumber: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postcode: ['', Validators.required, Validators.pattern('^[0-9]*$')],
    });
  }

  onAddNewUser() {
    const newUser = <FormArray>this.newUserForm.get('user');
    newUser.push(this.initUser());
  }

  onSaveNewUser() {
    this.onAddNewUser();
    let newUser: User = {} as User;
    newUser.email = this.email;
    newUser.name.first = this.firstName;
    newUser.name.last = this.lastName;
    newUser.location.street.name = this.streetName;
    newUser.location.street.number = this.streetNumber;
    newUser.location.city = this.city;
    newUser.location.state = this.state;
    newUser.location.country = this.country;
    newUser.location.postcode = this.postcode;
    this.addNewUser.emit(newUser);
    return this.users.push(newUser);
  }

  onNextPage() {
    this.submitted = true;
    this.router.navigate(['/new-user/confirm-new-user']);
  }

  onCancelNewUser() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/']);
  }
}
