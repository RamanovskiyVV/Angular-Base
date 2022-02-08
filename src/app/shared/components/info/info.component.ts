import { Component, Input } from "@angular/core";


@Component({
    selector: 'info',
    templateUrl: './info.component.html',
    styles: [`:host{
        display: inline-block;
        width: 78%;
    }`]
})

export class InfoComponent {
    @Input() title: string = '';
    @Input() text?: string;
}
