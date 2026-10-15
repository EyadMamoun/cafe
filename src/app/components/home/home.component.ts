import { Component, OnInit } from '@angular/core';
import { Icon, Product } from '../../types/products.type';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Router } from '@angular/router';
import { SubtotalComponent } from '../../shared/components/subtotal/subtotal.component';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, SubtotalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  specialCoffee: Product[] = [];
  specialDesserts: Product[] = [];
  icons: Icon[];
  screenWidth!: number;
  isMobileView: boolean = false;
  subtotal: number = 0;
  showSubtotal: boolean = true;

  constructor(
    private readonly _router: Router,
    private readonly _cartService: CartService,
    private readonly _productService: ProductService,
  ) {
    this.icons = [
      {
        iconImgUrl: 'assets/Images/hot_coffee.png',
        iconDescription: 'Hot Coffee',
      },
      {
        iconImgUrl: 'assets/Images/ice_coffee.png',
        iconDescription: 'Cold Coffee',
      },
      {
        iconImgUrl: 'assets/Images/coffee_cup.png',
        iconDescription: 'Cup Coffee',
      },
      {
        iconImgUrl: 'assets/Images/Desserts.png',
        iconDescription: 'Dessert',
      },
    ];
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.isMobileView = this.screenWidth <= 768;
    this.getSpecialProducts();
    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
    });
  }

  getSpecialProducts() {
    this._productService.getAllProducts().subscribe((res) => {
      res.forEach((product) => {
        if (product.isSpecial && product.category.name == 'Coffee') {
          this.specialCoffee.push(product);
        } else if (product.isSpecial && product.category.name == 'Dessert') {
          this.specialDesserts.push(product);
        }
      });
    });
  }

  navigateToShop() {
    this._router.navigateByUrl('/shop');
  }

  onOrder() {
    this._router.navigateByUrl('/coffee-menu');
  }

  closeSubtotal() {
    this.showSubtotal = false;
  }
}
