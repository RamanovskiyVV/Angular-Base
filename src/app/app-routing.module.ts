import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

const appRoutes: Routes = [
    {
        path: 'courses',
        loadChildren: () =>
            import('./features/courses/courses.module').then((m) => m.CoursesModule),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./features/login/login.module').then((m) => m.LoginModule),
        canActivate: [NotAuthorizedGuard],
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./features/registration/registration.module').then(
                (m) => m.RegistrationModule,
            ),
    },
    { path: '**', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
