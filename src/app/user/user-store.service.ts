import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.medel';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UserStoreService {
    constructor(http: HttpClient, private userService: UserService) {}
    private user$$ = new BehaviorSubject<Observable<User[]>>(this.getUser());
    private name$$ = new BehaviorSubject<string>('');
    private isAdmin$$ = new BehaviorSubject<boolean>(false);

    set user$(value: Observable<User[]>) {
        this.user$$.next(value);
    }
    get user$() {
        return this.user$$.getValue();
    }
    get name$() {
        return this.name$$.getValue();
    }

    get isAdmin$() {
        return this.isAdmin$$.asObservable();
    }

    getUser(): Observable<User[]> {
        return this.userService.getUser().pipe(
            map((data: any) => {
                this.name$$.next(data.result.name);
                this.isAdmin$$.next(data.result.role === 'admin');
                return data.result.map(function (user: any): User {
                    return new User(user.name, user.email, user.password);
                });
            }),
        );
    }
}
