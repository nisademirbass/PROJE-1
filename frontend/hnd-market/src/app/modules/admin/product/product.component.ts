import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  
  products:Product[] =[];

  constructor(private productService:ProductService){
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data=>{this.products=data});
  }

  
  remove(productId : number){
    if(confirm("Bu ürünü silmek istediğinize emin misiniz?")){
      this.productService.deleteProduct(productId).subscribe(_=>{
        this.getProducts();
       })
    }
  }

}
