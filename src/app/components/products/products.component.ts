import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationProduct } from 'src/app/models/PaginationProduct';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit  {
  constructor(private request:RequestService,
    private router:Router) { }
    currentpage?:PaginationProduct ;
    currentpagenumber?: number = 1;
    totalpages?: number;

    quantity: number = 1;

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

}
