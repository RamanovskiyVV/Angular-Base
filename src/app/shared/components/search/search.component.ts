import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/models/course.model';
import { CourseStoreService } from 'src/app/services/courses-store.service';
import { CourseService } from 'src/app/services/courses.service';

@Component({
    selector: 'search',
    styleUrls: ['./search.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './search.component.html',
})
export class SearchComponent {
    constructor(
        private courseService: CourseService,
        private courseStorageService: CourseStoreService,
    ) {}
    @Input() searchValue: string = '';
    @Output() event: any;
    searchForm = new FormGroup({
        value: new FormControl(''),
    });

    searchSubmit() {
        var oCourse = this.courseService.getAll().pipe(
            map((data: any) => {
                return data.result
                    .pluck(function (course: any): Course {
                        return new Course(
                            course.id,
                            course.title,
                            course.description,
                            course.creationDate,
                            course.duration,
                            course.authors,
                        );
                    })
                    .filter((course: Course) => course.title == this.searchValue);
            }),
        );
        this.courseStorageService.courses$ = oCourse;
    }
}
