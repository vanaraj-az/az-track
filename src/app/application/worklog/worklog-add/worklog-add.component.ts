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
    selector : 'worklog-add',
    templateUrl: 'worklog-add.component.html',
    encapsulation: ViewEncapsulation.None,
   })
export class WorkLogAddComponent implements OnInit {
    
    worklogForm : FormGroup;

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
    selectedEstimation : any;
    projectList : any = [];
    fileArray : any = [];
    editList : any = [];
    subtractValue : any;
    subtractError : any;
    index = 0; 

    constructor(private worklogService: WorklogService, private tostr: ToastrService, private modalService: NgbModal) {
        let issue = new WorklogForm;
        this.worklogForm = issue.getForm();  
    }


    ngOnInit() {
        this.getProjectList();
        this.getStatusList();
    }

    getProjectList(){
        this.worklogService.getProject().subscribe(
            data => this.projectList = data
        );
    }
    

    onChangeIssue(id):void{
        this.getIssueList(id);
    }


    getIssueList(id){
        this.worklogService.issueFindById(id).subscribe(
            data => this.issueList =data,
            error => this.getIssueError = error
        );
    }

    onChangeValue(id):void{
    }

    onChangeEstimation(id):void{
        this.getRealEstimation(id);
    }


    getRealEstimation(id){
        this.worklogService.realEstimation(id).subscribe(
            data => {
                this.realEstimation = data;
                let a = this.worklogForm.controls.workedHours.value;
                if(a<this.realEstimation){
                    this.subtractValue = this.realEstimation - a;
                }
                else{
                    this.subtractError = "Worked Hours must be lesser than the Original Estimation"
                }
            }
        );
    }

    getStatusList(){
        this.worklogService.getStatusList().subscribe(
            data => this.statusList = data
        );
    }


    getworklogList(id){
        this.worklogService.worklogFindById(id).subscribe(
            data => this.worklogList = data,
            error => this.getWorklogError = error
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