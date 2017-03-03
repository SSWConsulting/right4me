import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ValidationService {
    errors: RouteErrors[];
    validationChanged = new BehaviorSubject<boolean>(null);

    constructor() {
        this.errors = [];
    }

    getErrors(route: string): RouteErrors {
        let errors = this.errors.find(e => e.route == route);
        if (!errors) {
            errors = <RouteErrors>{ route: route, errors: [] };
        }
        return errors;
    }

    setErrors(handler: RouteErrors) {
        let index = this.errors.findIndex(e => e.route == handler.route);
        if (index >= 0) {
            this.errors[index] = handler;
        } else {
            this.errors.push(handler);
        }
        this.validationChanged.next(true);
    }

    setModelStateErrors(response: any) {
        let errorJson = response.json();
        if (errorJson) {
            this.setErrors(<RouteErrors>{
                route: location.pathname,
                errors: errorJson
            });
        }
    }

    handleError(error: any) {
        this.setModelStateErrors(error);
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

export interface RouteErrors {
    route: string;
    error: string;
    errors: any;
}
