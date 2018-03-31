import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class WorkLogForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "projectName" : [" ", [Validators.required,Validators.minLength(10)]],
            "projectId" : [" ", [Validators.required,Validators.minLength(10)]],
            "workedHours" : ["",Validators.required],
            "attachment" : ["",Validators.required],
            "comments" : ["",Validators.required],
            "status" : ["",Validators.required]
        });
    }
}
