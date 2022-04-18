import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [{ path: '', component: RegistrationComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
    declarations: [RegistrationComponent],
    exports: [RegistrationComponent],
})
export class RegistrationModule {}
