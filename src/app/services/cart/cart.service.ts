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

  private cartSubtotalSubject = new BehaviorSubject<number>(0);
  cartSubtotal$ = this.cartSubtotalSubject.asObservable();

  addItem(element: Product) {
    this.cartItemsSubject.next(this.cartItemsSubject.value + 1);
    this.cartElementSubject.next([...this.cartElementSubject.value, element]);
    this.cartSubtotalSubject.next(
      this.cartSubtotalSubject.value + element.price * element.counts,
    );
  }

  removeItem(id: string) {
    this.cartElementSubject.next(
      this.cartElementSubject.value.filter((item) => {
        return item._id !== id;
      }),
    );
    this.cartItemsSubject.next(this.cartItemsSubject.value - 1);
    this.cartSubtotalSubject.next(0);
    this.cartElementSubject.value.forEach((item) => {
      this.cartSubtotalSubject.next(
        this.cartSubtotalSubject.value + item.price * item.counts,
      );
    });
  }

  isItemExist(id: string): boolean {
    const isItemExist = this.cartElementSubject.value.find((item) => {
      return item._id == id;
    });

    return !!isItemExist;
  }

  decreaseCartItemCount(itemPrice: number) {
    this.cartSubtotalSubject.next(this.cartSubtotalSubject.value - itemPrice);
  }

  increaseCartItemCount(itemPrice: number) {
    this.cartSubtotalSubject.next(this.cartSubtotalSubject.value + itemPrice);
  }
}
