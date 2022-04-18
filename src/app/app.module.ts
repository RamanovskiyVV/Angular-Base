import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoursesComponent } from './features/courses/courses.component';
import { CoursesModule } from './features/courses/courses.module';
import { AuthorsStoreService } from './services/authors-store.service';
import { AuthorsService } from './services/authors.service';
import { CourseStoreService } from './services/courses-store.service';
import { CourseService } from './services/courses.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [AppComponent, CoursesComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoursesModule,
        SharedModule,
        HttpClientModule,
        AuthModule,
        UserModule,
    ],
    providers: [CourseService, CourseStoreService, AuthorsService, AuthorsStoreService],
    bootstrap: [AppComponent],
})
export class AppModule {}
