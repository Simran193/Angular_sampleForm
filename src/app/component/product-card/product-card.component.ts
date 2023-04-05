import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from './product-card.module';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:Product;

  getValue(){
    alert("Product added successfully.");
  }
  constructor() { 
    // console.log(this.product);
  }

  ngOnInit(): void {
    // console.log(this.product);
  }
}
