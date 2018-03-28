import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-required',
  templateUrl: 'error.required.html',
  styles:[`
  input:required {
    border-color: #ccc !important;
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
}
  `]
})
export class ErrorRequired implements OnInit {
    @Input('controls') controls: string;

    constructor() {  }

    ngOnInit() {}
}
