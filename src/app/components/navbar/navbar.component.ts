import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  screenWidth!: number;
  mobileView: boolean = false;
  menuButtonView: boolean = true;
  megaMenuView: boolean = false;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.mobileView = this.screenWidth <= 768 ? true : false;
  }

  onNavbarClick() {
    this.menuButtonView = !this.menuButtonView;
    this.megaMenuView = !this.megaMenuView;
  }

  onMenuCancel() {
    this.menuButtonView = !this.menuButtonView;
    this.megaMenuView = !this.megaMenuView;
  }
}
