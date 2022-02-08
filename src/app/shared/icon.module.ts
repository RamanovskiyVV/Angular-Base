import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [CommonModule, FontAwesomeModule],
    declarations: [],
    exports: [],
})
export class IconModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(faPen, faTrashRestoreAlt);
    }
}
