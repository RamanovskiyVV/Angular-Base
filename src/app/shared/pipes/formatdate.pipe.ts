import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {
  transform(value: string, args?: any): string {

    return `${Math.trunc(Number(value) / 60)}:${Number(value) % 60} hours`;
  }
}
