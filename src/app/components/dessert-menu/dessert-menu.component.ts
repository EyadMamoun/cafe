import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Product } from '../../types/products.type';
import { MenuOptionComponent } from '../../shared/components/menu-option/menu-option.component';
import { SubtotalComponent } from '../../shared/components/subtotal/subtotal.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-dessert-menu',
  imports: [MenuOptionComponent, SubtotalComponent],
  templateUrl: './dessert-menu.component.html',
  styleUrl: './dessert-menu.component.scss',
})
export class DessertMenuComponent implements OnInit {
  dessert: Product[] = [
    {
      id: 5,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription: 'Espresso ladyfingers with mascarpone and cocoa.',
      productPrice: 220,
      counts: 1,
    },
    {
      id: 5,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription: 'Espresso ladyfingers with mascarpone and cocoa.',
      productPrice: 220,
      counts: 1,
    },
    {
      id: 5,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription: 'Espresso ladyfingers with mascarpone and cocoa.',
      productPrice: 220,
      counts: 1,
    },
    {
      id: 5,
      productImg: 'assets/Images/Classic_Tiramisu.png',
      productName: 'Classic Tiramisu',
      productDescription: 'Espresso ladyfingers with mascarpone and cocoa.',
      productPrice: 220,
      counts: 1,
    },
  ];
  subtotal: number = 0;
  showSubtotal: boolean = true;

  constructor(private readonly _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
    });
  }

  closeSubtotal() {
    this.showSubtotal = false;
  }
}
