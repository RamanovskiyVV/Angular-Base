import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserStoreService } from './user-store.service';
import { UserService } from './user.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [UserService, UserStoreService],
})
export class UserModule {}
