import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dqq-navigation-side-bar',
  templateUrl: './navigation-side-bar.component.html',
  styleUrls: ['./navigation-side-bar.component.scss']
})
export class NavigationSideBarComponent implements OnInit {
  @Input()
  showNavSidebar;

  constructor() {
  }

  ngOnInit() {
    console.log(this.showNavSidebar);
  }

}
