import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleproductComponent } from './components/products/singleproduct/singleproduct.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './components/shoppingcart/productlist/productlist.component';
import { OldbuylistComponent } from './components/oldbuylist/oldbuylist.component';
import { SingleproducttoeditComponent } from './components/addproducts/singleproducttoedit/singleproducttoedit.component';
import { BuysfromcustomerComponent } from './components/oldbuylist/buysfromcustomer/buysfromcustomer.component';
import { ProductsfrombuyComponent } from './components/oldbuylist/buysfromcustomer/productsfrombuy/productsfrombuy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ProductsComponent,
    SingleproductComponent,
    AddproductsComponent,
    ShoppingcartComponent,
    ProductlistComponent,
    OldbuylistComponent,
    SingleproducttoeditComponent,
    BuysfromcustomerComponent,
    ProductsfrombuyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
