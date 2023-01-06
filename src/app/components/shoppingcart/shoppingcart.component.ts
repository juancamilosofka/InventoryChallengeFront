import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/Buy';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  IdType: string = "";
  IdClient: string = "";
  ClientName: string = "";
  cart?: Buy;

  constructor(private request:RequestService,
  ) { }

ngOnInit(){
  if(localStorage.getItem('buy')!=null){
  var jsonObject : Buy = JSON.parse(localStorage.getItem('buy')!)
  this.cart =  jsonObject;
  }
}

  async buy(){
    if(this.IdType!= "" && this.IdClient!=""){

      var jsonObject : Buy = JSON.parse(localStorage.getItem('buy')!)
      this.cart =  jsonObject;
      this.cart.ClientName = this.ClientName;
      this.cart.IdType = this.IdType;
      this.cart.Id = this.IdClient;
      var str = new Date().setSeconds(0,0);
      var dt = new Date(str).toISOString();

      this.cart.Date = new Date(dt);


    await  this.request.FinishBuy(this.cart).subscribe();
      localStorage.removeItem('buy');
      alert("buy registered")
      window.location.reload();

    }

  }

  ClearCart(){
    localStorage.removeItem('buy');
    window.location.reload();
  }

}
