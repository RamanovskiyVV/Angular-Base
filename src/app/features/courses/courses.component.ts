import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mockedCourseList } from 'src/assets/courseList';

@Component({
    selector: 'app-courses',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./courses.html`,
})
export class CoursesComponent {
    listOfCourses: Array<any> = mockedCourseList;

    identify(index: number, item: any) {
        return item.title;
    }
}
