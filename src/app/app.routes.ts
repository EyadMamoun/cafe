import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeeMenuComponent } from './components/coffee-menu/coffee-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { DessertMenuComponent } from './components/dessert-menu/dessert-menu.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'coffee-menu', component: CoffeeMenuComponent },
  { path: 'dessert-menu', component: DessertMenuComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '404', component: Error404Component },
];
