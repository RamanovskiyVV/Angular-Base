import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.medel';

@Component({
    selector: 'login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @Input() user: User = new User('', '');
    private subscription?: Subscription;
    constructor(private authService: AuthService, private router: Router) {}
    loginSubmit() {
        this.subscription = this.authService
            .login(this.user)
            .subscribe(() => this.router.navigateByUrl('/courses'));
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
