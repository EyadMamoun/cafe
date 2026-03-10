import { Component, Input } from '@angular/core';
import { Product } from '../../../types/products.type';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() cartItem!: Product;
}
