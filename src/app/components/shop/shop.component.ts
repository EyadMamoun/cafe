import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../types/products.type';

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
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
}
