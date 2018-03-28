import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-maxlength',
  templateUrl: 'error.maxlength.html',
})
export class ErrorMaxlength implements OnInit {
    @Input('controls') controls: string;

    constructor() {  }

    ngOnInit() {}
}
