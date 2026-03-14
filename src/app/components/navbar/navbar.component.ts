import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  screenWidth!: number;
  cartNumber: number = 0;
  mobileView: boolean = false;
  menuButtonView: boolean = true;
  megaMenuView: boolean = false;
  isScrolled = false;
  isSolid = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(
    private readonly _router: Router,
    private readonly _cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.mobileView = this.screenWidth <= 768;
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isSolid = !event.urlAfterRedirects.includes('/home');
      });

    this._cartService.cartItems$.subscribe((value) => {
      this.cartNumber = value;
    });
  }

  onNavbarClick() {
    this.menuButtonView = !this.menuButtonView;
    this.megaMenuView = !this.megaMenuView;
  }

  onMenuCancel() {
    this.menuButtonView = !this.menuButtonView;
    this.megaMenuView = !this.megaMenuView;
  }

  goToCart() {
    this._router.navigateByUrl('/cart');
  }

  goToHome() {
    this._router.navigateByUrl('/home');
  }
}
