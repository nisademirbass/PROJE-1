import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryService } from 'src/app/services/category.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CategoryListComponent
  ],
/*  providers:[
    CategoryService
  ]*/
})
export class CategoryModule { }
