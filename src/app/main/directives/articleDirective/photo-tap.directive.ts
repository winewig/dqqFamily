import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[dqqPhotoTap]'
})
export class PhotoTapDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    const article = document.querySelector('article');
    this.renderer.setStyle(article, 'opacity', '0.1');

    const div = this.renderer.createElement('div');
    const body = document.querySelector('body');
    this.renderer.appendChild(div, this.el.nativeElement);
    this.renderer.appendChild(body, div);

    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '10');
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
  }

}
