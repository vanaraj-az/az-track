import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class CountryForm {
    private fb : FormBuilder;
    name : any;
    index : any;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "country" : ["", [Validators.required, Validators.pattern('[a-zA-Z]+')]]
        });
    }

}
