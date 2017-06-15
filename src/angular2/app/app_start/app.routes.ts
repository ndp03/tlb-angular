import { Routes, RouterModule } from '@angular/router';

import { NoContent } from '../components/no-content/no-content';
import { Error } from '../components/error/error';
import { Home } from '../pages/public';

export const ROUTES: Routes = [
    { path: '', component: Home },
    { path: 'error', component: Error },
    { path: '*', component: NoContent }
];
