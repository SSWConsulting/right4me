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
var validation_service_1 = require("./../../services/validation.service");
var router_1 = require("@angular/router");
var ProductEditComponent = (function () {
    function ProductEditComponent(productClient, router, validationService, activatedRoute) {
        this.productClient = productClient;
        this.router = router;
        this.validationService = validationService;
        this.activatedRoute = activatedRoute;
        this.id = 0;
        this.product = {};
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.initProduct();
        });
    };
    ProductEditComponent.prototype.initProduct = function () {
        var _this = this;
        this.productClient.get(this.id).subscribe(function (prod) {
            _this.product = prod;
        });
    };
    ProductEditComponent.prototype.saveForm = function () {
        var _this = this;
        this.productClient.post(this.product)
            .subscribe(function (prod) {
            console.log(prod);
            _this.router.navigateByUrl("/product-review/" + prod.id);
        }, function (e) { return _this.validationService.handleError(e); });
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        template: require('./product-edit.component.html')
    }),
    __metadata("design:paramtypes", [Right4MeClient_1.ProductClient,
        router_1.Router,
        validation_service_1.ValidationService,
        router_1.ActivatedRoute])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map