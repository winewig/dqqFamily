import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public redirectUrl: string;

  constructor() { }

  public login(username: string, password: string): Observable<boolean> {
    console.log(`The given username is: ${username}, password is: ${password}`);
    this.isLoggedIn = ((username === 'dqq') && (password === '123'));
    return of(this.isLoggedIn);
  }

  public logout(): Observable<boolean> {
    this.isLoggedIn = false;
    return of(this.isLoggedIn);
  }
}
