import { Component } from '@angular/core';// importing the componenet decorator from library

@Component({   // here we are defining the meta data of the components.
  selector: 'app-hello',  // it defines how the components is used in tempelates 
  imports: [],
  templateUrl: './hello.html',// it specifies html asociated file
  styleUrl: './hello.css' // define style
})
export class Hello {
// this define the anguolar class logic 
  message= 'hello Angular';
}
