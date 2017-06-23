import { Routes, RouterModule } from '@angular/router';

import { NoContent, Error } from '../components';
import { Public, Home, ContactUs } from '../pages/public';
import { Admin, AdminHome, Login, Posts, EditPost } from '../pages/admin';
import { AuthGuard } from '../services';

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
        canActivateChild: [AuthGuard],
        children: [
            { path: '', component: AdminHome },
            { path: 'login', component: Login },
            { path: 'posts', component: Posts },
            { path: 'editpost/:id', component: EditPost },
            // otherwise redirect to home
            { path: '**', redirectTo: 'login' }
        ],
    }
];
