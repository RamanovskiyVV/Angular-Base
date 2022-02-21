import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authorValidator } from 'src/app/shared/validators/author-validator';

@Component({
    selector: 'edit-course',
    styleUrls: ['./edit-course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './edit-course.component.html',
})
export class EditCourseComponent {
    editCourseForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        newAuthor: new FormGroup({
            authorName: new FormControl('', authorValidator()),
        }),
        duration: new FormControl('', [Validators.required, Validators.min(0)]),
    });
}
