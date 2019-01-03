import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {July04Component} from './july04/july04.component';

const routes: Routes = [
  {path: 'thirteen-month/20180704', component: July04Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirteenMonthRoutingModule { }
