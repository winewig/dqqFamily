/* tslint:disable:no-input-rename */
import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dqqOneImageTextBlockImage]'
})
export class OneImageTextBlockImageDirective implements OnInit {
  @Input('dqqOneImageTextBlockImage') imageDirection: string;

  @HostBinding('style.display') display: string;
  @HostBinding('style.margin') margin: string;
  @HostBinding('style.border') border: string;
  @HostBinding('style.width') width: string;

  // constructor(el: ElementRef) {
  //   const eleStyle = el.nativeElement.style;
  //   eleStyle.display = 'inline-block';
  //   eleStyle.margin = '0 5%';
  //   eleStyle.border = '1px solid white';
  //   eleStyle.width = '90%';
  // }

  ngOnInit(): void {
    this.display = 'inline-block';
    this.border = '3px solid white';
    this.width = '90%';
    this.margin = this.imageDirection === 'horizontal' ? '0 5%' : '0 0 0 10%';
    switch (this.imageDirection) {
      case 'horizontal-left':
        this.margin = '0 0 0 10%';
        break;
      case 'horizontal-right':
        this.margin = '0 10% 0 0';
        break;
      case 'horizontal':
        this.margin = '0 5%';
        break;
      default:
        break;
    }
  }

}
