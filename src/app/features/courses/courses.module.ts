import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { CourseStoreService } from 'src/app/services/courses-store.service';
import { CourseService } from 'src/app/services/courses.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './courseCard.component';
import { CoursesComponent } from './courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
    { path: '', component: CoursesComponent, canLoad: [AuthorizedGuard] },
    { path: 'new', component: EditCourseComponent },
    { path: 'edit/:id', component: EditCourseComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [CourseService, CourseStoreService],
    declarations: [CourseCardComponent, EditCourseComponent],
    exports: [CourseCardComponent, EditCourseComponent],
})
export class CoursesModule {}
