import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ]
})
export class AdminModule { }
