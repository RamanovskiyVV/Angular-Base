import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const validateRegExp = new RegExp(`^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$`);

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = validateRegExp.test(control.value);
        return forbidden ? { InvalidEmail: { value: control.value } } : null;
    };
}
