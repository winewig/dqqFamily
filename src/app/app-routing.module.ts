import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page-area/main-page/main-page.component';
import {ThirteenMonthComponent} from './main/thirteen-month/thirteen-month.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: '13month', component: ThirteenMonthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouting {
}
