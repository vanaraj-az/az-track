import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from './common/common.module';
import { ApplicationModule } from './application/application.module';
import { LayoutModule } from './layouts/layout.module';
import { MasterModule } from './master/master.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './application/dashboard/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { CustomerComponent } from './customer/customer/customer.component';


// routes
const appRoutes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent

  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    ApplicationModule,
    LayoutModule,
    MasterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
