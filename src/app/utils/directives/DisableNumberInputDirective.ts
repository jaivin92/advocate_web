import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type=number]'
})
export class DisableNumberInputDirective {

  // Disable mouse wheel
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
  }

  // Disable arrow keys
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }
}
