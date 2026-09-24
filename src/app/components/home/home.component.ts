import { Component, OnInit } from '@angular/core';
import { Icon, Product } from '../../types/products.type';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Router } from '@angular/router';
import { SubtotalComponent } from '../../shared/components/subtotal/subtotal.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, SubtotalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  specialCoffee: Product[];
  specialDesserts: Product[];
  icons: Icon[];
  screenWidth!: number;
  isMobileView: boolean = false;
  subtotal: number = 0;
  showSubtotal: boolean = true;

  constructor(
    private readonly _router: Router,
    private readonly _cartService: CartService,
  ) {
    this.specialCoffee = [
      {
        id: 1,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/f_auto,q_auto/Turkish_Coffee_pzweo4',
        productName: 'Turkish Coffee',
        productDescription: 'Finely ground coffee boiled and served in a cup.',
        productPrice: 70,
        counts: 1,
      },
      {
        id: 2,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783944119/Latte_sn6h93.png',
        productName: 'Iced Spanish Latte',
        productDescription:
          'A Latin twist of rich espresso and special milk with a sweet finish.',
        productPrice: 165,
        counts: 1,
      },
      {
        id: 3,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783944120/Salted_caramel_jskqbi.png',
        productName: 'Iced Salted Caramel',
        productDescription:
          'Caramel cream espresso with whipped cream and salted sugar.',
        productPrice: 180,
        counts: 1,
      },
      {
        id: 4,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783944117/Filter_Coffee_d2pgk9.jpg',
        productName: 'Filtered Coffee',
        productDescription:
          'Freshly brewed filtered coffee with a smooth, clean finish.',
        productPrice: 85,
        counts: 1,
      },
    ];

    this.specialDesserts = [
      {
        id: 5,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783942295/Classic_Tiramisu_mixdej.png',
        productName: 'Classic Tiramisu',
        productDescription:
          'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
        productPrice: 220,
        counts: 1,
      },
      {
        id: 6,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783944119/Donuts_m1a1pw.png',
        productName: 'Donuts',
        productDescription:
          'Golden, tender donut crafted with rich, sweet glaze.',
        productPrice: 145,
        counts: 1,
      },
      {
        id: 7,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783944117/Cinnamon_Churros_bygw1m.png',
        productName: 'Cinnamon Churros',
        productDescription: 'Crispy churros coated in cinnamon sugar.',
        productPrice: 190,
        counts: 1,
      },
      {
        id: 8,
        productImg:
          'https://res.cloudinary.com/ec96s1ha/image/upload/v1783944122/Lotus_Cheesecake_nntcbt.png',
        productName: 'Lotus Cheesecake',
        productDescription:
          'Creamy cheesecake topped with Lotus biscuit crumble.',
        productPrice: 160,
        counts: 1,
      },
    ];

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
    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
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
