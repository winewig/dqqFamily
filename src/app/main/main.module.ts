import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThirteenMonthModule} from './thirteen-month/thirteen-month.module';
import {EighteenMonthModule} from './eighteen-month/eighteen-month.module';

@NgModule({
  imports: [
    CommonModule,
    ThirteenMonthModule,
    EighteenMonthModule
  ],
  declarations: [],
})
export class MainModule { }
