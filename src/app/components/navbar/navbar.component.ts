import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  screenWidth!: number;
  mobileView: boolean = false;
  menuButtonView: boolean = true;
  megaMenuView: boolean = false;
  isScrolled = false;
  isSolid = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.mobileView = this.screenWidth <= 768;
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isSolid = !event.urlAfterRedirects.includes('/home');
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
}
