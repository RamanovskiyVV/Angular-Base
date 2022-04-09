import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/user/user-store.service';

@Component({
    selector: 'card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './courseCard.component.html',
    styleUrls: ['./courseCard.component.css'],
})
export class CourseCardComponent {
    isEditable: Boolean = true;
    constructor(private userStoreService: UserStoreService, private router: Router) {
        this.userStoreService.isAdmin$.subscribe(
            (isAdmin) => (this.isEditable = isAdmin),
        );
    }
    editableTemp: string = '';
    @Input() id: string = '';
    @Input() title: string = '';
    @Input() text?: string;
    @Input() creationDate?: string;
    @Input() authors?: string;
    @Input() duration: string = '';

    @Input()
    set editable(editable: string) {}
    get editable() {
        return this.editableTemp;
    }
    edit() {
        this.router.navigateByUrl(`courses/edit/${this.id}`);
    }
}
