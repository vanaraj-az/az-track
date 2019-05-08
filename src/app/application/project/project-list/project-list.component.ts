import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from "./../services/project.service"

@Component({
    selector: 'project-list',
    templateUrl: 'project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    projectData : any;
    projectList : any = [];

    constructor(private projectService : ProjectService) {
    }

    ngOnInit() {
        this.projectService.getProject().subscribe(
            data =>{
                this.projectList=data;
            }
        );
    }

    editProject(project : any) {

        this.projectService.findById(project).subscribe(
            data =>{

                this.projectData=data;
                console.log(data);
            }
        );
    }

}





