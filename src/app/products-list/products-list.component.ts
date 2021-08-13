import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product.model';
/**
 * @ProductsList: A component for rendering all ProductRows and storing the currently selected Product
 */

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  
  constructor() { 
    this.productList = [];
    this.onProductSelected = new EventEmitter();    
  }

  ngOnInit(): void {
  }

  /**
   * 
   * @param clickedProduct - emits/transmits the click action, carrying the argument value of `product`.
   * The parent component (which is the AppComponent) `listens` for this action. Once `heard`, AppComponent will derive the data it needs from the $event that it `heard`/detected.
   */
  clickedProduct(product: Product): void {
    console.log('From the -- PRODUCTLIST -- component, the product clicked is = ', product.name);
    this.onProductSelected.emit(product);
  }


}
