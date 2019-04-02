import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'dqq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  @ViewChild('username') userName: ElementRef;
  @ViewChild('password') password: ElementRef;

  private loginSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  public userInfoPreCheck() {

    const userName = this.userName.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.loginSubscription = this.authService.login('dqq', '123').subscribe( // TODO change backto userName password
      isLoggedIn => {
        console.log(`The user is logged in: ${isLoggedIn}`);
        if (isLoggedIn) {
          // redirectUrl in the authService is set, if authGuard has been checked.
          // In this case means, if the user go to page from the navigation bar.
          // 'canLoad' is activated,then the path from the click is transferred.
          // If the user direct goes to login page from url, then path is undefined.
          const redirect = !!this.authService.redirectUrl ? this.authService.redirectUrl : '/finance';
          this.router.navigate([redirect]);
        } else {
          // stay on the page
        }
      }
    );

  }

  ngOnDestroy(): void {
    // only the user tries to login, then unsubscribe the login observable
    if (!!this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

}
