import { Component } from '@angular/core';
import { Product } from '../../types/products.type';
import { CartItemComponent } from '../../shared/components/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart: Product[] = [
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
    },
    {
      id: 2,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
    },
  ];
}
