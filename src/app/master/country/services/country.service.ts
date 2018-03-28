import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CountryService {

    private url : String = "";
    

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post("http://localhost:8080/country/add", data)
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

    
    update(id : Number, data) {
        return this.httpService.update(data ,this.url+ "?" + id);
    }


    //get country from json
    getCountry(){
        return this.httpService.get("http://localhost:8080/country/call");
    }
}
