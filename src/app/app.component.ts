import { Component, OnInit } from '@angular/core';
import { ITEMS, Product } from './component/product-card/product-card.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  products=ITEMS;
  constructor(){
  }
  
  ngOnInit(){

  } 
}
