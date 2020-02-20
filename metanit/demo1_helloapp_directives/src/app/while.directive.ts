import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
 
@Directive({ selector: '[while]' })
export class WhileDirective {
    //https://metanit.com/web/angular2/3.6.php    
    constructor(private templateRef: TemplateRef<any>, 
                private viewContainer: ViewContainerRef) 
    { }
     
    @Input() set while(condition: boolean) {
        if (condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
    }
}