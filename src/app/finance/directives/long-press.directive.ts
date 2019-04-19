import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[dqqLongPress]'
})
export class LongPressDirective {


  private timeoutId: number = null;
  private intervalId: number = null;

  private isLongPressing: boolean;
  private isPressing: boolean;

  @Output() longPressed = new EventEmitter();
  @Output() longPressing = new EventEmitter();

  @Input() timeout = 300;

  @HostBinding('class.press')
  get press() {
    return this.isPressing;
  }

  @HostBinding('class.long-press')
  get longPress() {
    return this.isLongPressing;
  }

  @HostListener('touchstart', ['$event'])
  public onMouseDown(event) {
    this.isPressing = true;
    this.isLongPressing = false;

    this.timeoutId = (<any> window).setTimeout(() => {
      this.isLongPressing = true;
      this.longPressed.emit(event);

      this.intervalId = (<any> window).setInterval(() => {
        this.longPressing.emit(event);
      }, 30);
    }, this.timeout);
  }

  @HostListener('touchend', ['$event'])
  public onMouseLeave() {
    this.endPress();
  }

  private endPress() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }

    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }

    this.isLongPressing = false;
    this.isPressing = false;
  }

}
