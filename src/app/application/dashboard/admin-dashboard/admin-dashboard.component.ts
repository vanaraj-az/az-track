import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'admin-dashboard',
  templateUrl: 'admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  constructor(
      private httpService : Http
  ) {
      this.httpService.get('data/client.json')
            .map(response => response.json() )
            .subscribe(result => console.log(result) );

  }

  ngOnInit() {
      $("#welcome").html("sd");
  }
}
