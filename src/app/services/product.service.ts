import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../../environments/environment';
import { Products } from '../types/products.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly _http: HttpClient) {}

  getAllProducts(): Observable<Products> {
    return this._http.get<Products>(`${baseUrl}/api/products`);
  }
}
