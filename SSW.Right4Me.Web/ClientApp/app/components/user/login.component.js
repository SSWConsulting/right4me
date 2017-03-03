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
var router_1 = require("@angular/router");
var Right4MeClient_1 = require("./../../Right4MeClient");
var validation_service_1 = require("./../../services/validation.service");
var user_service_1 = require("./../../services/user.service");
var LoginComponent = (function () {
    function LoginComponent(loginClient, userService, router, validationService) {
        this.loginClient = loginClient;
        this.userService = userService;
        this.router = router;
        this.validationService = validationService;
        this.login = {};
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var this_ = this;
        this.userService.login(this.login)
            .subscribe(function () {
            this_.router.navigate(["/"]);
        }, function (error) { return _this.validationService.handleError(error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: require('./login.component.html')
    }),
    __metadata("design:paramtypes", [Right4MeClient_1.LoginClient,
        user_service_1.UserService,
        router_1.Router,
        validation_service_1.ValidationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map