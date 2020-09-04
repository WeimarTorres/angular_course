import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('https://angular-course-ff5dd.firebaseio.com/products.json');
  }

  public addProduct(product: any): Observable<any> {
    return this.http.post('https://angular-course-ff5dd.firebaseio.com/products.json', product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`https://angular-course-ff5dd.firebaseio.com/products/${id}.json`);
  }
}
