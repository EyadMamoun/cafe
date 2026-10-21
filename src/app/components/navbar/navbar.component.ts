import { AsyncPipe, NgClass } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/products.type';
import { GenericInputComponent } from '../../shared/components/generic-input/generic-input.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass,
    RouterModule,
    AsyncPipe,
    GenericInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  screenWidth!: number;
  cartNumber: number = 0;
  mobileView: boolean = false;
  menuButtonView: boolean = true;
  megaMenuView: boolean = false;
  isScrolled: boolean = false;
  isSolid: boolean = false;
  searchBar: boolean = false;
  filteredList: Product[] = [];
  search = new FormControl<string | null>('');

  private readonly destroy$ = new Subject<void>();

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
    private readonly _productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.mobileView = this.screenWidth <= 768;

    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe((event: NavigationEnd) => {
        this.isSolid = !event.urlAfterRedirects.includes('/home');
      });

    this._cartService.cartItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.cartNumber = value;
      });

    this.search.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => {
          const value = (term ?? '').trim();
          return value ? this._productService.getAllProducts() : of(null);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((res) => {
        const term = (this.search.value ?? '').trim().toLowerCase();
        this.filteredList = res
          ? res.products.filter((p) => p.title.toLowerCase().includes(term))
          : [];
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  showSearchBar() {
    this.searchBar = true;
  }

  hideSearchBar() {
    this.searchBar = false;
    this.search.reset('');
    this.filteredList = [];
  }

  onSearchOptionClick(product: Product) {
    if (this._cartService.isItemExist(product._id)) {
      this._toastr.error('Item already exist in your cart');
    } else {
      product.counts = 1;
      this._cartService.addItem(product);
      this._toastr.success('Product added to cart');
    }

    this.hideSearchBar();
  }
}
