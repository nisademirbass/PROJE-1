import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  onCartChange:Subject<Product> = new Subject<Product>;

  constructor() { }
  
  addToCard(product:Product){
    this.onCartChange.next(product);
  }
  
}
