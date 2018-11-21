import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {

  private changeNavigationBarStatus$$ = new Subject<Boolean>();

  constructor() {}

  setNavigationSideBar(status: boolean) {
    this.changeNavigationBarStatus$$.next(status);
  }

  getNavigationSideBar() {
    return this.changeNavigationBarStatus$$.asObservable();
  }
}
