import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './courseCard.component';

@NgModule({
    imports: [SharedModule],
    declarations: [CourseCardComponent],
    exports: [CourseCardComponent],
})
export class CoursesModule {}
