import { Component, OnInit } from '@angular/core';
import { Icon, Product } from '../../types/products.type';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  specialCoffee: Product[];
  specialDesserts: Product[];
  icons: Icon[];
  screenWidth!: number;
  isMobileView: boolean = false;

  constructor(private readonly _router: Router) {
    this.specialCoffee = [
      {
        id: 1,
        productImg: 'assets/Images/Turkish_Coffee.png',
        productName: 'Turkish Coffee',
        productDescription: 'Finely ground coffee boiled and served in a cup.',
        productPrice: 70,
        counts: 1,
      },
      {
        id: 2,
        productImg: 'assets/Images/Latte.png',
        productName: 'Iced Spanish Latte',
        productDescription:
          'A Latin twist of rich espresso and special milk with a sweet finish.',
        productPrice: 165,
        counts: 1,
      },
      {
        id: 3,
        productImg: 'assets/Images/Salted_caramel.png',
        productName: 'Iced Salted Caramel',
        productDescription:
          'Caramel cream espresso with whipped cream and salted sugar.',
        productPrice: 180,
        counts: 1,
      },
      {
        id: 4,
        productImg: 'assets/Images/Filter_Coffee.jpg',
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
        productImg: 'assets/Images/Classic_Tiramisu.png',
        productName: 'Classic Tiramisu',
        productDescription:
          'Espresso-soaked ladyfingers with mascarpone cream and cocoa.',
        productPrice: 220,
        counts: 1,
      },
      {
        id: 6,
        productImg: 'assets/Images/Donuts.png',
        productName: 'Donuts',
        productDescription:
          'Golden, tender donut crafted with rich, sweet glaze.',
        productPrice: 145,
        counts: 1,
      },
      {
        id: 7,
        productImg: 'assets/Images/Cinnamon_Churros.png',
        productName: 'Cinnamon Churros',
        productDescription: 'Crispy churros coated in cinnamon sugar.',
        productPrice: 190,
        counts: 1,
      },
      {
        id: 8,
        productImg: 'assets/Images/Lotus_Cheesecake.png',
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
  }

  navigateToShop() {
    this._router.navigateByUrl('/shop');
  }

  onOrder() {
    this._router.navigateByUrl('/coffee-menu');
  }
}
