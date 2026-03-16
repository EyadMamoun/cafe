import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Product } from '../../types/products.type';
import { MenuOptionComponent } from '../../shared/components/menu-option/menu-option.component';

@Component({
  selector: 'app-coffee-menu',
  imports: [MenuOptionComponent],
  templateUrl: './coffee-menu.component.html',
  styleUrl: './coffee-menu.component.scss',
})
export class CoffeeMenuComponent {
  @ViewChild('coldDrinksSection') coldDrinksSection!: ElementRef<HTMLElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHotDrinks = window.scrollY < 220;
    this.isColdDrinks = !(window.scrollY < 220);
  }

  hotCoffee: Product[] = [
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
    },
  ];
  icedCoffee: Product[] = [
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
    },
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
    },
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
    },
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
    },
  ];
  isHotDrinks: boolean = true;
  isColdDrinks: boolean = false;

  viewHotDrinks() {
    this.isHotDrinks = true;
    this.isColdDrinks = false;
  }

  viewColdDrinks() {
    this.isHotDrinks = false;
    this.isColdDrinks = true;

    const yOffset = -80; // height of header
    const el = this.coldDrinksSection.nativeElement;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
