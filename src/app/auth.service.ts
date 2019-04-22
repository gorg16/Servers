import { Injectable } from '@angular/core';
import {User} from './servers/user.modal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }


public users: User[] = [
  new User(
    'narek',
    'narek@narek',
    '1111111'
  ),
  new User(
    'gor',
    'gor@gor',
    '1111111'
  )
];

  getUsers() {
    return this.users.slice();
  }


  getUser(index: number) {
    return this.users[index];
  }

}
