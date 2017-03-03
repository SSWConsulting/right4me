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
var ProductListComponent = (function () {
    function ProductListComponent(activatedRoute, router, productClient) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productClient = productClient;
        this.products = [];
        this.id = 0;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.initProducts();
        });
    };
    ProductListComponent.prototype.initProducts = function () {
        var _this = this;
        this.productClient.getByCategory(this.id).subscribe(function (result) {
            _this.products = result;
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        template: require('./product-list.component.html'),
        styles: ["\n        .thumbnail {\n            min-height: 360px;\n        }\n        .thumbnail img {\n            max-height: 200px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        Right4MeClient_1.ProductClient])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map