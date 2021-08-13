import { Component, EventEmitter } from '@angular/core';
import { Product } from './product/product.model';

/**
 * @InventoryApp: the top-level component for our application
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-book-inventory-app';

  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'COOLSHOES',
        'Black Trainer Shoes',
        './assets/images/shoes.jpg',
        ['Mens', 'Shoes', 'Running Shoes'],
        80
      ),
      new Product(
        'OLDSWORD',
        'Old Sword',
        './assets/images/sword.jpg',
        ['Weapons', 'Swords', 'Old Sword'],
        1200
      ),
      new Product(
        'GREYCAP',
        'Grey Rugged Cap',
        './assets/images/cap.jpg',
        ['Mens', 'Accessories', 'Cap'],
        25
      ),
      new Product(
        'ROTARYPHONE',
        'Vintage Rotary Phone',
        './assets/images/old_phone.jpg',
        ['Vintage', 'Communication', 'Rotary Phone'],
        500
      ),
      new Product(
        'OSCILLOSCOPE',
        'Oscilloscope',
        './assets/images/oscilloscope.jpg',
        ['Engineering', 'Test and Design', 'Oscilloscope'],
        850
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('From the main -- APPCOMPONENT --, the product clicked is = ', product.name);
  }

}
