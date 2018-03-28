import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-pattern',
  templateUrl: 'error.pattern.html',
})
export class ErrorPattern implements OnInit {
    @Input('controls') controls: string;

    constructor() {  }

    ngOnInit() {}
}
