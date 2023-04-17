import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  pure: true
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }
}
