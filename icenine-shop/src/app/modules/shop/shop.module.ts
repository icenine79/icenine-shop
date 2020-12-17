import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShopComponent } from './components/base-shop/base-shop.component';
import { ShopRoutingModule } from './shop-routing.module';



@NgModule({
  declarations: [BaseShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
