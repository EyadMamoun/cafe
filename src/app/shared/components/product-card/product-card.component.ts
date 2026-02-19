import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productPrice: number = 0;
  @Input() showPrice: boolean = true;
  @Input() specialProduct: boolean = false;
  @Input() normalProduct: boolean = false;

  isCounter: boolean = false;
  counter: number = 1;
  btnState: 'Order Now' | 'Add to cart' = 'Order Now';

  orderBtnClick() {
    this.isCounter = true;
    this.btnState = 'Add to cart';
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
