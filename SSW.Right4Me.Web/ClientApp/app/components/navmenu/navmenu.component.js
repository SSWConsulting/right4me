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
var NavMenuComponent = (function () {
    function NavMenuComponent(userProfileClient, userService, router) {
        this.userProfileClient = userProfileClient;
        this.userService = userService;
        this.router = router;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userProfile$.subscribe(function (profile) { return _this.user = profile; });
    };
    NavMenuComponent.prototype.viewProfile = function () {
        this.router.navigateByUrl('/profile');
    };
    NavMenuComponent.prototype.getGravatarImage = function (email) {
        return this.userService.getGravatarByEmail(email);
    };
    NavMenuComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function () {
            _this.user = undefined;
            _this.router.navigate(["/"]);
        });
    };
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        template: require('./navmenu.component.html'),
        styles: [require('./navmenu.component.css')]
    }),
    __metadata("design:paramtypes", [Right4MeClient_1.UserProfileClient,
        user_service_1.UserService,
        router_1.Router])
], NavMenuComponent);
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map