import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionStorageService } from './services/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: SessionStorageService, private router: Router) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        const authReq = request.clone({
            headers: request.headers.set('Authorization', this.authService.getToken()),
        });
        return next.handle(authReq).pipe(
            tap((err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status == 401) this.router.navigateByUrl('/login');
                }
            }),
        );
    }
}
