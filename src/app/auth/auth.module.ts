import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthorizedGuard } from './guards/authorized.guard';
import { AuthService } from './services/auth.service';
import { SessionStorageService } from './services/session-storage.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [
        AuthService,
        SessionStorageService,
        AuthorizedGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
})
export class AuthModule {}
