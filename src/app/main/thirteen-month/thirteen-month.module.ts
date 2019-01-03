import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThirteenMonthRoutingModule} from './thirteen-month-routing.module';


import {July04Component} from './july04/july04.component';
import {ArticleDirectivesModule} from '../directives/articleDirective/article-directives.module';

@NgModule({
  imports: [
    CommonModule,
    ThirteenMonthRoutingModule,
    ArticleDirectivesModule
  ],
  declarations: [
    July04Component
  ]
})
export class ThirteenMonthModule { }
