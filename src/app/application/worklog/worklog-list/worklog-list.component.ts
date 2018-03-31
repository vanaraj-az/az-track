import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WorkLogService } from "../services/worklog.service";
import { WorkLogForm} from '../forms/worklog.form';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector : 'worklog',
    templateUrl: 'worklog-list.component.html',
})
export class WorkLogListComponent implements OnInit {
     workLogForm : FormGroup;
     status : any =["resolved","inprogress","done","closed"];
     projectData : any;


    constructor(private workLogService : WorkLogService) {
        let workLogForm = new WorkLogForm();
        this.workLogForm = workLogForm.getForm();
    }


    Submit() {
    console.log(this.workLogForm.value);
    }

    ngOnInit() {
        this.workLogService.findAll().subscribe(
            data =>{
                this.projectData=data;
            }
        );
    }
}








