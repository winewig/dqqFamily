import {Component, Input, OnInit} from '@angular/core';
import {log} from 'util';

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
    log(this.showNavSidebar);
  }

}
