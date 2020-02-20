import { Component} from '@angular/core';
      
@Component({
    selector: 'child4-comp',
    template: `
                <p>{{counter6}}</p>
            `
})
export class Child4Component { 
    //https://metanit.com/web/angular2/2.9.php

    counter6: number = 0;
    increment() { this.counter6++; }
    decrement() { this.counter6--; }
}