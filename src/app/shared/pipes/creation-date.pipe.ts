import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'creation-date',
})
export class CreationDatePipe implements PipeTransform {
    transform(value: Date): string {
        var dd = String(value.getDate()).padStart(2, '0');
        var mm = String(value.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = value.getFullYear();

        return `${dd}.${mm}.${yyyy}`;
    }
}
