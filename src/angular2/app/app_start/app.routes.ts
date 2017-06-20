import { Routes, RouterModule } from '@angular/router';

import { NoContent, Error } from '../components';
import { Public, Home, ContactUs } from '../pages/public';
import { Admin, Login, Posts } from '../pages/admin';

export const ROUTES: Routes = [
    //{ path: '', component: Public },
    //{ path: 'error', component: Error },
    //{ path: '*', component: NoContent }
];

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        component: Public,
        children: [
            { path: '', component: Home },
            { path: 'contactus', component: ContactUs },
            { path: 'error', component: Error },
            { path: '*', component: NoContent }
        ],
    }
];

export const ADMIN_ROUTES: Routes = [
    {
        path: 'admin',
        component: Admin,
        //outlet: 'aux',
        //canActivate: [SomeGuard],
        children: [
            { path: 'login', component: Login },
            { path: 'posts', component: Posts },
        ],
    }
];
