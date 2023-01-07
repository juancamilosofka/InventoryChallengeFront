import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProduct } from 'src/app/models/AddProduct';
import { PaginationProduct } from 'src/app/models/PaginationProduct';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent  implements OnInit  {
    constructor(private request:RequestService,
      private router:Router) {

      }
      currentpage?:PaginationProduct ;
      currentpagenumber?: number = 1;
      totalpages?: number;

      newproduct:  AddProduct = {
        name: "",
        inInventory: 0,
        enabled: true ,
        min: 0,
        max: 0
      };
      quantity: number = 1;

      inInventory?: number;
      mintobuy?: number;
      maxtoBuy?: number;
      name?: string;
      enabled?: boolean;
      ngOnInit(): void {
          this.currentpagenumber = 1;
          this.totalpages =1;
          this. bringProduct(5, 1);

      }

     async bringProduct(size:number , page:number){

      await this.request.bringAllProductPage(size, page).subscribe(page =>
       {
        this.currentpage = page,
        //this.currentpagenumber = page.CurrentPage,
        this.totalpages = page.pages
        this.dosomethig()
      } )

    }

      dosomethig(){
      //  console.log(this.currentpage?.currentPage)
      }
      isthispageone(page: Number): boolean{
        if(page = 1){
          return true;
        }
        return false
      }

      isthislastpage(page: Number):boolean{

        this.currentpagenumber = this.currentpagenumber ?? 1;
        this.totalpages = this.totalpages ?? 1;
        if(this.currentpagenumber < this.totalpages){
          return false;
        }
        return true

      }

      previowspage(){
        if(this.currentpagenumber! > 1 ){
        this.currentpagenumber = this.currentpagenumber! - 1;
        this.bringProduct(5 , this.currentpagenumber);}
      }
      nextpage(){
        if(this.currentpagenumber! < this.totalpages!){

        this.currentpagenumber = this.currentpagenumber! + 1;
        this.bringProduct(5 , this.currentpagenumber);

      }
      }

      addtocart(IdProduct : number){

      }

      Addproduct(){
        console.log(this.inInventory);

        this.newproduct.inInventory = this.inInventory!;
        this.newproduct.min = this.mintobuy!;
        this.newproduct.max = this.maxtoBuy!;
        this.newproduct.name = this.name!;
        this.newproduct.enabled = true;
        console.log(this.newproduct);
        this.request.addProduct(this.newproduct).subscribe(product => {
          window.location.reload()})

  }



}

