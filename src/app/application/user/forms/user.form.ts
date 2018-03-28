import { Injectable } from '@angular/core';
import { FormBuilder }  from '@angular/forms';

@Injectable()
export class UserForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "name" : "",
            "address"  : ""
        });
    }
}
