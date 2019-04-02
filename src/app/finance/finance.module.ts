import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FurniturePriorityComponent } from './furniture-priority/furniture-priority.component';
import { FurnitureBoughtListComponent } from './furniture-bought-list/furniture-bought-list.component';
import { FurnitureToBuyListComponent } from './furniture-to-buy-list/furniture-to-buy-list.component';
import { FinanceComponent } from './finance/finance.component';

@NgModule({
  imports: [
    CommonModule,
    FinanceRoutingModule
  ],
  declarations: [FurniturePriorityComponent, FurnitureBoughtListComponent, FurnitureToBuyListComponent, FinanceComponent]
})
export class FinanceModule { }
