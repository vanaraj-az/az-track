import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WorkLogService } from "./services/worklog.service";
import { WorkLogForm} from './forms/worklog.form';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';



@Component({
    templateUrl: 'worklog.component.html',
})
export class WorkLogComponent implements OnInit {
     worklogForm : FormGroup;

    constructor(private worklogService : WorkLogService) {
        let worklogForm = new WorkLogForm();
        this.worklogForm = worklogForm.getForm();
    }

    ngOnInit() {

    }

    // clientAdd() {
    //     this.clientService.insert(this.clientForm.value).subscribe(
    //         data => {
    //         }
    //     );
    // }
}








