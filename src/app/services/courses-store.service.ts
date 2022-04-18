import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { CourseService } from './courses.service';

@Injectable()
export class CourseStoreService {
    constructor(private courseService: CourseService) {}
    private courses$$ = new BehaviorSubject<Observable<Course[]>>(this.getAll());
    private loading$$ = new BehaviorSubject<boolean>(false);

    set courses$(value: Observable<Course[]>) {
        this.courses$$.next(value);
    }
    get courses$() {
        return this.courses$$.getValue();
    }

    get loading$() {
        return this.loading$$.asObservable();
    }

    getAll(): Observable<Course[]> {
        return this.courseService.getAll().pipe(
            tap(() => {
                this.loading$$.next(true);
            }),
            map((data: any) => {
                return data.result.map(function (course: any): Course {
                    return new Course(
                        course.id,
                        course.title,
                        course.description,
                        course.creationDate,
                        course.duration,
                        course.authors,
                    );
                });
            }),
        );
    }
    update(id: string, course: Course) {
        this.courseService
            .editCourse(course, id)
            .pipe(
                tap(() => {
                    this.courses$ = this.getAll();
                }),
            )
            .subscribe();
    }

    add(course: Course) {
        this.courseService
            .addCourse(course)
            .pipe(
                tap(() => {
                    this.courses$ = this.getAll();
                }),
            )
            .subscribe();
    }
}
