
/* tslint:disable:no-input-rename */
import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dqqTwoVerticalImagesBlockImage]'
})
export class TwoVerticalImagesBlockImageDirective implements OnInit {
  /**
   * imageStyle: []
   * 0: rotate
   * 1: margin, for left video '0 auto 0 14%', right video '0 auto 0 7%'
   * 2: width, for video 79%
   * 3: border
   */
  @Input('dqqTwoVerticalImagesBlockImage') imageStyle: string[];

  @HostBinding('style.display') display: string;
  @HostBinding('style.margin') margin: string;
  @HostBinding('style.border') border: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.transform') transform: string;

  ngOnInit(): void {
    this.display = 'inline-block';
    this.transform = this.imageStyle[0] ? this.imageStyle[0] : 'rotate(0deg)';
    this.margin = this.imageStyle[1] ? this.imageStyle[1] : '0 20%';
    this.width = this.imageStyle[2] ? this.imageStyle[2] : '60%';
    this.border = this.imageStyle[3] ? this.imageStyle[3] : '2px solid white';
  }

}
