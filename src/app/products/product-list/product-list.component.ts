import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../shared/types/product.interface';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    standalone: false
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Product 1', id: 1, price: 100 },
    { name: 'Product 2', id: 2, price: 200 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
