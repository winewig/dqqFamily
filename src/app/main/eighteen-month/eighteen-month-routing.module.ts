import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Dec24Component} from './dec24/dec24.component';
import {Dec25Component} from './dec25/dec25.component';

const routes: Routes = [
  {path: 'eighteen-month/20181224', component: Dec24Component},
  {path: 'eighteen-month/20181225', component: Dec25Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EighteenMonthRoutingModule { }
