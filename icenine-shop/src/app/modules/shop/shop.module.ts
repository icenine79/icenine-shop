import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShopComponent } from './components/base-shop/base-shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BaseShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShopModule { }
