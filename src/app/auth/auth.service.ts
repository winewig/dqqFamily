import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';

import {client} from '../finance/finance-services/db-furniture-priority.service';
import AnonymousCredential from 'mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential';

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

  constructor() {
    this.connectDB();
  }

  public login(username: string, password: string): Observable<boolean> {
    console.log(`The given username is: ${username}, password is: ${password}`);
    return from(this.callDbCheckLogin().then(
      usr => {
        const user = usr[0];
        console.log(JSON.stringify(user));
        this.isLoggedIn = (username === user.name) && (password === user.pwd);
        return this.isLoggedIn;
      }
    ));

  }

  // Connect the database to query the username and password.
  // Return a promise with an array from the database, which contains a object for username and password.
  private callDbCheckLogin(): Promise<User[]> {
    return client.callFunction('checkLogin', []);
  }

  private connectDB() {
    client.auth.loginWithCredential(new AnonymousCredential()).then(
      usr => {
        console.log(`logged in anonymously as user ${usr.id}`);
        return Promise.resolve(usr);
      }
    );
  }
  
}
