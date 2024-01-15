import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProductListComponent
  ],
/*  providers:[
    CategoryService
  ]*/
})
export class ProductModule { }
