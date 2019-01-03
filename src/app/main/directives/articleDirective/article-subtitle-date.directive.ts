import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[dqqArticleSubtitleDate]'
})
export class ArticleSubtitleDateDirective {

  constructor(el: ElementRef) {
    const eleStyle = el.nativeElement.style;
    eleStyle.marginTop = '0';
    eleStyle.marginLeft = '24px';
    eleStyle.color = 'rgba(0, 0, 0, 0.54)';
  }

}
