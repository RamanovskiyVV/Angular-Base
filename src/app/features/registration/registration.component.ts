import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
    selector: 'registration',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./registration.component.css'],
    templateUrl: './registration.component.html',
})
export class RegistrationComponent {
    registrationForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, emailValidator()]),
        password: new FormControl('', Validators.required),
    });
}
