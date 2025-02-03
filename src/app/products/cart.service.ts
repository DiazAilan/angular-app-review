import { Injectable } from "@angular/core";

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class CartService {
  private items: Product[] = [];

  addToCart(item: Product): void {
    this.items.push(item);
  }

  getItems(): Product[] {
    return this.items;
  }
}
