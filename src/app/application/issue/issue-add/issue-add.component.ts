import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IssueForm } from './../forms/issue.form';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { IssueService } from './../services/issue.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector : 'issue-add',
    templateUrl: 'issue-add.component.html',
    styleUrls : ['issue-add.component.css'],

})
export class IssueAddComponent implements OnInit {
    issueForm : FormGroup;
    issueType : any;
    submitMessage : any;
    updateMessage : any;
    deleteMessage : any;
    getError : any;
    submitError : any;
    editError : any;
    projectList : any = [];
    fileArray :any = [];
    issueList :any = [];
    index = 0;

    constructor(private issueService: IssueService, private tostr: ToastrService) {
        let issue = new IssueForm;
        this.issueForm = issue.getForm();  
    }

    ngOnInit() {
        this.index = 0;
        this.issueService.getIssueType().subscribe(
            data => this.issueType =data
        );
        this.issueService.getProject().subscribe(
            data => this.projectList =data
        );
        this.issueService.getIssue().subscribe(
            data => this.issueList = data
        );
        this.index = 0;
    }

    
    onFileChange($event) {
        let file = $event.target.files[0]; // <--- File Object for future use.
        this.issueForm.controls['upload'].setValue(file ? file.name : ''); // <-- Set Value for Validation
    }

    // selectedFilesArray;
    // onSelectFile(e)
    // {
    //     if (this.issueForm.controls['upload']) {
    //     this.selectedFilesArray = [];
    //     for(let i = 0; i < this.issueForm.controls['upload'].length; i++) {
    //         this.selectedFilesArray.push(this.issueForm.controls['upload'].item(i));
    //     }
    //     }
    // }

    deleteIssue(i : number) {
        this.index = i;
        this.issueList.splice(i);
    }

    editIssue(i) {
        this.issueForm.patchValue(this.issueList[i]);
    }

    submitIssue(id){  
        if(this.index == 0){
            this.issueService.insert(this.issueForm.value).subscribe(
                data =>this.submitMessage=data,
                error => this.submitError = error
                );
               console.log(this.tostr.success('Submitted Succcessfully', 'Employee Register'));
               console.log(this.issueForm.value);
               this.issueForm.reset();
            }
            else{
                this.issueService.issueUpdate(this.issueForm.value,id).subscribe(
                    data => this.updateMessage = data,
                    error => this.editError = error
                );
                this.tostr.success('Updated Succcessfully', 'Employee Register');
                console.log(this.issueForm.value);
                this.issueForm.reset();
                this.index = 0;
            }   
    }  

    getIssueList(id){
        this.issueService.getIssue().subscribe(
            data => this.issueList= data,
            error => this.getError = error
        );
    }

    editIssueList(i){
        this.index = 1;
        this.issueForm.patchValue(this.issueList[i]);
        this.issueForm.controls.upload.patchValue(this.issueList[i].upload);
        console.log(this.issueList[i].upload);
    }

    deleteIssueList(id){
        this.issueService.issueDelete(id).subscribe(
            data => this.deleteMessage = data
        );
    }
}
