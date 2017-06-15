import { Component, Input, OnInit, ElementRef } from "@angular/core";


import { AppState, AppConstants } from '../services';


@Component({
    selector: "self-service-app",
    templateUrl: 'app.html',
    styles: [''],
    providers: []
})
export class AppComponent implements OnInit {

    constructor(private _appState: AppState, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        
    }

}