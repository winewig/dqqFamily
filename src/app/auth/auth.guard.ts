import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const url = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute,state);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const directToUrl = `/${route.path}`;
    return this.checkLogin(directToUrl);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for directing
    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }

}
