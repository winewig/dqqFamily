import {Directive, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[dqqTwoVerticalImagesBlock]'
})
export class TwoVerticalImagesBlockDirective implements OnInit {

  @HostBinding('style.display') display: string;
  @HostBinding('style.gridTemplateColumns') gridTemplateColumns: string;

  ngOnInit(): void {
    this.display = 'grid';
    this.gridTemplateColumns = '50% 50%';
  }

}
