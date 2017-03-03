"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var angular2_universal_1 = require("angular2-universal");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var counter_component_1 = require("./components/counter/counter.component");
var register_component_1 = require("./components/user/register.component");
var profile_component_1 = require("./components/user/profile.component");
var login_component_1 = require("./components/user/login.component");
var product_edit_component_1 = require("./components/product/product-edit.component");
var product_list_component_1 = require("./components/product/product-list.component");
var product_component_1 = require("./components/product/product.component");
var product_review_component_1 = require("./components/product/product-review.component");
var categories_component_1 = require("./components/product/categories.component");
var Right4MeClient_1 = require("./Right4MeClient");
var validation_service_1 = require("./services/validation.service");
var register_service_1 = require("./services/register.service");
var user_service_1 = require("./services/user.service");
var review_service_1 = require("./services/review.service");
var handle_validation_directive_1 = require("./directives/handle-validation.directive");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            counter_component_1.CounterComponent,
            fetchdata_component_1.FetchDataComponent,
            home_component_1.HomeComponent,
            register_component_1.RegisterComponent,
            profile_component_1.ProfileComponent,
            login_component_1.LoginComponent,
            product_edit_component_1.ProductEditComponent,
            categories_component_1.CategoriesComponent,
            handle_validation_directive_1.HandleValidationDirective,
            product_review_component_1.ProductReviewComponent,
            product_component_1.ProductComponent,
            product_list_component_1.ProductListComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'counter', component: counter_component_1.CounterComponent },
                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'product-edit/:id', component: product_edit_component_1.ProductEditComponent },
                { path: 'product-review/:id', component: product_review_component_1.ProductReviewComponent },
                { path: 'product/:id', component: product_component_1.ProductComponent },
                { path: 'product-list/:id', component: product_list_component_1.ProductListComponent },
                { path: 'categories', component: categories_component_1.CategoriesComponent },
                { path: '**', redirectTo: 'home' }
            ]),
            ng2_bootstrap_1.RatingModule,
            ng2_bootstrap_1.DropdownModule
        ],
        providers: [
            Right4MeClient_1.RegisterClient,
            Right4MeClient_1.LoginClient,
            Right4MeClient_1.UserProfileClient,
            validation_service_1.ValidationService,
            register_service_1.RegisterService,
            Right4MeClient_1.ProductClient,
            review_service_1.ReviewService,
            Right4MeClient_1.ReviewClient,
            user_service_1.UserService,
            Right4MeClient_1.AccessibilityNeedsClient
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map