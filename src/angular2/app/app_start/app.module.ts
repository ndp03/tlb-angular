import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Http, HttpModule  } from "@angular/http";
import { RouterModule, DefaultUrlSerializer, UrlTree } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { ROUTES, PUBLIC_ROUTES, ADMIN_ROUTES } from './app.routes';
import { AppComponent } from './app';
import { NoContent } from '../components/no-content/no-content';
import { Error } from '../components/error/error';
import { AppState } from '../services';
import { AuthenticatedHttpService } from './auth-http-service';
import { MomentModule } from 'angular2-moment';
import { MainNav } from '../components';
import { Public, Home, ContactUs } from '../pages/public';
import { Admin, Login } from '../pages/admin';

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any) {
        console.log(error);
        // Redirect back to CoreTx generic error page
        window.location.href = "/error";
    }
}

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}

@NgModule({
    declarations: [
        AppComponent,
        NoContent, Error, MainNav, // : Component
        Public, Home, ContactUs,          // : Public pages
        Admin, Login,   // : Admin pages
    ],
    imports: [
        MomentModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        RouterModule.forChild(PUBLIC_ROUTES),
        RouterModule.forChild(ADMIN_ROUTES),
    ],
    providers: [
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: DefaultUrlSerializer, useClass: LowerCaseUrlSerializer },
        { provide: Http, useClass: AuthenticatedHttpService},
        AppState,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

