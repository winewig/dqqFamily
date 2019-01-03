/* tslint:disable:no-input-rename */
import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dqqOneImageTextBlockText]'
})
export class OneImageTextBlockTextDirective implements OnInit {

  @Input('dqqOneImageTextBlockText') alignText: string;

  @HostBinding('style.textAlign') textAlign: string;
  @HostBinding('style.display') display: string;
  @HostBinding('style.justifyContent') justifyContent: string;
  @HostBinding('style.alignItems') alignItems: string;

  ngOnInit(): void {
    this.display = 'flex';
    this.justifyContent = 'center';
    this.alignItems = 'center';
    this.textAlign = this.alignText;
  }
}
