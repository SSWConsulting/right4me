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
var user_service_1 = require("./../../services/user.service");
var ProductComponent = (function () {
    function ProductComponent(activatedRoute, router, userService, productClient) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.productClient = productClient;
        this.id = 0;
        this.product = {};
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.initProduct();
        });
    };
    ProductComponent.prototype.initProduct = function () {
        var _this = this;
        this.productClient.get(this.id).subscribe(function (result) {
            _this.product = result;
        });
    };
    ProductComponent.prototype.getGravatarImage = function (email) {
        return this.userService.getGravatarByEmail(email);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        template: require('./product.component.html'),
        styles: ["\n        .review .description {\n            padding: 20px 0;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService,
        Right4MeClient_1.ProductClient])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map