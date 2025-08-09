import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceFormatPipe } from './pipes/price-format-pipe';
import { Highlight } from './directives/highlight';
import { ProductList } from './products/product-list/product-list';
// it is safer to declare above directives and pipes in root 


@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

// @NgModule{
//   declarations
// }

export class App {
  protected readonly title = signal('product-demo');
}
