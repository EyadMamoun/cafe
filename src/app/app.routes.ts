import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeeMenuComponent } from './components/coffee-menu/coffee-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'coffee-menu', component: CoffeeMenuComponent },
];
