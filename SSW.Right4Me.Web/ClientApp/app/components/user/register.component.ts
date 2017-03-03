import { Component, OnInit } from '@angular/core';
import { RegisterClient, RegisterVm } from './../../Right4MeClient';
import { RegisterService } from './../../services/register.service';
import { Router } from '@angular/router';
import { ValidationService } from './../../services/validation.service';

@Component({
    selector: 'counter',
    template: require('./register.component.html')
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