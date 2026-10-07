import { AsyncPipe, NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterModule, AsyncPipe],
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
    public readonly _authService: AuthService,
    private readonly _toastr: ToastrService,
    private readonly _loadingService: LoadingService,
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

  logout() {
    this._loadingService.show();
    setTimeout(() => {
      this._authService.logout();
      this._loadingService.hide();
      this._toastr.success('Hope we see you soon!!');
    }, 1000);
  }
}
