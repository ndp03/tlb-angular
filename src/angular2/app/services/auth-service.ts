import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from './app-constants';
import { AppState } from './app-state';

@Injectable()
export class AuthenticationService {

    private _headers = new Headers();

    constructor(private _http: Http, private _appState: AppState) {
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('Accept', 'application/json');
    }

    getAuthStatus() : boolean {
        // return this._http.get(AppConstants.AuthStatus)
        //     .map(response => {
        //         let body = response.json();
        //         return body || null;
        //     })
        //     .catch(this.handleError);

        var status = this._appState.get(AppConstants.AuthStatus);
        if (status === "IS_AUTHENTICATED") {
            return true;
        }

        return false;
    }

    logIn() {
        this._appState.set(AppConstants.AuthStatus, "IS_AUTHENTICATED");
    }

    logOut() {
        this._appState.set(AppConstants.AuthStatus, null);
    }

    submit(postData: any) {
        return this._http
            .post(
                'URL',
                JSON.stringify(postData),
                { headers: this._headers }
            ).map(
                response => {
                    let body = response.json();
                    return body || null;
                }
            ).catch(this.handleError);
    }

    private handleError(err: any) {
        return Observable.throw(err);
    }

}