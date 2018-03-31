import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IssueForm } from './../forms/issue.form';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { IssueService } from './../services/issue.service';

@Component({
    selector : 'issue-add',
    templateUrl: 'issue-add.component.html',
    styleUrls : ['issue-add.component.css']
})
export class IssueAddComponent implements OnInit {
    issueForm : FormGroup;
    issueType : any;
    issueData : any;
    errorMsg : any;

    constructor(private issueService: IssueService) {
        let issue = new IssueForm;
        this.issueForm = issue.getForm();   
    }

    ngOnInit() {
      this.issueService.getIssueType().subscribe(
          data => this.issueType =data
      );
    }
    

    submitIssue(){      
        this.issueService.insert(this.issueForm.value).subscribe(
           data =>this.issueData=data,
           error => this.errorMsg = error
           );
          console.log(this.issueForm.value);
          this.issueForm.reset();
     }   
}
