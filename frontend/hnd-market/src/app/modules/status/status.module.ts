import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
