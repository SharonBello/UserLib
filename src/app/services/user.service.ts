import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/?results=10';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ info: object; results: User[] }> {
    return this.http.get<{ info: object; results: User[] }>(this.apiUrl);
  }
}
