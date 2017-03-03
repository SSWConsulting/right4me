import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClient, ProductVm } from './../../Right4MeClient';
import { UserService } from './../../services/user.service';

@Component({
    template: require('./product.component.html'),
    styles:[`
        .review .description {
            padding: 20px 0;
        }
    `]
})
export class ProductComponent implements OnInit {

    id: number = 0;
    product: ProductVm = <ProductVm>{};

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private productClient: ProductClient) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.initProduct();
        });
    }

    initProduct() {
        this.productClient.get(this.id).subscribe(result => {
            this.product = result;
        })
    }

    getGravatarImage(email: string) {
        return this.userService.getGravatarByEmail(email);
    }
}