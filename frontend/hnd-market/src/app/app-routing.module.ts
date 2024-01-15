import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCartComponent } from './modules/cart/my-cart/my-cart.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'', //root tanımı --> main page
    redirectTo:'products',
    pathMatch:'full' //bu root için hangi component yüklenecek
  },
  {
    path:'', //root tanımı --> main page
    component: MainLayoutComponent,
    children:[
      {
        path:'products', //root tanımı
        component: ProductListComponent //bu root için hangi component yüklenecek
      },
      {
        path:'products/:categoryId', //root tanımı --> categoryId generic (:ile bunu sağlıyoruz)
        component: ProductListComponent //bu root için hangi component yüklenecek
      },
      {
        path:'my-cart', //root tanımı
        component: MyCartComponent //bu root için hangi component yüklenecek
      }
    ]
  },
  {
    path:'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(t => t.AdminModule)
  }
  ,
  {
    path:'account',
    loadChildren: () => import('./modules/account/account.module').then(t => t.AccountModule)
  },
  {
    path:'',
    loadChildren: () => import('./modules/status/status.module').then(t => t.StatusModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
