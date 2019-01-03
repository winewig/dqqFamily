/* tslint:disable:no-input-rename */
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
    this.gridTemplateColumns = this.imageDirection === 'horizontal' ? '60% 40%' : '30% 70%';
  }

}
