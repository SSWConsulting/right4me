import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { RegisterVm } from './../Right4MeClient';
import { ValidationService } from './../services/validation.service';

@Injectable()
export class RegisterService {

    baseUrl: string = "";
    constructor(
        private http: Http,
        private validationService: ValidationService) { }

    register(model: RegisterVm): Observable<any> {
        let url_ = this.baseUrl + "/api/register";

       // const content_ = JSON.stringify(model ? model.toJS() : null);
        const content_ = JSON.stringify(model);

        return this.http.request(url_, {
                body: content_,
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json; charset=UTF-8"
                })
            })
            .catch(e => this.validationService.handleError(e));
    }
}