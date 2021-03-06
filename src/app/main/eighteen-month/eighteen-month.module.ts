import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EighteenMonthRoutingModule} from './eighteen-month-routing.module';
import {ArticleDirectivesModule} from '../directives/articleDirective/article-directives.module';

import {Dec24Component} from './dec24/dec24.component';
import {Dec25Component} from './dec25/dec25.component';
import { Dec26Component } from './dec26/dec26.component';
import { Dec28Component } from './dec28/dec28.component';
import { Dec29Component } from './dec29/dec29.component';
import { Dec30TrainComponent } from './dec30-train/dec30-train.component';
import { Dec30HotelComponent } from './dec30-hotel/dec30-hotel.component';
import { Dec31Component } from './dec31/dec31.component';
import {PageIndicatorModule} from '../../page-indicator/page-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleDirectivesModule,
    PageIndicatorModule,
    EighteenMonthRoutingModule,
  ],
  declarations: [
    Dec24Component,
    Dec25Component,
    Dec26Component,
    Dec28Component,
    Dec29Component,
    Dec30TrainComponent,
    Dec30HotelComponent,
    Dec31Component
  ]
})

export class EighteenMonthModule { }
