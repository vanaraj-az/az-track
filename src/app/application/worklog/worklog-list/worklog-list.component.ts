import { Component, OnInit, ViewEncapsulation,  ViewChild, ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorklogForm } from './../forms/worklog.form';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { WorklogService } from './../services/worklog.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import * as $ from 'jquery';
import { empty } from 'rxjs/Observer';


@Component({
    selector : 'worklog-list',
    templateUrl: 'worklog-list.component.html',
    encapsulation: ViewEncapsulation.None,
   })
export class WorkLogListComponent implements OnInit {
    
    worklogForm : FormGroup;
    projectListForm : FormGroup;
    closeResult: string;
    issueList : any = [];
    statusList : any = [];
    worklogList : any = [];
    submitResponse : any = [];
    updateResponse : any = [];
    deleteMessage : any;
    getIssueError : any;
    getWorklogError : any;
    submitError : any;
    editError : any;
    realEstimation : any;
    selectedProject : any;
    selectedIssue : any;
    selectedEstimation : any;
    projectList : any = [];
    fileArray : any = [];
    editList : any = [];
    index = 0; 

    constructor(private worklogService: WorklogService, private tostr: ToastrService, private modalService: NgbModal) {
        let issue = new WorklogForm;
        this.worklogForm = issue.getForm();  
        this.projectListForm = issue.projectListForm(); 

    }


    ngOnInit() {
        this.getProjectList();
    }

    
    onChangeIssue(id):void{
        this.getIssueList(id);
    }


    onChangeEstimation(id):void{
        this.getRealEstimation(id);
    }


    getStatusList(){
        this.worklogService.getStatusList().subscribe(
            data => this.statusList = data
        );
    }


    getProjectList(){
        this.worklogService.getProject().subscribe(
            data => this.projectList = data
        );
    }

    getIssueList(id){
        this.worklogService.issueFindById(id).subscribe(
            data => this.issueList =data,
            error => this.getIssueError = error
        );
    }

    getworklogList(id){
        this.worklogService.worklogFindById(id).subscribe(
            data => this.worklogList = data,
            error => this.getWorklogError = error
        );
    }

    getRealEstimation(id){
        this.worklogService.realEstimation(id).subscribe(
            data => this.realEstimation = data
        );
    }

    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
        this.worklogForm.reset();
      }

    
    onFileChange($event) {
        let file = $event.target.files[0]; // <--- File Object for future use.
        this.worklogForm.controls['upload'].setValue(file ? file.name : ''); // <-- Set Value for Validation
    }

    editIssue(content,id){
        this.modalService.open(content, { size: 'lg' });
        this.worklogService.selectworklog(id).subscribe(
            data => {
                this.editList = data;
                console.log(this.editList);
                this.worklogService.selectworklog(this.editList);
                }
        );
        this.index = 1;
    }

    deleteIssueList(id){
        alert("Are you sure you want to delete?");
        this.worklogService.worklogDelete(id).subscribe( 
            data => {
                this.deleteMessage = data;
                if(this.deleteMessage != null){
                    this.tostr.warning('Deleted Succcessfully', 'Issue');
                    window.location.reload();
                }
            }
        );
    }



    submitWorklog(){  
        if(this.index == 0){
            this.worklogService.insert(this.worklogForm.value).subscribe(
                data => {
                    this.submitResponse = data;
                    if(this.submitResponse != null){
                        this.tostr.success('Submitted Succcessfully', 'Worklog');
                        console.log(this.submitResponse); 
                        this.getProjectList();

                    }
                },
                error => {
                    this.submitError = error;
                }
            );
            this.worklogForm.reset();
            }
            else{
                this.worklogService.worklogUpdate(this.worklogForm.value).subscribe(
                    data => {
                        this.updateResponse = data;
                        if(this.updateResponse != null){
                            this.tostr.success('Updated Succcessfully', 'Worklog');
                            console.log(this.updateResponse);
                            this.getProjectList();
                        }  
                    },
                    error => {
                        this.editError = error;
                    }
                );              
                this.index = 0;
            }   
            this.worklogForm.reset();
    }  
}