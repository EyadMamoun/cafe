import { Component, Input } from '@angular/core';
import { Product } from '../../../types/products.type';
import { CartService } from '../../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-option',
  imports: [],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.scss',
})
export class MenuOptionComponent {
  @Input() menuItems!: Product;

  isCounter: boolean = false;
  counter: number = 1;
  cartNumber: number = 0;
  btnState: 'Order Now' | 'Add to cart' = 'Order Now';

  constructor(
    private readonly _cartService: CartService,
    private readonly toastr: ToastrService,
  ) {}

  orderBtnClick() {
    this.isCounter = true;
    if (this.btnState == 'Order Now') {
      this.btnState = 'Add to cart';
    } else {
      this._cartService.addItem();
      this.btnState = 'Order Now';
      this.isCounter = false;
      this.toastr.success('Product added to cart');
    }
  }

  addItemBtn() {
    this.counter++;
  }

  removeItemBtn() {
    this.counter--;
    if (this.counter == 0) {
      this.counter = 1;
      this.isCounter = false;
      this.btnState = 'Order Now';
    }
  }
}
