import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  currentNewUserStep: User = {} as User;
  newUser!: User;

  constructor() { }

}