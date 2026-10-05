import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultDate',
  standalone: true,
})
export class DefaultDatePipe implements PipeTransform {
  transform(value: Date | string | number | null | undefined, format: 'default' | 'mmyy' = 'default'): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) return '';

    const day = String(date.getDate()).padStart(2, '0');
    const monthShort = date.toLocaleString('en-US', { month: 'short' });
    const month2 = String(date.getMonth() + 1).padStart(2, '0');
    const yearFull = date.getFullYear();
    const year2 = String(yearFull).slice(-2);

    switch (format) {
      case 'mmyy':
        return `${month2}/${year2}`; // 👉 06/24
      default:
        return `${day}-${monthShort}-${yearFull}`; // 👉 25-Feb-2026
    }
  }
}
