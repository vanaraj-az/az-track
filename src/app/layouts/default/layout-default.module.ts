import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutDefaultComponent } from "./layout-default.component";
import { CountryComponent } from './../../master/country/country-list/country-list.component';
import { ClientModule } from './../../application/client/client.module';


const countryRoutes : Routes = [
    {
        path: 'country',
        component: CountryComponent
    },
    {
        path: 'layout',
        component: LayoutDefaultComponent
    }
]

@NgModule({
  imports: [
      CommonModule,
      ClientModule,
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
