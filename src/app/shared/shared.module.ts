import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { IconModule } from './icon.module';
import { FormatdatePipe } from './pipes/formatdate.pipe';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        IconModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HeaderComponent,
        InfoComponent,
        ButtonComponent,
        FormatdatePipe,
        EmailValidatorDirective,
        SearchComponent,
    ],
    exports: [
        HeaderComponent,
        InfoComponent,
        ButtonComponent,
        FormatdatePipe,
        CommonModule,
        IconModule,
        EmailValidatorDirective,
        SearchComponent,
    ],
})
export class SharedModule {}
