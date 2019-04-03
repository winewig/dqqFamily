import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FurniturePriorityComponent} from './furniture-priority/furniture-priority.component';
import {AuthGuard} from '../auth/auth.guard';
import {FurnitureBoughtListComponent} from './furniture-bought-list/furniture-bought-list.component';
import {FurnitureToBuyListComponent} from './furniture-to-buy-list/furniture-to-buy-list.component';
import {FinanceComponent} from './finance/finance.component';
import {ContractSignCancellationComponent} from './contract-sign-cancellation/contract-sign-cancellation.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'bought-list', component: FurnitureBoughtListComponent},
          {path: 'to-buy-list', component: FurnitureToBuyListComponent},
          {path: 'contract-sign-cancellation', component: ContractSignCancellationComponent},
          {path: '', component: FurniturePriorityComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
