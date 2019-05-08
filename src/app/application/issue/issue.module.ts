import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../common/common.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueComponent } from './issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueService } from './services/issue.service';


const issueRoutes : Routes = [
    {
        path : "issue",
        component: IssueComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppCommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(issueRoutes),
        NgbModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 5000,
            preventDuplicates: true,
          })
    ],
    declarations: [
        IssueComponent,
        IssueListComponent,
        IssueAddComponent
    ],
    providers : [
        IssueService
    ],
    exports : [
        RouterModule
    ]
})
export class IssueModule { }
