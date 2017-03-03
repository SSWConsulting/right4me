import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from './../../services/review.service';

@Component({
    template: require('./product-review.component.html'),
    styles: [
        `
            rating {
                font-size: 40px;
            }
        `
    ]
})
export class ProductReviewComponent implements OnInit {

    max: number = 5;
    isReadonly: boolean = false;
    rating: any = {};
    id: number = 0;
    review: any = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private reviewService: ReviewService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.initReview();
        });
    }

    initReview() {
        this.reviewService.get(this.id).subscribe(review => {
            this.review = review;
        })
    }

    saveForm() {
        this.reviewService.post(this.review).subscribe(result => {
            this.router.navigate(["/product", this.id]);
        });
    }
}