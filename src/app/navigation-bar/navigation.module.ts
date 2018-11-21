import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavigationBarComponent} from './navigation-bar.component';
import {NavigationSideBarComponent} from './navigation-side-bar/navigation-side-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationBarComponent, NavigationSideBarComponent],
  exports: [NavigationBarComponent]
})
export class NavigationModule {
}
