import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionStorageService {
    constructor() {}
    setToken(token: string) {
        sessionStorage.setItem('token', token);
    }

    getToken(): string {
        return String(sessionStorage.getItem('token'));
    }

    deleteToken() {
        sessionStorage.removeItem('token');
    }
}
