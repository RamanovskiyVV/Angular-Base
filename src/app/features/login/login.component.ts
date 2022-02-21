import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.medel';

@Component({
    selector: 'login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @Input() user = new User('', '');
}
