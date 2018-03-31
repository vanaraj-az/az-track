import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { AppCommonModule } from '../../common/common.module';

const projectRoutes : Routes = [
    {
        path: 'project',
        component: ProjectComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(projectRoutes),
        NgbModule.forRoot(),
        ReactiveFormsModule,
        AppCommonModule
    ],
    declarations: [
        ProjectComponent,
        ProjectListComponent,
        ProjectAddComponent
    ],
    providers : [
        ProjectService
    ]
})
export class ProjectModule { }
