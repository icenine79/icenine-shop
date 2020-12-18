import { ShellComponent } from './app-components/components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const shop = () => import('./modules/shop/shop.module').then(n=>n.ShopModule)
const routes: Routes = [{
  path:'', component:ShellComponent,
  children:[
    {path: 'shop', loadChildren: shop}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
