import { Directive } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { emailValidator } from '../validators/email-validator';

@Directive({
    selector: '[email]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true },
    ],
})
export class EmailValidatorDirective implements Validator {
    validate(formControl: AbstractControl): ValidationErrors | null {
        return emailValidator();
    }
}
