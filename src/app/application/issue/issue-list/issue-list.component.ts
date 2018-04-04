import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IssueForm } from './../forms/issue.form';
import { IssueService } from './../services/issue.service';

@Component({
    selector : 'issue-list',
    templateUrl: 'issue-list.component.html',
})
export class IssueListComponent implements OnInit {
    issueForm : FormGroup;
    

    constructor(private issueService: IssueService) {
        let issue = new IssueForm;
        this.issueForm = issue.getForm();  
    }

    ngOnInit() {
       
    }

}
