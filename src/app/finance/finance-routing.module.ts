import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FurniturePriorityComponent} from './furniture-priority/furniture-priority.component';

const routes: Routes = [
  {
    path: '',
    component: FurniturePriorityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
