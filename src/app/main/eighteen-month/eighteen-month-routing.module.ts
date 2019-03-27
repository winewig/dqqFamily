import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Dec24Component} from './dec24/dec24.component';
import {Dec25Component} from './dec25/dec25.component';
import {Dec26Component} from './dec26/dec26.component';
import {Dec28Component} from './dec28/dec28.component';
import {Dec29Component} from './dec29/dec29.component';
import {Dec30TrainComponent} from './dec30-train/dec30-train.component';
import {Dec30HotelComponent} from './dec30-hotel/dec30-hotel.component';
import {Dec31Component} from './dec31/dec31.component';

const routes: Routes = [
  {path: 'eighteen-month/20181224', component: Dec24Component},
  {path: 'eighteen-month/20181225', component: Dec25Component},
  {path: 'eighteen-month/20181226', component: Dec26Component},
  {path: 'eighteen-month/20181228', component: Dec28Component},
  {path: 'eighteen-month/20181229', component: Dec29Component},
  {path: 'eighteen-month/20181230-on-the-road', component: Dec30TrainComponent},
  {path: 'eighteen-month/20181230-in-the-hotel', component: Dec30HotelComponent},
  {path: 'eighteen-month/20181231', component: Dec31Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EighteenMonthRoutingModule { }
