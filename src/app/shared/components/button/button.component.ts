import { Component, Input } from "@angular/core";


@Component({
    selector: 'button[common-button]',
    styleUrls: ['./button.component.css'],
    templateUrl: './button.component.html',
    host: { 'class': 'course-buttons' }
})

export class ButtonComponent {
    @Input() buttonText: string = '';
    @Input() buttonTextIconName: string = '';

}
