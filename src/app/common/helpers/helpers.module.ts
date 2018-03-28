import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRequired } from './error/error.required';
import { ErrorEmail } from './error/error.email';
import { ErrorMinLength } from './error/error.minlength';
import { ErrorMaxlength } from './error/error.maxlength';
import { ErrorPattern } from './error/error.pattern';

@NgModule({
    imports : [
        CommonModule
    ],
    declarations : [
        ErrorRequired,
        ErrorEmail,
        ErrorMinLength,
        ErrorMaxlength,
        ErrorPattern
    ],
    exports : [
        ErrorRequired,
        ErrorEmail,
        ErrorMinLength,
        ErrorMaxlength,
        ErrorPattern
    ]
})
export class HelpersModule { }
