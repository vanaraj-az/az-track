import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutDefaultComponent } from "./layout-default.component";


const countryRoutes : Routes = [
    
    {
        path: 'layout',
        component: LayoutDefaultComponent
    }
]

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(countryRoutes),
      NgbModule.forRoot()
  ],
  declarations: [
      LayoutDefaultComponent
  ],
  providers: [],
  exports : [
      LayoutDefaultComponent,
  ]
})
export class LayoutDefaultModule { }
