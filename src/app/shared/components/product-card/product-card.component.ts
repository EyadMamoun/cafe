import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() imgSrc: string = "";
  @Input() imgAlt: string = "";
  @Input() productName: string = "";
  @Input() productDescription: string = "";
  @Input() productPrice: number = 0;
  @Input() showPrice: boolean = true;

}
