import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/products.type';
import { CartItemComponent } from '../../shared/components/cart-item/cart-item.component';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  isCartEmpty: boolean = true;
  subtotal: number = 0;
  total: number = 0;

  constructor(
    private readonly _cartService: CartService,
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {
    this._cartService.cartElement$.subscribe((value) => {
      this.isCartEmpty = value.length == 0;
      this.cart = value;
    });

    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
      this.total = this.subtotal + 40;
    });
  }

  goToCheckout() {
    this._router.navigateByUrl('/checkout');
  }
}
