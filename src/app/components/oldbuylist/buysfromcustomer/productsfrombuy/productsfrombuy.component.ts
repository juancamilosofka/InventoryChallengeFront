import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductList } from 'src/app/models/ProductList';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-productsfrombuy',
  templateUrl: './productsfrombuy.component.html',
  styleUrls: ['./productsfrombuy.component.css']
})
export class ProductsfrombuyComponent  implements OnInit {
  @Input() productlist?:ProductList;
  productname?: string;
  product?: Product ;
  productavaliable?: boolean;
  constructor(private request:RequestService,
    ) { }
  ngOnInit(){

     this.request.findProductbyId(this.productlist?.idProduct!).subscribe(product =>
      {
        this.product = product;
        this.productname = this.product?.name;
        this.productavaliable = product.enabled
     } )
     ;

  }

}
