import { NgModule } from '@angular/core';
import { AuthModule } from "./auth/auth.module";
import { HelpersModule } from "./helpers/helpers.module";
import { HttpModule } from "./http/http.module";
import { UtilModule } from "./util/util.module";

@NgModule({
  imports: [
      AuthModule,
      HelpersModule,
      HttpModule,
      UtilModule,
  ],
  exports : [
      HelpersModule
  ]
})
export class AppCommonModule { }
