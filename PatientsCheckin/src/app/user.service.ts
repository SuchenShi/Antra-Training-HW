import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  user: User = {
    dob: '1995-05-5',
    zip: '19131',
  };
  constructor() {}
  findUser(data: User) {
    if (data.dob === this.user.dob && data.zip === this.user.zip) {
      console.log('User appointment exists!');
    } else {
      console.log(data, 'do not exist');
    }
  }
}
