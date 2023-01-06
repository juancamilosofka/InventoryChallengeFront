import { Component, Input, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/Buy';
import { Product } from 'src/app/models/Product';
import { ProductList } from 'src/app/models/ProductList';

@Component({
  selector: 'app-buysfromcustomer',
  templateUrl: './buysfromcustomer.component.html',
  styleUrls: ['./buysfromcustomer.component.css']
})
export class BuysfromcustomerComponent implements OnInit {
  @Input() buy?:Buy;
  ngOnInit(): void {

console.log(this.buy)
  }
}
