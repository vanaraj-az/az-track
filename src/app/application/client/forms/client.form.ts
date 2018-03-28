import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class ClientForm {
    private fb : FormBuilder;
    name : any;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "companyName" : ["", [Validators.required, Validators.minLength(5)]],
            "address"  : ["",Validators.required],
            "email" : ["", [Validators.required, Validators.email,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
            "phoneNumber" : ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
            "country" : ["",Validators.required],
            "contactPerson" : this.fb.array([ 
                this.fb.group({
                    "name" : ["", [Validators.required, Validators.minLength(5)]],
                    "responsible" : ["",Validators.required],
                    "phoneNumber" : ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
                    "email" : ["", [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]]
                })
             ])
        });
    }
}


