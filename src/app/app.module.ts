import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './features/courses/courses.component';
import { CoursesModule } from './features/courses/courses.module';
import { EditCourseComponent } from './features/courses/edit-course/edit-course.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'newCourse', component: EditCourseComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        LoginComponent,
        RegistrationComponent,
        EditCourseComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoursesModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
