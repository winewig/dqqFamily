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
    this.margin = this.imageDirection === 'horizontal' ? '0 5%' : '0 0 0 10%';
    this.border = '3px solid white';
    this.width = '90%';
  }

}
