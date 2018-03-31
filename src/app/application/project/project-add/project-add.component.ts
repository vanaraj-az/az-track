import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProjectService } from "./../services/project.service"
import { ProjectForm} from './../forms/project.form';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
    selector: 'project-add',
    templateUrl: 'project-add.component.html'
})
export class ProjectAddComponent implements OnInit {
    projectForm : FormGroup;
    projectData : any;
    clientData : any;
    model: any;
    errorMsg : any;

    @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    search = (text$: Observable<string>) =>
        text$
        .debounceTime(200).distinctUntilChanged()
        .merge(this.focus$)
        .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
        .map(term => (term === '' ? this.clientData : this.clientData.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));


    constructor(private projectService : ProjectService) {
        let projectForm = new ProjectForm();
        this.projectForm = projectForm.getForm();
    }

    ngOnInit() {
        this.projectService.findAll().subscribe(
            data =>{
                this.clientData=data;
            }
        );
    } 

    addProject() {
        this.projectService.insert(this.projectForm.value).subscribe(
            data => this.projectData = data,
            error => this.errorMsg = error
        );
        console.log(this.projectForm.value)
        this.projectForm.reset();
    }
}






