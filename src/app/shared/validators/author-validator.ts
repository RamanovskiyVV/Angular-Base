import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const validateRegExp = new RegExp(`^[A-Za-z0-9]+$`);

export function authorValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = validateRegExp.test(control.value);
        return forbidden ? { InvalidEmail: { value: control.value } } : null;
    };
}
