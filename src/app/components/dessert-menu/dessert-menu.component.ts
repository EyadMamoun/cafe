import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/products.type';
import { MenuOptionComponent } from '../../shared/components/menu-option/menu-option.component';
import { SubtotalComponent } from '../../shared/components/subtotal/subtotal.component';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dessert-menu',
  imports: [MenuOptionComponent, SubtotalComponent],
  templateUrl: './dessert-menu.component.html',
  styleUrl: './dessert-menu.component.scss',
})
export class DessertMenuComponent implements OnInit {
  dessert: Product[] = [];
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

  closeSubtotal() {
    this.showSubtotal = false;
  }

  getProducts() {
    this._productService.getAllProducts().subscribe((res) => {
      res.products.forEach((product) => {
        if (product.category.name == 'Dessert') {
          this.dessert.push({ ...product, counts: 1 });
        }
      });
    });
  }
}
