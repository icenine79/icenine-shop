import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './modules/shop/services/shop.service';
import { ShopModule } from './modules/shop/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './app-components/components/shell/shell.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
