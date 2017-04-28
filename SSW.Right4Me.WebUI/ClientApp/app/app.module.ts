import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { RegisterComponent } from './components/user/register.component';
import { ProfileComponent } from './components/user/profile.component';
import { LoginComponent } from './components/user/login.component';
import { ProductEditComponent } from './components/product/product-edit.component';
import { ProductListComponent } from './components/product/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductReviewComponent } from './components/product/product-review.component';
import { CategoriesComponent } from './components/product/categories.component';

import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';
import { ValidationService } from './services/validation.service';
import { ReviewService } from './services/review.service';

import { HandleValidationDirective } from './directives/handle-validation.directive';

import { RegisterClient, LoginClient, UserProfileClient, ProductClient, ReviewClient, AccessibilityNeedsClient } from './Right4MeClient';

import { RatingModule, BsDropdownModule } from 'ng2-bootstrap';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        RegisterComponent,
        ProfileComponent,
        LoginComponent,
        ProductEditComponent,
        ProductListComponent,
        ProductComponent,
        ProductReviewComponent,
        CategoriesComponent,
        HandleValidationDirective
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'login', component: LoginComponent },
            { path: 'product-edit/:id', component: ProductEditComponent },
            { path: 'product-review/:id', component: ProductReviewComponent },
            { path: 'product/:id', component: ProductComponent },
            { path: 'product-list/:id', component: ProductListComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        RatingModule,
        BsDropdownModule
    ],
    providers: [
        RegisterClient,
        LoginClient,
        UserProfileClient,
        ProductClient,
        ReviewClient,
        AccessibilityNeedsClient,
        UserService,
        RegisterService,
        ValidationService,
        ReviewService
    ]
})
export class AppModule {
}
