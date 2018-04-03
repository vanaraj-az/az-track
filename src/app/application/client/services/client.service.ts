import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { error } from 'protractor';


@Injectable()
export class ClientService {

    private urlCountry : String = "/data/country.json";
    private url : String = "";
    

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post("http://localhost:8080/client/update", data)
                                .catch(this.errorHandler);  
    }


    errorHandler(error : HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }


    findAll() {
        return this.httpService.get(this.url);
    }


    delete(id : Number) {
        return this.httpService.delete(this.url + "?" + id);
    }

    
    update(id : Number , data) {
        return this.httpService.update(this.url + "?" , id);
    }


    //get country from json
    getCountry(){
        return this.httpService.get("/data/country.json");
        // http://localhost:8080/country/call
    }

    getClient(){
        return this.httpService.get("/data/client.json");
    }
}
