import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-minlength',
  templateUrl: 'error.minlength.html',
})
export class ErrorMinLength implements OnInit {
    @Input('controls') controls: string;

    constructor() {  }

    ngOnInit() {}
}
