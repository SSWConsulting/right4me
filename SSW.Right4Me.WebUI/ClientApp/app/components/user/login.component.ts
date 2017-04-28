import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginClient, LoginVm } from './../../Right4MeClient';
import { ValidationService } from './../../services/validation.service';
import { UserService } from './../../services/user.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    login = <LoginVm>{};

    constructor(
        private loginClient: LoginClient,
        private userService: UserService,
        private router: Router,
        private validationService: ValidationService) { }

    submit() {
        var this_ = this;
        this.userService.login(this.login)
            .subscribe(() => {
                this_.router.navigate(["/"]);
            },
            (error) => this.validationService.handleError(error));
    }
}