import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultNumber',
  standalone: true,
})
export class DefaultNumberPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) return '';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }
}
