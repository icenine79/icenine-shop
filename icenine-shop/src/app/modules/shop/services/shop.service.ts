import { Product } from './../models/Product';
import { Category } from './../models/Categories';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

getCategories():Observable<Category[]>{
  return this.http.get<Category[]>('assets/categories.json');
}

getProducts():Observable<Product[]>{
  return this.http.get<Product[]>('assets/products.json');
}


}
