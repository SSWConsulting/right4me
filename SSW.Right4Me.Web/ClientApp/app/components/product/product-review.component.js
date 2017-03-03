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
var review_service_1 = require("./../../services/review.service");
var ProductReviewComponent = (function () {
    function ProductReviewComponent(activatedRoute, router, reviewService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.reviewService = reviewService;
        this.max = 5;
        this.isReadonly = false;
        this.rating = {};
        this.id = 0;
        this.review = {};
    }
    ProductReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.initReview();
        });
    };
    ProductReviewComponent.prototype.initReview = function () {
        var _this = this;
        this.reviewService.get(this.id).subscribe(function (review) {
            _this.review = review;
        });
    };
    ProductReviewComponent.prototype.saveForm = function () {
        var _this = this;
        this.reviewService.post(this.review).subscribe(function (result) {
            _this.router.navigate(["/product", _this.id]);
        });
    };
    return ProductReviewComponent;
}());
ProductReviewComponent = __decorate([
    core_1.Component({
        template: require('./product-review.component.html'),
        styles: [
            "\n            rating {\n                font-size: 40px;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        review_service_1.ReviewService])
], ProductReviewComponent);
exports.ProductReviewComponent = ProductReviewComponent;
//# sourceMappingURL=product-review.component.js.map