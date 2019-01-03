import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationBarService} from '../navigation-bar.service';

@Component({
  selector: 'dqq-navigation-side-bar',
  templateUrl: './navigation-side-bar.component.html',
  styleUrls: ['./navigation-side-bar.component.scss']
})
export class NavigationSideBarComponent implements OnInit {
  private homepage = [''];
  private firstDayOfThirteenMonth = ['thirteen-month/20180704'];
  // TODO: Change the correct first day of eight month
  private firstDayOfEighteenMonth = ['eighteen-month/20181224'];


  constructor(private router: Router, private navigationBarService: NavigationBarService) {
  }

  ngOnInit() {
  }

  onGoToThirteenMonth() {
    this.navigateToPage(this.firstDayOfThirteenMonth);
  }

  onGoToEighteenMonth() {
    this.navigateToPage(this.firstDayOfEighteenMonth);
  }

  onGoHomepage() {
    this.navigateToPage(this.homepage);
  }

  navigateToPage(page: Array<String>) {
    this.router.navigate(page).then(
      () => this.closeNavigationSidebar()
    );
  }

  closeNavigationSidebar() {
    this.navigationBarService.setNavigationSideBar(false);
  }
}
