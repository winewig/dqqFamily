import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FurniturePriorityComponent } from './furniture-priority/furniture-priority.component';

@NgModule({
  imports: [
    CommonModule,
    FinanceRoutingModule
  ],
  declarations: [FurniturePriorityComponent]
})
export class FinanceModule { }
