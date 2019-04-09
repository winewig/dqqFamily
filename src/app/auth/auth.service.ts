import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';

import {DbService} from '../db.service';

interface User {
  name: string;
  pwd: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public redirectUrl: string;

  constructor(private dbService: DbService) {
    this.dbService.connectDB();
  }

  public login(username: string, password: string): Observable<boolean> {
    console.log(`The given username is: ${username}, password is: ${password}`);
    return from(this.callDbCheckLogin().then(
      usr => {
        const user = usr[0];
        this.isLoggedIn = (username === user.name) && (password === user.pwd);
        return this.isLoggedIn;
      }
    ));

  }

  // Connect the database to query the username and password.
  // Return a promise with an array from the database, which contains a object for username and password.
  private callDbCheckLogin(): Promise<User[]> {
    return this.dbService.callDBFunction('checkLogin', []);
  }

}
