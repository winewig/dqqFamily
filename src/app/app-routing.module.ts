import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page-area/main-page/main-page.component';
import {ThirteenMonthComponent} from './main/thirteen-month/thirteen-month.component';

const appRoutes: Routes = [
  {path: '13month', component: ThirteenMonthComponent},
  {path: '', component: MainPageComponent},
  // Todo: page not found: { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouting {
}
