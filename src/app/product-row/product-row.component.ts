import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;

  constructor() {   
    this.product = new Product('', '', '', [], 0);
   }

  ngOnInit(): void {
  }

}
