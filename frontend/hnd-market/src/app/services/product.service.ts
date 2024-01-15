import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map, tap } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../models/productResponse';

@Injectable(
  {
    //kök modülde(app.module.ts) belirtmişssin gibi
    providedIn: 'root'
  }
)
export class ProductService {

  constructor(private httpClient:HttpClient) { 
    console.warn("Product Service constructor çalıştı.")
   }

  getTime():number{
    return new Date().getMilliseconds();
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<ProductResponse>(`http://localhost:9788/api/1.0/product/TR/products`).pipe(map((myAnswers: ProductResponse) => {
      const res: Product[]=[];
      myAnswers.payload.forEach((item) => {
        res.push(item);
      });

      return res;
})); 
  }
  
  getProductsByProductId(categoryId:any){
    return this.httpClient.get<ProductResponse>(`http://localhost:9788/api/1.0/product/TR/products/${categoryId}`).pipe(map((myAnswers: ProductResponse) => {
      const res: Product[]=[];
      myAnswers.payload.forEach((item) => {
        res.push(item);
      });

      return res;
})); 
  }

  
  getProduct(productId:number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.baseApiUrl}/products/${productId}`);
  }

  createProduct(product:Product): Observable<any>{
    return this.httpClient.post<any>(`${environment.baseApiUrl}/products`, product);
  }

  updateProduct(product:Product): Observable<any>{
    return this.httpClient.put<any>(`${environment.baseApiUrl}/products/${product.productId}`, product);
  }

  deleteProduct(productId:number): Observable<any>{
    //interception kullanmadan
/*     return this.httpClient.delete<any>(`${environment.baseApiUrl}/products/${productId}`, {
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
    }); */

    return this.httpClient.delete<any>(`${environment.baseApiUrl}/products/${productId}`);

  }
}
