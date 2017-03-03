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
var Right4MeClient_1 = require("./../../Right4MeClient");
var register_service_1 = require("./../../services/register.service");
var router_1 = require("@angular/router");
var validation_service_1 = require("./../../services/validation.service");
var RegisterComponent = (function () {
    function RegisterComponent(registerClient, registerService, router, validationService) {
        this.registerClient = registerClient;
        this.registerService = registerService;
        this.router = router;
        this.validationService = validationService;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.model);
        this.registerService.register(this.model).subscribe(function (result) {
            _this.router.navigate(["/"]);
        }, function (e) { return _this.validationService.handleError(e); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        template: require('./register.component.html')
    }),
    __metadata("design:paramtypes", [Right4MeClient_1.RegisterClient,
        register_service_1.RegisterService,
        router_1.Router,
        validation_service_1.ValidationService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map