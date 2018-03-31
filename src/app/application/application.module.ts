import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { WorkLogModule } from './worklog/worklog.module';
import { IssueModule } from './issue/issue.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports : [
      DashboardModule,
      UserModule,
      ClientModule,
      ProjectModule,
      WorkLogModule,
      IssueModule
     
  ],
  declarations: [PaymentComponent]
})
export class ApplicationModule { }
