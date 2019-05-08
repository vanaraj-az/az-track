import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../common/common.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './client.component';
import { ClientAddComponent } from './client-add/client-add.component';
import {ClientListComponent} from './client-list/client-list.component';
import { ClientService } from './services/client.service';


const clientRoutes : Routes = [
    {
        path: 'client',
        component: ClientComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppCommonModule,
        RouterModule.forRoot(clientRoutes),
        NgbModule.forRoot()
    ],
    declarations: [
        ClientComponent,
        ClientListComponent,
        ClientAddComponent
    ],
    providers : [
        ClientService
    ],
    exports : [
        RouterModule
    ]
})
export class ClientModule { }
