import { Injectable } from '@angular/core';
import { FormBuilder, Validators , FormArray}  from '@angular/forms';

@Injectable()
export class IssueForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "projectName" : ["", Validators.required],
            "issueType" : ["", Validators.required],
            "title"  : ["", Validators.required],
            "description" : ["", Validators.required],
            "realEstimation" : ["", [Validators.required, Validators.maxLength(2), Validators.pattern('[0-9]+')]],
            // "fileUpload" : this.fb.array([ 
            //     this.fb.group({ 
                     "upload" : ["", Validators.required]
            //     })
            //  ])
        });
    }
}


