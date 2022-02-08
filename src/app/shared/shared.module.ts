import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { IconModule } from './icon.module';
import { FormatdatePipe } from './pipes/formatdate.pipe';

@NgModule({
    imports: [CommonModule, FontAwesomeModule, IconModule],
    declarations: [HeaderComponent, InfoComponent, ButtonComponent, FormatdatePipe],
    exports: [
        HeaderComponent,
        InfoComponent,
        ButtonComponent,
        FormatdatePipe,
        CommonModule,
        IconModule,
    ],
})
export class SharedModule {
    constructor(library: FaIconLibrary) {}
}
