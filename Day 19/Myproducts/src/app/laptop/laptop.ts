import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop',
  imports: [],
  templateUrl: './laptop.html',
  styleUrl: './laptop.css'
})
export class Laptop {
productname = 'Asus Laptop';
  productprice = 50000;
  addedtocart = false;
  addToCart() {
    this.addedtocart = true;
}
}
