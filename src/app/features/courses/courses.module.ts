import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './courseCard.component';
import { CoursesComponent } from './courses.component';

@NgModule({
    imports: [SharedModule],
    declarations: [CoursesComponent, CourseCardComponent],
    exports: [CoursesComponent, CourseCardComponent],
})
export class CoursesModule {}
