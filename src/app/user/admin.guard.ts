import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from './user-store.service';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(private userStoreService: UserStoreService, private router: Router) {}
    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this.userStoreService.isAdmin$) {
            return true;
        }
        return this.router.parseUrl('/courses');
    }
}
