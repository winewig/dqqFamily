import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticleTitleDirective} from './article-title.directive';
import {ArticleSubtitleDateDirective} from './article-subtitle-date.directive';
import {OneImageTextBlockDirective} from './one-image-text-block.directive';
import {OneImageTextBlockImageDirective} from './one-image-text-block-image.directive';
import {TwoVerticalImagesBlockDirective} from './two-vertical-images-block.directive';
import {TwoVerticalImagesBlockImageDirective} from './two-vertical-images-block-image.directive';
import {OneImageTextBlockTextDirective} from './one-image-text-block-text.directive';
import {PhotoTapDirective} from './photo-tap.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticleTitleDirective,
    ArticleSubtitleDateDirective,
    OneImageTextBlockDirective,
    OneImageTextBlockImageDirective,
    TwoVerticalImagesBlockDirective,
    TwoVerticalImagesBlockImageDirective,
    OneImageTextBlockTextDirective,
    PhotoTapDirective
  ],
  exports: [
    ArticleTitleDirective,
    ArticleSubtitleDateDirective,
    OneImageTextBlockDirective,
    OneImageTextBlockImageDirective,
    TwoVerticalImagesBlockDirective,
    TwoVerticalImagesBlockImageDirective,
    OneImageTextBlockTextDirective,
    PhotoTapDirective
  ],
})
export class ArticleDirectivesModule { }
