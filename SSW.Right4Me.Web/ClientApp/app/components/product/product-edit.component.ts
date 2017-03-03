import { Component, OnInit } from '@angular/core';
import { ProductVm, ProductClient } from './../../Right4MeClient';
import { ValidationService } from './../../services/validation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: require('./product-edit.component.html')
})
export class ProductEditComponent implements OnInit {

    id: number = 0;
    product = <ProductVm>{};

    constructor(
        private productClient: ProductClient,
        private router: Router,
        private validationService: ValidationService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.initProduct();
        });
    }

    initProduct() {
        this.productClient.get(this.id).subscribe(prod => {
            this.product = prod;
        });
    }

    saveForm() {
        this.productClient.post(this.product)
            .subscribe((prod) => {
                console.log(prod);
                this.router.navigateByUrl(`/product-review/${prod.id}`);
            }, e => this.validationService.handleError(e));
    }
}