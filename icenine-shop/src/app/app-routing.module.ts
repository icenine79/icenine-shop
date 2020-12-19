import { RegisterComponent } from './app-components/components/register/register.component';
import { ShellComponent } from './app-components/components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const shop = () => import('./modules/shop/shop.module').then(x=>x.ShopModule)
const admin = () => import('./modules/admin/admin.module').then(x=>x.AdminModule)

const routes: Routes = [{
  path:'', component:ShellComponent,
  children:[
    {path: 'shop', loadChildren: shop},
    {path: 'admin', loadChildren: admin},
    {path: '', redirectTo: 'shop', pathMatch: 'full'}

  ],

},
{path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
