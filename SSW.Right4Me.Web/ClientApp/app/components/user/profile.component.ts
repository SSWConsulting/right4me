import { Component, OnInit } from '@angular/core';
import { RegisterClient, UserProfileVm, AccessibilityNeedVm, AccessibilityNeedsClient  } from './../../Right4MeClient';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ValidationService } from './../../services/validation.service';

@Component({
    selector: 'counter',
    template: require('./profile.component.html')
})
export class ProfileComponent implements OnInit {

    model: UserProfileVm;
    availableNeeds: AccessibilityNeedVm[];

    constructor(
        private userService: UserService,
        private router: Router,
        private validationService: ValidationService,
        private accessibilityNeedsClient : AccessibilityNeedsClient
    ) { }

    ngOnInit() {
        this.userService.userProfile$.subscribe(p => this.model = p);
        this.accessibilityNeedsClient.get().subscribe(an => this.availableNeeds = an);
    }

    update() {
        console.log(this.model);
        this.userService.updateProfile(this.model).subscribe(result => {
            this.router.navigate(["/"]);
        }, e => this.validationService.handleError(e));
    }

    needSelected(need: AccessibilityNeedVm): boolean {
        if (!this.model.accessibilityNeeds) return false;
        return this.model.accessibilityNeeds.filter(an => an.id === need.id).length > 0;
    }

    toggleNeed(need: AccessibilityNeedVm) {
        if (this.needSelected(need)) {
            var index = this.model.accessibilityNeeds.indexOf(this.model.accessibilityNeeds.filter(an => an.id === need.id)[0]);
            this.model.accessibilityNeeds.splice(index, 1);
        } else {
            if (!this.model.accessibilityNeeds) this.model.accessibilityNeeds = <AccessibilityNeedVm[]>[];
            this.model.accessibilityNeeds.push(need);
        }
    }

}