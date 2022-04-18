import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/models/author.model';
import { Course } from 'src/app/models/course.model';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CourseStoreService } from 'src/app/services/courses-store.service';
import { authorValidator } from 'src/app/shared/validators/author-validator';

@Component({
    selector: 'edit-course',
    styleUrls: ['./edit-course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './edit-course.component.html',
})
export class EditCourseComponent {
    constructor(
        private route: ActivatedRoute,
        private courseStoreService: CourseStoreService,
        private authorsStoreService: AuthorsStoreService,
        private router: Router,
        private crd: ChangeDetectorRef,
        private courseSubscription: Subscription,
        private authorSubscription: Subscription,
    ) {
        this.id = this.route.snapshot.params.id;

        authorSubscription = this.authorsStoreService.authors$.subscribe((allAuths) => {
            this.allAuthors = allAuths;
            courseSubscription = this.courseStoreService.courses$.subscribe((courses) => {
                this.currentCourse =
                    courses.find((course) => course.id === this.id) ??
                    new Course('', '', '', '', 0, []);
                (this.authors = this.authorsStoreService.getAuthorsByIds(
                    this.currentCourse.authors,
                    allAuths,
                )),
                    this.editCourseForm.patchValue({
                        title: this.currentCourse?.title,
                        description: this.currentCourse?.description,
                        duration: this.currentCourse?.duration,
                        authors: this.authors,
                    });
                crd.markForCheck();
            });
        });
    }
    id: string = '';
    currentCourse: Course = new Course('', '', '', '', 0, []);
    authors: Author[] = [];
    allAuthors: Author[] = [];

    editCourseForm = new FormGroup({
        title: new FormControl(this.currentCourse?.title, [Validators.required]),
        description: new FormControl(this.currentCourse?.description, [
            Validators.required,
        ]),
        newAuthor: new FormGroup({
            authorName: new FormControl('', authorValidator()),
        }),
        duration: new FormControl(this.currentCourse?.duration, [
            Validators.required,
            Validators.min(0),
        ]),
    });
    newAuthorForm = new FormGroup({
        authorName: new FormControl(),
    });

    saveSubmit(form: FormGroup) {
        const course = new Course(
            this.id,
            form.value.title,
            this.currentCourse.creationDate,
            form.value.description,
            Number(form.value.duration),
            this.currentCourse.authors,
        );
        if (this.id) {
            this.courseStoreService.update(this.id, course);
        } else {
            this.courseStoreService.add(this.currentCourse);
        }
        this.router.navigateByUrl('/courses');
    }

    addAuthor(id: string) {
        const course = new Course(
            this.id,
            this.currentCourse.title,
            this.currentCourse.creationDate,
            this.currentCourse.description,
            this.currentCourse.duration,
            this.currentCourse.authors,
        );
        let autid = this.allAuthors.find((x) => x.id == id)?.id;
        if (course.authors.findIndex((x) => x == autid) < 0) {
            course.authors.push(this.allAuthors.find((x) => x.id == id)?.id ?? '');
            this.courseStoreService.update(this.id, course);
        }
    }
    removeAuthor(id: string) {
        const course = new Course(
            this.id,
            this.currentCourse.title,
            this.currentCourse.creationDate,
            this.currentCourse.description,
            this.currentCourse.duration,
            this.currentCourse.authors,
        );
        let autid = this.allAuthors.find((x) => x.id == id)?.id;
        let index = course.authors.findIndex((x) => x == autid);
        if (index >= 0) {
            course.authors.slice(index, 1);
            this.courseStoreService.update(this.id, course);
        }
    }

    createAuthor(form: FormGroup) {
        this.authorsStoreService.add(form.value.authorName);
    }
    ngOnDestroy() {
        this.courseSubscription?.unsubscribe();
        this.authorSubscription?.unsubscribe();
    }
}
