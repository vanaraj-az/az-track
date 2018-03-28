import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";

@Injectable()
export class ProjectService {

    private url : String = "data/project.json";
    private clientUrl : string = "data/clientlist.json";

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post("http://localhost:8080/project/add", data);
    }

    findAll() {
        return this.httpService.get("http://localhost:8080/project/clientcall");
    }

    findById(id : Number) {
        return this.httpService.get(this.url + "?" + id);
    }

    
}
