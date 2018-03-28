import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const adminRoutes : Routes = [
    {
        path: 'admin',
        component: AdminDashboardComponent
    }
]

@NgModule({
  imports: [
      CommonModule,
      HttpModule,
      RouterModule
  ],
  declarations: [
      AdminDashboardComponent
  ],
  exports: [
    AdminDashboardComponent
]
})
export class DashboardModule { }
