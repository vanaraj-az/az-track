import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkLogComponent } from './worklog.component';
import { WorkLogListComponent } from './worklog-list/worklog-list.component';
import { WorkLogService } from './services/worklog.service';
import { AppCommonModule } from '../../common/common.module';

const worklogRoutes : Routes = [
    {
        path: 'worklog',
        component: WorkLogComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(worklogRoutes),
        NgbModule.forRoot(),
        ReactiveFormsModule,
        AppCommonModule
    ],
    declarations: [
        WorkLogComponent,
        WorkLogListComponent
    ],
    providers : [
        WorkLogService
    ]
})
export class WorkLogModule { }
