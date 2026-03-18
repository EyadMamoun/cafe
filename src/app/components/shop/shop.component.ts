import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../types/products.type';
import { SubtotalComponent } from '../../shared/components/subtotal/subtotal.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent, SubtotalComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  coffeeProducts: Product[] = [
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
      counts: 1,
    },
    {
      id: 9,
      productName: 'Espresso Forte Dark 312g',
      productDescription:
        'Bold dark roast espresso features a deep, syrupy flavour with a heavy body.',
      productImg: 'assets/Images/coffee_beans_product.png',
      productPrice: 445,
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
