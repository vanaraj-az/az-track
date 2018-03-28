import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-email',
  templateUrl: 'error.email.html',
})
export class ErrorEmail implements OnInit {
    @Input('controls') controls: string;

    constructor() {  }

    ngOnInit() {}
}
