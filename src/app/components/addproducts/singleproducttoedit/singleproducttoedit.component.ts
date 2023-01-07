import { Component, Input, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/Buy';
import { Product } from 'src/app/models/Product';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-singleproducttoedit',
  templateUrl: './singleproducttoedit.component.html',
  styleUrls: ['./singleproducttoedit.component.css']
})
export class SingleproducttoeditComponent implements OnInit {
  @Input() product?:Product;
  constructor(private request:RequestService){

  }

  inInventory?: number;
  mintobuy?: number;
  maxtoBuy?: number;
  name?: string;
  enabled?: boolean;

  ngOnInit(): void {


  }

  async deleteproduct(id: number){
    console.log("extrange error next")
    await this.request.deleteProductbyId(id).subscribe( m=>{
    alert("product deleted");
    window.location.reload()
    });
  }
  editproduct(id: number){
    this.inInventory = this.product?.inInventory;
    this.mintobuy = this.product?.min;
    this.maxtoBuy = this.product?.max;
    this.name = this.product?.name;
    this.enabled = this.product?.enabled;
    let offerForm = document.getElementById(
      'editproductform' + this.product!.idProduct
    );
    offerForm!.className = 'offerform';
//this.currentcoin = cryptosymbol;
  }

  SaveProduct(){
    this.product!.inInventory = this.inInventory!;
    this.product!.min = this.mintobuy!;
    this.product!.max = this.maxtoBuy!;
    this.product!.name = this.name!;
    this.product!.enabled = this.enabled!;
    this.request.editProduct(this.product!).subscribe(product => {
      window.location.reload()})
  }
}
