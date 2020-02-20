import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';
 
@Directive({
    selector: '[bold]'
})
export class BoldDirective{

    //https://metanit.com/web/angular2/3.2.php 
    /*
    constructor(private elementRef: ElementRef){
         
        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
    */
    constructor(private element: ElementRef, private renderer: Renderer2){    
        //this.renderer.setStyle(this.element.nativeElement, "font-weight", "bold");
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }
 
    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    }
 
    private setFontWeight(val: string) {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    }
}