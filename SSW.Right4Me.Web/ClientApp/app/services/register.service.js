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
require("rxjs/Rx");
var http_1 = require("@angular/http");
var validation_service_1 = require("./../services/validation.service");
var RegisterService = (function () {
    function RegisterService(http, validationService) {
        this.http = http;
        this.validationService = validationService;
        this.baseUrl = "";
    }
    RegisterService.prototype.register = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/register";
        // const content_ = JSON.stringify(model ? model.toJS() : null);
        var content_ = JSON.stringify(model);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new http_1.Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        })
            .catch(function (e) { return _this.validationService.handleError(e); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        validation_service_1.ValidationService])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map