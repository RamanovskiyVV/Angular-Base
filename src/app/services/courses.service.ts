import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable()
export class CourseService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get('http://localhost:3000/courses/all');
    }

    addCourse(course: Course) {
        return this.http.post('http://localhost:3000/courses/add', { ...course });
    }

    editCourse(course: Course, id: string) {
        return this.http.put(`http://localhost:3000/courses/${id}`, { ...course });
    }

    deleteCourse(id: number) {
        return this.http.delete(`http://localhost:3000/courses/${id}`);
    }
}
