import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class WorklogForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "id" : "",
            "projectId" : [" ", Validators.required],
            "issueId" : [" ", Validators.required],
            "title" : ["",[Validators.required,Validators.minLength(5)]],
            "workedHours" : ["",Validators.required,Validators.maxLength(2)],
            "filePath" : ["",Validators.required],
            "comments" : ["",Validators.required],
            "statusId" : ["",Validators.required]
        });
    }

    filePath(){
        
    }

    projectListForm(){
        return this.fb.group({
            "projectId" : "",
            "issueId" : ""
        })
    }
}
