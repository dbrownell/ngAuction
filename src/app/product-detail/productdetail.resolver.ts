import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Injectable()
export class ProductDetailResolver implements Resolve<any>{
    product: Product;
    
    constructor(private route: ActivatedRoute,
        private productService: ProductService) { }

    resolve(): Product {
        const prodId: number = parseInt(
            this.route.snapshot.params['productId']);
        return this.productService.getProductById(prodId);
    }
}