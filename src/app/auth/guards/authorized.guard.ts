import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
    canLoad():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this.authService.isAuthorized) {
            return this.router.parseUrl('/login');
        }
        return true;
    }
}
