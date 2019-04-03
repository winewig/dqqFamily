import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from './main-page-area/main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';


const appRoutes: Routes = [
  {
    path: 'finance',
    loadChildren: './finance/finance.module#FinanceModule',
    canLoad: [AuthGuard]
  },
  {path: '', component: MainPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouting {
}
