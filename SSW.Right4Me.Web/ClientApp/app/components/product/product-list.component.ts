import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClient, ProductVm } from './../../Right4MeClient';

@Component({
    template: require('./product-list.component.html'),
    styles: [`
        .thumbnail {
            min-height: 360px;
        }
        .thumbnail img {
            max-height: 200px;
        }
    `]
})
export class ProductListComponent implements OnInit {

    products: ProductVm[] = [];
    id: number = 0;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private productClient: ProductClient) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.initProducts();
        });
    }

    initProducts() {
        this.productClient.getByCategory(this.id).subscribe(result => {
            this.products = result;
        })
    }
}