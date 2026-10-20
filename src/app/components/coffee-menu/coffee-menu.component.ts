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
import { ProductService } from '../../services/product.service';

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

  hotCoffee: Product[] = [];
  icedCoffee: Product[] = [];
  isHotDrinks: boolean = true;
  isColdDrinks: boolean = false;
  subtotal: number = 0;
  showSubtotal: boolean = true;

  constructor(
    private readonly _cartService: CartService,
    private readonly _productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
    });
  }

  viewHotDrinks() {
    this.isHotDrinks = true;
    this.isColdDrinks = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewColdDrinks() {
    this.isHotDrinks = false;
    this.isColdDrinks = true;

    const yOffset = -140; // height of header
    const el = this.coldDrinksSection.nativeElement;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  closeSubtotal() {
    this.showSubtotal = false;
  }

  getProducts() {
    this._productService.getAllProducts().subscribe((res) => {
      res.products.forEach((product) => {
        if (product.category.name === 'Coffee') {
          if (product.coffeeType === 'hot') {
            this.hotCoffee.push({ ...product, counts: 1 });
          } else if (product.coffeeType === 'cold') {
            this.icedCoffee.push({ ...product, counts: 1 });
          }
        }
      });
    });
  }
}
