import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<div [ngClass]="{verdanaFont:true}">
                    <h1>Hello Angular 9</h1>
                    <p [ngClass]="{segoePrintFont:true}">
                        Angular 9 представляет модульную архитектуру приложения
                    </p>
                </div>`,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
    ]
})
export class AppComponent { }