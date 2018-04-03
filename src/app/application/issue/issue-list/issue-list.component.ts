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
    issueList : any = [];
    projectList : any = [];
    i : any;
    index = 0;

    constructor(private issueService: IssueService) {
        let issue = new IssueForm;
        this.issueForm = issue.getForm();  
    }

    ngOnInit() {
        this.issueService.getProject().subscribe(
            data => this.projectList =data
        );
    }

    deleteIssue(i : number) {
        this.i = i;
        this.issueList.splice(i);
    }

    editIssue(i) {
        this.index = 1;
        this.i = i;
        console.log(i);
        this.issueForm.patchValue(this.issueList[i]);
        this.issueList[this.i] = this.issueForm.value;
    }

    issueLists(projectName){
        this.issueService.insert(projectName).subscribe(
            data => this.issueList = data
        );
    }

    }
