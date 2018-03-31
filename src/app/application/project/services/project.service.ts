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
export class ProjectService {

    private url : String = "data/project.json";
    private clientUrl : string = "data/clientlist.json";

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post("http://localhost:8080/project/add", data)
                                .map(this.successMessage)
                                .catch(this.errorHandler);
    }


    successMessage(res : Response){
        let body = res.json();
        return body;
    }


    errorHandler(error : HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }

    findAll() {
        return this.httpService.get("data/clientlist.json");
        // http://localhost:8080/project/clientcall
    }

    findById(id : Number) {
        return this.httpService.get(this.url + "?" + id);
    }

    getProject(){
        return this.httpService.get("/data/projectlist.json")
    }

    
}
