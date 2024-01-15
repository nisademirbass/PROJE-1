import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [],
//  providers:[CategoryService]
})
export class CategoryListComponent implements OnInit{

  categories:Category[] = [];

  constructor(private categoryService:CategoryService){
    this.categoryService
  }

  ngOnInit(): void {
    console.log('Category list yüklendi.', this.categoryService.getTime());
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data=> {
      this.categories=data;
    }
    );
  }

}
