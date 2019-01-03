import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIndicatorComponent } from './page-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageIndicatorComponent],
  exports: [PageIndicatorComponent]
})
export class PageIndicatorModule { }
