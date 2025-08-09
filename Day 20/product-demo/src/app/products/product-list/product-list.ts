import { Component } from '@angular/core';
import { Product } from '../../models/products.model';
import { PriceFormatPipe } from '../../pipes/price-format-pipe';
import { Highlight } from '../../directives/highlight';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
// import { NgFor } from '@angular/forms';
// adding your interface based on product
@Component({
  selector: 'app-product-list',
  imports: [PriceFormatPipe,Highlight,NgClass,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  Products:Product[]=[
    { id: 1, name: 'Wireless Mouse', price: 799, inStock: true, description: 'Ergonomic wireless mouse' },
    { id: 2, name: 'Mechanical Keyboard', price: 2499, inStock: true, description: 'RGB backlit keyboard' },
    { id: 3, name: 'Webcam 1080p', price: 1299, inStock: false, description: 'Full HD webcam' },
    { id: 4, name: 'USB-C Hub', price: 1999, inStock: true, description: '6-in-1 USB-C hub' },
    { id: 5, name: 'Laptop Stand', price: 999, inStock: false, description: 'Aluminium laptop stand' }
  ];

}
