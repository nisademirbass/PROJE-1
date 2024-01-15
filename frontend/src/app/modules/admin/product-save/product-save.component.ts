import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.scss']
})
export class ProductSaveComponent implements OnInit {

  categories: Category[] = [];

  model:Product = {};

  constructor(private categoryService : CategoryService, private productService : ProductService, private router : Router, private route : ActivatedRoute){

  }

  ngOnInit() : void{
    this.getCategories();
    let productId = this.route.snapshot.params['id'];
    this.getProduct(productId);
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;

    });
  }

  save(){
/*     console.log(frm);
    console.log('Form Verileri:',frm.value);
    if(frm.valid){
    } */


    let obsProduct = this.model.productId ? this.productService.updateProduct(this.model) : this.productService.createProduct(this.model);

    obsProduct.subscribe(_=>{this.router.navigateByUrl('/admin/product')})
/*     //subscribe olunmazsa veriye ulaşamayız!
    this.productService.createProduct(this.model).subscribe( _ => {
      //yönlendirme --> ts içinde router link kullanımı gibi düşünebilirsin
      this.router.navigateByUrl("/admin");
    }) */

  }

  getProduct(productId : any){
    if(productId){
      this.productService.getProduct(productId).subscribe(data=>{
        this.model=data;
      })
    }
  }
}
