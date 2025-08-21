import { Component } from '@angular/core';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";

@Component({
  selector: 'app-coffee-menu',
  imports: [ProductCardComponent],
  templateUrl: './coffee-menu.component.html',
  styleUrl: './coffee-menu.component.scss'
})
export class CoffeeMenuComponent {

}
