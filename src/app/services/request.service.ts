import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ProductList } from '../models/ProductList';
import { PaginationProduct } from '../models/PaginationProduct';
import { Buy } from '../models/Buy';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private client:HttpClient) {
}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  bringAllProductPage(size:number , page:number){

    return this.client.get<PaginationProduct>('https://localhost:7213/api/Product/Get/'+size+'/'+page)
  }

  findProductbyId(id:number): Observable<Product>{

    return this.client.get<Product>('https://localhost:7213/api/Product/Get/'+id)
  }
  deleteProductbyId(id:number){

    return this.client.delete<any>('https://localhost:7213/api/Product/Delete/'+id, this.httpOptions)
  }

  FinishBuy(buy:Buy): Observable<any>{

    return this.client.post<Buy>('https://localhost:7213/api/Buy',
    buy,     this.httpOptions);
   }
   FindClienthistory(type: string, id:string): Observable<any[]>{

  return this.client.get<Buy[]>('https://localhost:7213/api/Buy/Buyer/'+ type+ '/'+ id);
 }
}





