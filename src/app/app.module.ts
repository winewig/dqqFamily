import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageAreaModule} from './main-page-area/main-page-area.module';
import {AppRouting} from './app-routing.module';
import {MainModule} from './main/main.module';
import {NavigationModule} from './navigation-bar/navigation.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {PageIndicatorModule} from './page-indicator/page-indicator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainPageAreaModule,
    MainModule,
    AppRouting,
    NavigationModule,
    PageIndicatorModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
