import { Component, Input, OnInit, ElementRef } from "@angular/core";

import { AppState, AppConstants } from '../../services';

@Component({
    selector: "public",
    templateUrl: 'public.html',
    styles: [''],
    providers: []
})
export class Public implements OnInit {

    constructor(private _appState: AppState, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        
    }

}