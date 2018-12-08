import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {

  private navigationsSideBarStatus = false;
  private changeNavigationBarStatus$$ = new Subject<boolean>();

  constructor() {}

  setNavigationSideBar(status: boolean) {
    this.navigationsSideBarStatus = status;
    log('NavigationBarService# ', 'The navigation sidebar status is: ', this.navigationsSideBarStatus ? 'open' : 'closed');
    this.changeNavigationBarStatus$$.next(status);
  }

  getNavigationSideBar() {
    return this.changeNavigationBarStatus$$.asObservable();
  }

  toggleNavigationSideBar() {
    this.setNavigationSideBar(!this.navigationsSideBarStatus);
  }
}
