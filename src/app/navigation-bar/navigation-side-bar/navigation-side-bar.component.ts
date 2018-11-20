import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'dqq-navigation-side-bar',
  templateUrl: './navigation-side-bar.component.html',
  styleUrls: ['./navigation-side-bar.component.scss']
})
export class NavigationSideBarComponent implements OnInit {
  @Input()
  showNavSidebar;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onGoToThirteenMonth() {
    this.router.navigate(['/13month']);
  }

}
