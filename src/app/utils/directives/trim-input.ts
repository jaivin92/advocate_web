import { Directive, ElementRef, HostListener, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputTrim]'
})
export class InputTrimDirective {

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private el: ElementRef,
    // eslint-disable-next-line @angular-eslint/prefer-inject
    @Optional() @Self() private control?: NgControl
  ) {}

  // Trigger when user leaves field
  @HostListener('blur')
  onBlur() {
    this.applyTrim();
  }

  private applyTrim(): void {
    const input = this.el.nativeElement as HTMLInputElement;

    if (!input || input.value == null) return;

    const trimmedValue = input.value.trim();

    // Update UI
    input.value = trimmedValue;

    // Update Angular FormControl (Reactive + Template forms)
    if (this.control?.control) {
      this.control.control.setValue(trimmedValue, {
        emitEvent: false
      });
    }
  }
}
