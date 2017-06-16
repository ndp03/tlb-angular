import { Component, Input, OnInit, ElementRef } from "@angular/core";

import { AppState, AppConstants } from '../../../services';

@Component({
    selector: "contact-us",
    templateUrl: 'contact-us.html',
    styles: [''],
    providers: []
})
export class ContactUs implements OnInit {

    constructor(private _appState: AppState, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        
    }

}