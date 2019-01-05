/* tslint:disable:no-input-rename */
/**
 * horizontal-left: 60% 40%, left side photo, right side text
 * horizontal-right: 40% 60%, left side text, right side photo
 * horizontal-small-left: 30% 70%, left side small photo, right side more text
 * horizontal-small-right: 70% 30%, left side more text, right side small photo
 */
import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dqqOneImageTextBlock]'
})
export class OneImageTextBlockDirective implements OnInit {
  @Input('dqqOneImageTextBlock') imageDirection: string;

  @HostBinding('style.display') display: string;
  @HostBinding('style.gridTemplateColumns') gridTemplateColumns: string;

  // another way to set input value:
  // constructor(private el: ElementRef) {}
  // ngOnInit(): void {
  //   this.el.nativeElement.style.display = 'grid';
  //   this.el.nativeElement.gridTemplateColumns = this.imageDirection === 'horizontal' ? '60% 40%' : '40% 60%';
  // }

  ngOnInit(): void {
    this.display = 'grid';
    switch (this.imageDirection) {
      case 'horizontal-left':
        this.gridTemplateColumns = '60% 40%';
        break;
      case 'horizontal-right':
        this.gridTemplateColumns = '40% 60%';
        break;
      case 'horizontal-small-left':
        this.gridTemplateColumns = '30% 70%';
        break;
      case 'horizontal-small-right':
        this.gridTemplateColumns = '70% 30%';
        break;
      default:
        break;
    }
  }

}
