import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NavigationBarService} from './navigation-bar.service';

@Component({
  selector: 'dqq-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  showNavSidebar$: Observable<boolean>;

  constructor(private navigationBarService: NavigationBarService) {
  }

  ngOnInit() {
    this.showNavSidebar$ = this.navigationBarService.getNavigationSideBar();
  }

  toggleNavigationSideBar() {
    this.navigationBarService.toggleNavigationSideBar();
  }

}
