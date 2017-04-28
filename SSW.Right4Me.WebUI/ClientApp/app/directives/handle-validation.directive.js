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
var validation_service_1 = require("../services/validation.service");
var router_1 = require("@angular/router");
var HandleValidationDirective = (function () {
    function HandleValidationDirective(el, renderer, validationService, activatedRoute) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.validationService = validationService;
        this.activatedRoute = activatedRoute;
        this.validationService.validationChanged.subscribe(function () { return _this.handleErrors(); });
        renderer.listen(el.nativeElement, 'change', function (event) { return _this.handleClienValidation(event); });
    }
    HandleValidationDirective.prototype.handleErrors = function () {
        try {
            if (location) {
                var name_1 = this.el.nativeElement.name;
                var handler = this.validationService.getErrors(location.pathname);
                if (name_1) {
                    var parent_1 = this.el.nativeElement.parentNode;
                    this.removeChildBlocks(parent_1);
                    if (handler && handler.errors) {
                        var error = handler.errors["" + name_1];
                        if (error) {
                            this.renderer.setElementClass(parent_1, 'has-error', true);
                            var block = this.renderer.createElement(parent_1, 'span');
                            this.renderer.setElementClass(block, 'help-block', true);
                            this.renderer.setText(block, error);
                        }
                    }
                }
                else {
                    this.removeChildBlocks(this.el.nativeElement);
                    var block = this.renderer.createElement(this.el.nativeElement, 'span');
                    this.renderer.setElementClass(block, 'help-block', true);
                    this.renderer.setText(block, handler.errors[""]);
                }
            }
        }
        catch (ex) {
        }
    };
    HandleValidationDirective.prototype.handleClienValidation = function (event) {
        var el = event.target;
        var name = this.el.nativeElement.name;
        var error = '';
        // console.log(el.validity);
        this.clearError(el.parentNode);
        if (!el.validity.valid) {
            if (el.validity.valueMissing) {
                error = "The " + name + " field is required";
            }
            if (el.validity.rangeUnderflow) {
                error = "Value is under minimum of " + this.el.nativeElement.min;
            }
            if (el.validity.rangeOverflow) {
                error = "Value is over maximum of " + this.el.nativeElement.max;
            }
            if (el.validity.patternMismatch) {
                error = "Wrong Format (" + this.el.nativeElement.pattern + ")";
            }
            this.renderer.setElementClass(el.parentNode, 'has-error', true);
            if (error) {
                this.addErrorBlock(el, error);
            }
        }
    };
    HandleValidationDirective.prototype.addErrorBlock = function (el, error) {
        var block = this.renderer.createElement(el.parentNode, 'span');
        this.renderer.setElementClass(block, 'help-block', true);
        this.renderer.setText(block, error);
    };
    HandleValidationDirective.prototype.clearError = function (el) {
        this.renderer.setElementClass(el, 'has-error', false);
        this.removeChildBlocks(el);
    };
    HandleValidationDirective.prototype.removeChildBlocks = function (el) {
        try {
            // IE does NOT support forEach from childNodes
            var array = Array.from(el.childNodes);
            array.forEach(function (element) {
                if (element) {
                    if (element.className == 'help-block') {
                        el.removeChild(element);
                    }
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return HandleValidationDirective;
}());
HandleValidationDirective = __decorate([
    core_1.Directive({
        selector: '[handleValidation]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        validation_service_1.ValidationService,
        router_1.ActivatedRoute])
], HandleValidationDirective);
exports.HandleValidationDirective = HandleValidationDirective;
//# sourceMappingURL=handle-validation.directive.js.map