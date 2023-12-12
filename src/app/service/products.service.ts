import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 url = 'http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  products(){
    return this.http.get(this.url);
  }
}
