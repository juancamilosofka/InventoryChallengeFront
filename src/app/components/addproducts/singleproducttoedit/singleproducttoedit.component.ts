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

  buy?: Buy;
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

  }
}
