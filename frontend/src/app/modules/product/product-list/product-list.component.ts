import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { EventService } from 'src/app/services/event.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
//  providers: [CategoryService]
})
export class ProductListComponent implements OnInit {

  products:Product[] =[];

  constructor(private productService:ProductService, private route:ActivatedRoute, private eventService:EventService){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let categoryId = params['categoryId'];
      this.getProducts(categoryId);
    })
  }

  getProducts(categoryId:any) {
    var req = categoryId ? this.productService.getProductsByProductId(categoryId) : this.productService.getProducts();
    req.subscribe( data=>{this.products=data;});
  }

  addToCart(product:Product){
    //alert(`${product.name} ürün sepete eklendi.`);
    this.eventService.addToCard(product);
  }

}
