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
var user_service_1 = require("./../../services/user.service");
var router_1 = require("@angular/router");
var validation_service_1 = require("./../../services/validation.service");
var ProfileComponent = (function () {
    function ProfileComponent(userService, router, validationService, accessibilityNeedsClient) {
        this.userService = userService;
        this.router = router;
        this.validationService = validationService;
        this.accessibilityNeedsClient = accessibilityNeedsClient;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userProfile$.subscribe(function (p) { return _this.model = p; });
        this.accessibilityNeedsClient.get().subscribe(function (an) { return _this.availableNeeds = an; });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        console.log(this.model);
        this.userService.updateProfile(this.model).subscribe(function (result) {
            _this.router.navigate(["/"]);
        }, function (e) { return _this.validationService.handleError(e); });
    };
    ProfileComponent.prototype.needSelected = function (need) {
        if (!this.model.accessibilityNeeds)
            return false;
        return this.model.accessibilityNeeds.filter(function (an) { return an.id === need.id; }).length > 0;
    };
    ProfileComponent.prototype.toggleNeed = function (need) {
        if (this.needSelected(need)) {
            var index = this.model.accessibilityNeeds.indexOf(this.model.accessibilityNeeds.filter(function (an) { return an.id === need.id; })[0]);
            this.model.accessibilityNeeds.splice(index, 1);
        }
        else {
            if (!this.model.accessibilityNeeds)
                this.model.accessibilityNeeds = [];
            this.model.accessibilityNeeds.push(need);
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        template: require('./profile.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        validation_service_1.ValidationService,
        Right4MeClient_1.AccessibilityNeedsClient])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map