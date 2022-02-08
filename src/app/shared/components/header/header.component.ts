import { Component } from "@angular/core";


@Component({
    selector: 'header[common-header]',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    imageSrc = `assets/Icon.png`;
    userName = `Dave`;
}
