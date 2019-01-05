import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EighteenMonthRoutingModule} from './eighteen-month-routing.module';
import {ArticleDirectivesModule} from '../directives/articleDirective/article-directives.module';

import {Dec24Component} from './dec24/dec24.component';
import {Dec25Component} from './dec25/dec25.component';
import { Dec26Component } from './dec26/dec26.component';
import { Dec28Component } from './dec28/dec28.component';
import { Dec29Component } from './dec29/dec29.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleDirectivesModule,
    EighteenMonthRoutingModule,
  ],
  declarations: [
    Dec24Component,
    Dec25Component,
    Dec26Component,
    Dec28Component,
    Dec29Component
  ]
})

export class EighteenMonthModule { }
