import { Component, Input, OnInit, ElementRef } from "@angular/core";

import { AppState, AppConstants } from '../../../services';

@Component({
    selector: "home",
    templateUrl: 'home.html',
    styles: [''],
    providers: []
})
export class Home implements OnInit {

    constructor(private _appState: AppState, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        
    }

}