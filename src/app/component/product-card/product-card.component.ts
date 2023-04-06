import { Component, Input, OnInit, Output } from '@angular/core';
// import { Product } from './product-card.module';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public product:any;

  constructor(private api: ApiService) { 
  }

  ngOnInit(): void {
    this.api.getData().subscribe(res=>{
      this.product=res;
    })
  }
}
