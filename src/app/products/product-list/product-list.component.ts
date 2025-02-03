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
    { name: 'Product 1' },
    { name: 'Product 2' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
