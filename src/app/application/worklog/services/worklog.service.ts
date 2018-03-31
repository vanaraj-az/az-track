import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";

@Injectable()
export class WorkLogService {

    private url : String = "data/worklog.json";
    // private clientUrl : string = "data/clientlist.json";

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post("", data);
    }

    findAll() {
        return this.httpService.get("");
    }

    findById(id : Number) {
        return this.httpService.get(this.url + "?" + id);
    }

    
}
