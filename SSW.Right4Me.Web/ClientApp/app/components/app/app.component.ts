import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent implements OnInit {

    constructor(private userService : UserService)
    { }

    ngOnInit() {

        this.userService.checkLogin();

    }

}
