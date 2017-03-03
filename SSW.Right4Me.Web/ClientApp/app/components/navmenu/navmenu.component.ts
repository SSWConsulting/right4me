import { Component, OnInit } from '@angular/core';
import { UserProfileClient, UserProfileVm } from './../../Right4MeClient';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent implements OnInit {
    user: UserProfileVm;

    constructor(private userProfileClient: UserProfileClient,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userService.userProfile$.subscribe(profile => this.user = profile);

    }

    viewProfile() {
        this.router.navigateByUrl('/profile');
    }

    getGravatarImage(email: string) {
        return this.userService.getGravatarByEmail(email);
    }

    logout() {
        this.userService.logout().subscribe(() => {
            this.user = undefined;
            this.router.navigate(["/"]);
        })
    }
}
