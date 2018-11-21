import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NavigationBarService} from '../navigation-bar.service';

@Component({
  selector: 'dqq-navigation-side-bar',
  templateUrl: './navigation-side-bar.component.html',
  styleUrls: ['./navigation-side-bar.component.scss']
})
export class NavigationSideBarComponent implements OnInit {

  constructor(private router: Router, private navigationBarService: NavigationBarService) {
  }

  ngOnInit() {
  }

  onGoToThirteenMonth() {
    this.router.navigate(['/13month']);
    this.navigationBarService.setNavigationSideBar(false);
  }

}
