import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Buy } from 'src/app/models/Buy';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  @Input() product?:Product;

  quantity: number = 1;
  buy?: Buy;
  ngOnInit(): void {
    this.quantity = this.product!.min;


}


  addtocart(IdProduct : number):boolean{
if(localStorage.getItem('buy') == null && this.Validate()){
    this.buy = {

      Date: new Date(),
      IdType: "CC",
      Id: "",
      ClientName: "",
      ProductList: [ {

        IdProduct: IdProduct,
        Quantity: this.quantity
      }
    ]
  }
  localStorage.setItem('buy', JSON.stringify(this.buy));
  this.playSound() ;
  return true;
  }
  if(localStorage.getItem('buy') != null && this.Validate()){

    const data = localStorage.getItem('buy')
    var jsonObject : Buy = JSON.parse(data!)
    jsonObject.ProductList.push(      {

      IdProduct: IdProduct,
      Quantity: this.quantity
    })
    localStorage.setItem('buy', JSON.stringify(jsonObject));
    console.log(jsonObject)
    this.playSound() ;
    return true;
  }
  localStorage.setItem('userData', JSON.stringify(this.buy));
      const data = localStorage.getItem('buy');
      return false;
  }

  Validate(): boolean{
    if(this.quantity >= this.product!.min && this.quantity <= this.product!.max ){
      return true
    }
    return false;
  }

  playSound() {
    const audio = new Audio();
    audio.src = '../../../assets/audio/scannerbeep.mp3';
    audio.load();
    audio.play();
}
}
