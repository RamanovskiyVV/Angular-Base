import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './courseCard.component.html',
    styleUrls: ['./courseCard.component.css'],
})
export class CourseCardComponent {
    editableTemp: string = '';
    isEditable: Boolean = false;
    @Input() title: string = '';
    @Input() text?: string;
    @Input() creationDate?: string;
    @Input() authors?: string;
    @Input() duration: string = '';

    @Input()
    set editable(editable: string) {
        this.editableTemp = editable;
        this.isEditable = this.editableTemp == 'true';
    }
    get editable() {
        return this.editableTemp;
    }
}
