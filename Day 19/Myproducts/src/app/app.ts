import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './book/book';
import { Laptop } from './laptop/laptop';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Book,Laptop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Myproducts');
}
