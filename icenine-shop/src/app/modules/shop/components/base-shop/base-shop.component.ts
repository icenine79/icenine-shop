import { Category } from './../../models/Categories';
import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-shop',
  templateUrl: './base-shop.component.html',
  styleUrls: ['./base-shop.component.scss']
})
export class BaseShopComponent implements OnInit {
categories:Category[]=[];
products:Product[]=[];
filteredProducts:Product[]=[]
category:string;
  constructor(private shopService:ShopService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.shopService.getCategories()
    .subscribe(data=>{
      this.categories=data['categories']
      console.log(this.categories)
    })
    this.route.queryParamMap.subscribe(params=>{
      this.category= params.get('category');
      this.productFilter();
    })
    //Products
    this.shopService.getProducts()
    .subscribe(data=>{
      this.products=this.filteredProducts=data['products'];
    })

  }
productFilter(){
  this.filteredProducts=(this.category)?
  this.products.filter(p=>p.category===this.category):
  this.products;
}
}
