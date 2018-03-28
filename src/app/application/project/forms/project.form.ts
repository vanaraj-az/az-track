import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class ProjectForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "projectName" : [" ", [Validators.required,Validators.minLength(10)]],
            "description" : [" ", [Validators.required,Validators.minLength(10)]],
            "client"  : [" ", Validators.required]
        });
    }
}
