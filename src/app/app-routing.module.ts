import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { OldbuylistComponent } from './components/oldbuylist/oldbuylist.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

const routes: Routes = [
{ path: 'shopingcart', component: ShoppingcartComponent},
{ path: 'addproduct', component: AddproductsComponent},
{ path: 'oldbuys', component: OldbuylistComponent},
{ path: 'product', component: ProductsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
