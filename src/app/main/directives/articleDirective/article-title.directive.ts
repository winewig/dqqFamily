import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[dqqArticleTitle]'
})
export class ArticleTitleDirective {

  constructor(el: ElementRef) {
    const eleStyle = el.nativeElement.style;
    eleStyle.marginTop = '30px';
    eleStyle.marginBottom = '0';
    eleStyle.marginLeft = '18px';
    eleStyle.color = 'rgba(0, 0, 0, 0.8)';
  }

}
