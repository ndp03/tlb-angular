import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";

@Injectable()
export class ValidationService {

   
    constructor(private _http: Http) {

    }

    
    public isFormValid(form: any) {
       return form.status === 'VALID';
    }
}