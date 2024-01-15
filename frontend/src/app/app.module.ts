import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryService } from './services/category.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyCartComponent } from './modules/cart/my-cart/my-cart.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CategoryModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    /*CategoryService*/
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:JwtInterceptor,
      multi: true //birden fazla inceptor olabilir
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
