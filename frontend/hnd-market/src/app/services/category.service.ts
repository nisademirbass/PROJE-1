import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable, delay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CategoryService {

  constructor(private httpClient:HttpClient) { 
    console.warn("Category Service constructor çalıştı.")
   }

  getTime():number{
    return new Date().getMilliseconds();
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`http://localhost:9090/category/categories`).pipe(tap(data=>console.log(data)));

  }
}
