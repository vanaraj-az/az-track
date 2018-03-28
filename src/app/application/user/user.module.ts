import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '../../common/http/http.module';
import { UserForm } from "./forms/user.form";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserService } from "./services/user.service";
import { AppCommonModule } from '../../common/common.module';

const userRoutes : Routes = [
    {
        path: 'user',
        component: UserListComponent
    },
    {
        path: 'user/add',
        component: UserAddComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        AppCommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(userRoutes),
        NgbModule.forRoot(),
        HttpModule
    ],
    declarations: [
        UserListComponent,
        UserAddComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
