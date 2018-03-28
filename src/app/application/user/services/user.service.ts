import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";

@Injectable()
export class UserService {
    constructor(private http : HttpService) {
    }

    insert(url, data) {
        return this.http.post(url, data);
    }
}
