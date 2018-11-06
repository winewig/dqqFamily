import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavigationModule} from '../navigation-bar/navigation.module';
import {MainPageComponent} from './main-page/main-page.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    BrowserAnimationsModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageAreaModule {
}
