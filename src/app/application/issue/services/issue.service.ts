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
export class IssueService {

    private url : String = "data/issue.json";

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post("http://localhost:8080/issue/add", data)
                                .catch(this.errorHandler);
    }

    getIssue(){
        return this.httpService.get("/http://localhost:8080/issue/listissue")
                               .catch(this.errorHandler);
    } 
    
    getIssueType(){
        return this.httpService.get("http://localhost:8080/issue/issuetype")
                            .catch(this.errorHandler);
    } 

    getProject(){
        return this.httpService.get("http://localhost:8080/issue/project")
                               .catch(this.errorHandler);
    }

    issueFindById(id) {
        return this.httpService.get("http://localhost:8080/issue/listissue" + "?" + id)
                               .catch(this.errorHandler);
    }

    issueUpdate(id : Number , data) {
        return this.httpService.update("http://localhost:8080/issue/edit" + "?" , id)
                               .catch(this.errorHandler);
    }

    issueDelete(id : Number) {
        return this.httpService.delete("http://localhost:8080/issue/delete" + "?" + id);
    }


    errorHandler(error : HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
}
