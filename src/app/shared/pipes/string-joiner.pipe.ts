import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'string-joiner' })
export class StringJoinerPipe implements PipeTransform {
    transform(array: string[], separator: string) {
        return array.join(separator);
    }
}
