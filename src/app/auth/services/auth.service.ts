import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.medel';
import { SessionStorageService } from './session-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient, private sessionStorage: SessionStorageService) {
        this.isAuthorized$$.next(!!sessionStorage.getToken());
    }

    private isAuthorized$$ = new BehaviorSubject<boolean>(false);

    get isAuthorized$() {
        return this.isAuthorized$$.asObservable();
    }
    get isAuthorized() {
        return this.isAuthorized$$.value;
    }

    login(user: User) {
        return this.http.post('http://localhost:3000/login', { ...user }).pipe(
            tap(() => {
                this.isAuthorized$$.next(true);
            }),
            map((data: any) => {
                this.sessionStorage.setToken(data.result);
            }),
        );
    }

    register(user: User) {
        return this.http.post('http://localhost:3000/register', { ...user });
    }

    logout() {
        return this.http
            .delete('http://localhost:3000/logout', {
                headers: { Authorization: this.sessionStorage.getToken() },
            })
            .pipe(
                tap(() => {
                    this.isAuthorized$$.next(false);
                }),
            );
    }
}
