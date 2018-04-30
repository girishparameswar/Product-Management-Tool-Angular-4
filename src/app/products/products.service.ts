import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProductsService {

  newProductSubject = new Subject();

  constructor(private _http : HttpClient, private _authService : AuthService) { }

  getProducts() {
    return this._http.get('http://localhost:2000/getproducts', {
      headers: new HttpHeaders().set('authorization', this._authService.fetchToken())
    });
  }

  // createProducts(product:Product) : Product[] {
  //   let products = this.getProducts();
  //   products.push(product);
  //   this.newProductSubject.next(products);
  //   return products;
  // }

}
