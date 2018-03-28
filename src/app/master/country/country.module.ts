import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../common/common.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryComponent } from './country-list/country-list.component';
import { CountryService } from './services/country.service';

const countryRoutes : Routes = [
  {
      path: 'country',
      component: CountryComponent
  }

]


@NgModule({
  imports : [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(countryRoutes) 
      
  ],
  declarations: [
    CountryComponent
  ],

  providers: [ CountryService ]
})
export class CountryModule { }
