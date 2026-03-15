import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../types/products.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartElementSubject = new BehaviorSubject<Product[]>([]);
  cartElement$ = this.cartElementSubject.asObservable();

  addItem(element: Product) {
    this.cartItemsSubject.next(this.cartItemsSubject.value + 1);
    this.cartElementSubject.next([...this.cartElementSubject.value, element]);
  }
}
