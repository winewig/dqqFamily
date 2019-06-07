import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FinanceRoutingModule } from './finance-routing.module';
import { FurniturePriorityComponent } from './furniture-priority/furniture-priority.component';
import { FurnitureBoughtListComponent } from './furniture-bought-list/furniture-bought-list.component';
import { FurnitureToBuyListComponent } from './furniture-to-buy-list/furniture-to-buy-list.component';
import { FinanceComponent } from './finance/finance.component';
import {ContractSignCancellationComponent} from './contract-sign-cancellation/contract-sign-cancellation.component';
import {FinanceDirectiveModule} from './directives/finance-directive.module';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FinanceRoutingModule,
    FinanceDirectiveModule
  ],
  declarations: [
    FurniturePriorityComponent,
    FurnitureBoughtListComponent,
    FurnitureToBuyListComponent,
    FinanceComponent,
    ContractSignCancellationComponent,
    DateFormatPipe
  ]
})
export class FinanceModule { }
