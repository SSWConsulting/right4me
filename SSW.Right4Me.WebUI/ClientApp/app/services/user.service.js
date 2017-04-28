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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Right4MeClient_1 = require("./../Right4MeClient");
var md5_1 = require("./md5");
var UserService = (function () {
    function UserService(loginClient, userProfileClient) {
        this.loginClient = loginClient;
        this.userProfileClient = userProfileClient;
        this.userProfileSource = new BehaviorSubject_1.BehaviorSubject(null);
        this.userProfile$ = this.userProfileSource.asObservable();
    }
    UserService.prototype.login = function (login) {
        var _this = this;
        var result = this.loginClient.login(login);
        result.subscribe(function (profile) {
            _this.userProfileSource.next(profile);
        });
        return result;
    };
    UserService.prototype.logout = function () {
        return this.loginClient.logout();
    };
    UserService.prototype.checkLogin = function () {
        var _this = this;
        this.userProfileClient.userProfile()
            .subscribe(function (p) {
            if (p)
                _this.userProfileSource.next(p);
        }, function (error) {
            // debugger; 
        });
    };
    UserService.prototype.updateProfile = function (profile) {
        var _this = this;
        console.log("calling update user profile");
        var obs = this.userProfileClient.updateUserProfile(profile);
        obs.subscribe(function (newProfile) {
            console.log("update user profile success");
            _this.userProfileSource.next(newProfile);
        });
        return obs;
    };
    UserService.prototype.getGravatarByEmail = function (email) {
        if (!email) {
            email = "poaisduf poaisdufopaisdf";
        }
        ;
        return 'http://www.gravatar.com/avatar/' + md5_1.md5(email) + '?s=210&d=mm';
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Right4MeClient_1.LoginClient,
        Right4MeClient_1.UserProfileClient])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map