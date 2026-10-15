import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../../environments/environment';
import { Product } from '../types/products.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly _http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${baseUrl}/api/products`);
  }
}
