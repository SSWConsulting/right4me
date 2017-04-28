import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterClient, RegisterVm } from './../../Right4MeClient';
import { ValidationService } from './../../services/validation.service';
import { RegisterService } from './../../services/register.service';

@Component({
    selector: 'counter',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    model: RegisterVm = <RegisterVm>{};

    constructor(
        private registerClient: RegisterClient,
        private registerService: RegisterService,
        private router: Router,
        private validationService: ValidationService
    ) { }

    ngOnInit() {
    }

    register() {
        console.log(this.model);
        this.registerService.register(this.model).subscribe(result => {
            this.router.navigate(["/"]);
        }, e => this.validationService.handleError(e));
    }
}