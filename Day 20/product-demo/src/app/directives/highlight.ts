import { Directive,ElementRef,HostListener,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  @Input('appHighlight') highlightColor='#ffffcc'; // default highlight

  private originalBackground :string | null =""
  constructor(private el:ElementRef,private renderer:Renderer2) { 
    // Capture any inline background if present
    this.originalBackground = this.el.nativeElement.style.backgroundColor || ' ';

  }

    // mouse leave hover effect
      @HostListener('mouseenter') onEnter()
      {
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor',this.highlightColor);
         this.renderer.setStyle(this.el.nativeElement,'boxshadow','0 6px14px rgba(77, 14, 14, 0.08)');
         this.renderer.setStyle(this.el.nativeElement,'transform','translate(-3px)');
      }

     

}
