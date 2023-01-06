import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/Buy';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-oldbuylist',
  templateUrl: './oldbuylist.component.html',
  styleUrls: ['./oldbuylist.component.css']
})
export class OldbuylistComponent implements OnInit {
  constructor(private request:RequestService){

  }

  history?: Buy[];
  ngOnInit(): void {


}
  IdClient?:string;
  IdType?: string;
  getclienhistory(){
if(this.IdClient != undefined && this.IdType != undefined){
this.request.FindClienthistory(this.IdType, this.IdClient).subscribe( history => {
  this.history = history;
  console.log(history)

})

}
  }

  productsloaded():boolean{
    if(this.history != (undefined || null)){
    if(this.history?.length > 0){
      return true
    }

  }
  return false
}}
