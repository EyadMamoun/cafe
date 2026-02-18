import { Component, Input } from '@angular/core';
import { Product } from '../../../types/products.type';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-menu-option',
  imports: [ProductCardComponent],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.scss',
})
export class MenuOptionComponent {
  @Input() menuItems!: Product;

  isCounter: boolean = false;
  counter: number = 1;
  btnState: 'Order Now' | 'Confirm' = 'Order Now';

  orderBtnClick() {
    this.isCounter = true;
    this.btnState = 'Confirm';
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
