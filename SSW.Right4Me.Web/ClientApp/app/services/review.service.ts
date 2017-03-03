import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { ReviewVm, ReviewClient } from './../Right4MeClient';
import { ValidationService } from './../services/validation.service';

@Injectable()
export class ReviewService {

    constructor(
        private validationService: ValidationService,
        private reviewClient: ReviewClient) { }

    post(model: ReviewVm): Observable<any> {
        return this.reviewClient.post(model).catch(e => this.validationService.handleError(e));
    }

    get(id: number): Observable<any> {
        return this.reviewClient.get(id).catch(e => this.validationService.handleError(e));
    }
}