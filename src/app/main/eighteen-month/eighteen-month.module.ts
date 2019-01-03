import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EighteenMonthRoutingModule} from './eighteen-month-routing.module';
import {ArticleDirectivesModule} from '../directives/articleDirective/article-directives.module';

import {Dec24Component} from './dec24/dec24.component';
import {Dec25Component} from './dec25/dec25.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleDirectivesModule,
    EighteenMonthRoutingModule,
  ],
  declarations: [
    Dec24Component,
    Dec25Component
  ]
})

export class EighteenMonthModule { }
