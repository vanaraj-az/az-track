import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutDefaultModule } from "./default/layout-default.module"

@NgModule({
  imports : [
      LayoutDefaultModule
  ],
  declarations: [
      PageNotFoundComponent
  ],
  exports : [
      LayoutDefaultModule
  ]
})
export class LayoutModule { }
