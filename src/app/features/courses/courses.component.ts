import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/models/author.model';
import { Course } from 'src/app/models/course.model';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CourseStoreService } from 'src/app/services/courses-store.service';

@Component({
    selector: 'app-courses',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./courses.html`,
})
export class CoursesComponent {
    listOfCourses?: Array<Course>;
    subscription?: Subscription;

    constructor(
        private courseService: CourseStoreService,
        private authorsService: AuthorsStoreService,
        private crd: ChangeDetectorRef,
    ) {
        this.subscription = authorsService.authors$.subscribe((auths) => {
            courseService.courses$.subscribe((courses) => {
                this.listOfCourses = courses;
                this.setAuthors(auths);
                crd.markForCheck();
            });
        });
    }

    setAuthors(auths: Author[]) {
        this.listOfCourses?.forEach((course) => {
            course.authors = this.authorsService.getAuthorsNameByIds(
                course.authors,
                auths,
            );
        });
    }
    identify(index: number, item: any) {
        return item.title;
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
