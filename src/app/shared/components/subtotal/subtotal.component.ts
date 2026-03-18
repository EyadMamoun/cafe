import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-subtotal',
  imports: [],
  templateUrl: './subtotal.component.html',
  styleUrl: './subtotal.component.scss',
})
export class SubtotalComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  subtotal: number = 0;

  constructor(private readonly _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cartSubtotal$.subscribe((value) => {
      this.subtotal = value;
    });
  }

  closeSubtotal() {
    this.close.emit(false);
  }
}
