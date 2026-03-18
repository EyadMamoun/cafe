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
  selector: 'app-coffee-menu',
  imports: [MenuOptionComponent, SubtotalComponent],
  templateUrl: './coffee-menu.component.html',
  styleUrl: './coffee-menu.component.scss',
})
export class CoffeeMenuComponent implements OnInit {
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
      counts: 1,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
      counts: 1,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
      counts: 1,
    },
    {
      id: 1,
      productImg: 'assets/Images/Turkish_Coffee.png',
      productName: 'Turkish Coffee',
      productDescription:
        'Finely ground coffee beans boiled and served in a cup.',
      productPrice: 70,
      counts: 1,
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
      counts: 1,
    },
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
      counts: 1,
    },
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
      counts: 1,
    },
    {
      id: 3,
      productImg: 'assets/Images/Salted_caramel.png',
      productName: 'Iced Salted Caramel',
      productDescription:
        'Caramel espresso with whipped cream and salted sugar.',
      productPrice: 180,
      counts: 1,
    },
  ];
  isHotDrinks: boolean = true;
  isColdDrinks: boolean = false;
  subtotal: number = 0;
  showSubtotal: boolean = true;

  constructor(private readonly _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
    });
  }

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

  closeSubtotal() {
    this.showSubtotal = false;
  }
}
