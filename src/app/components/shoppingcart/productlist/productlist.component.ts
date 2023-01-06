import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductList } from 'src/app/models/ProductList';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  implements OnInit {
  @Input() productlisted?:ProductList;
  productname?: string;
  product?: Product ;
  constructor(private request:RequestService,
    ) { }
  ngOnInit(){

     this.request.findProductbyId(this.productlisted?.idProduct!).subscribe(product =>
      {
        this.product = product;
        this.productname = this.product?.name;
     } )
     ;

  }
}
