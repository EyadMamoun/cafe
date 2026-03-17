import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Product } from '../../types/products.type';
import { MenuOptionComponent } from '../../shared/components/menu-option/menu-option.component';

@Component({
  selector: 'app-dessert-menu',
  imports: [MenuOptionComponent],
  templateUrl: './dessert-menu.component.html',
  styleUrl: './dessert-menu.component.scss',
})
export class DessertMenuComponent {
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
}
