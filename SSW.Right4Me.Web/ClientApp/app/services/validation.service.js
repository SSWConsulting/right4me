"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ValidationService = (function () {
    function ValidationService() {
        this.validationChanged = new BehaviorSubject_1.BehaviorSubject(null);
        this.errors = [];
    }
    ValidationService.prototype.getErrors = function (route) {
        var errors = this.errors.find(function (e) { return e.route == route; });
        if (!errors) {
            errors = { route: route, errors: [] };
        }
        return errors;
    };
    ValidationService.prototype.setErrors = function (handler) {
        var index = this.errors.findIndex(function (e) { return e.route == handler.route; });
        if (index >= 0) {
            this.errors[index] = handler;
        }
        else {
            this.errors.push(handler);
        }
        this.validationChanged.next(true);
    };
    ValidationService.prototype.setModelStateErrors = function (response) {
        var errorJson = response.json();
        if (errorJson) {
            this.setErrors({
                route: location.pathname,
                errors: errorJson
            });
        }
    };
    ValidationService.prototype.handleError = function (error) {
        this.setModelStateErrors(error);
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ValidationService;
}());
ValidationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ValidationService);
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map