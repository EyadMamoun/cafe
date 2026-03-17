import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../types/products.type';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: Product;

  isMobileView: boolean = false;

  constructor(private readonly _cartService: CartService) {}

  ngOnInit(): void {
    this.isMobileView = window.innerWidth < 768;
  }

  removeCartItem(id: number) {
    this._cartService.removeItem(id);
  }

  decreaseItemCounts() {
    this.cartItem.counts--;
  }

  increaseItemCounts() {
    this.cartItem.counts++;
  }
}
