import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { ErrorHandler } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Data } from '@angular/router';


@Injectable()
export class WorklogService{
    errormsg:any;

    constructor(private httpService : HttpService) {
    }

        
    insert(data : JSON){
        return this.httpService.post("http://192.168.5.30:8080/worklog/add", data)
                                     .catch(this.errorHandler);               
    }
    
    getStatusList(){
        return this.httpService.get("http://192.168.5.30:8080/worklog/statuslist")

    }

    getProject(){
        return this.httpService.get("http://192.168.5.30:8080/worklog/project")
                                .catch(this.errorHandler);
    }


    realEstimation(id){
        return this.httpService.get("http://192.168.5.30:8080/worklog/select?id="+id)
    }

    //list issue when select a project
    issueFindById(id : Number) {
        return this.httpService.get("http://192.168.5.30:8080/worklog/listissue?id="+id)
                                .catch(this.errorHandler);
    }

    //list worklog when select a issue
    worklogFindById(id : Number) {
        return this.httpService.get("http://192.168.5.30:8080/worklog/listissue?id="+id)
                                .catch(this.errorHandler);
    }

    selectworklog (id: Number) {
        return this.httpService.get("http://192.168.5.30:8080/worklog/select?id="+id)
    }

    worklogUpdate(data) {
    return this.httpService.update("http://192.168.5.30:8080/worklog/edit", data)
                            .catch(this.errorHandler);
    }

    worklogDelete(id : Number) {
        return this.httpService.delete("http://192.168.5.30:8080/worklog/delete?id="+id);
    }

    errorHandler(error : HttpErrorResponse){
        return Observable.throw(error.error.message);
    }

}
