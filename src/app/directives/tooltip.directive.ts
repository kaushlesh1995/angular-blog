import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
   
    el.nativeElement.style.color = "#119911";
    this.createBox();
   }

   createBox() {
     let box = this.renderer.createElement("div");
     box.setAttribute("data", "WWWWWWWWWWWWWWWWWWWWWWWW");
     this.renderer.addClass( box, "tooltip-wrapper");
     this.renderer.appendChild(document.body, box)
   }

}
