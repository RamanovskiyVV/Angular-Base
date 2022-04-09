import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.medel';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
    selector: 'registration',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./registration.component.css'],
    templateUrl: './registration.component.html',
})
export class RegistrationComponent {
    private subscription?: Subscription;

    registrationForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, emailValidator()]),
        password: new FormControl('', Validators.required),
    });
    constructor(private authService: AuthService, private router: Router) {}

    regSubmit(form: FormGroup) {
        const user = new User(form.value.email, form.value.password, form.value.name);
        this.subscription = this.authService
            .register(user)
            .subscribe(() => this.router.navigateByUrl('/courses'));
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
