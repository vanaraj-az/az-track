import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserForm } from '../forms/user.form';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: 'user-add.component.html',
})
export class UserAddComponent implements OnInit {

    userForm : FormGroup;

    constructor(private userService : UserService) {
        let userForm = new UserForm();
        this.userForm = userForm.getForm();
    }

    submit() {
        alert("ddd")
        this.userService.insert("something", this.userForm.value).subscribe(
            data => {
                console.log(data)
            }
        );
    }

    ngOnInit() {}
}
