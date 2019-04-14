import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FurniturePriorityComponent } from './furniture-priority/furniture-priority.component';
import { FurnitureBoughtListComponent } from './furniture-bought-list/furniture-bought-list.component';
import { FurnitureToBuyListComponent } from './furniture-to-buy-list/furniture-to-buy-list.component';
import { FinanceComponent } from './finance/finance.component';
import {ContractSignCancellationComponent} from './contract-sign-cancellation/contract-sign-cancellation.component';
import {FinanceDirectiveModule} from './directives/finance-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FinanceRoutingModule,
    FinanceDirectiveModule
  ],
  declarations: [
    FurniturePriorityComponent,
    FurnitureBoughtListComponent,
    FurnitureToBuyListComponent,
    FinanceComponent,
    ContractSignCancellationComponent
  ]
})
export class FinanceModule { }