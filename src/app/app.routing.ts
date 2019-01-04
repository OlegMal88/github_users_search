import {Routes} from '@angular/router';
import {USERS_SEARCH_ROUTE} from './app.dictionary';
import {SearchPageComponent} from './components/searchPage/searchPage.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: USERS_SEARCH_ROUTE,
    pathMatch: 'full'
  },
  {
    path: USERS_SEARCH_ROUTE,
    component: SearchPageComponent
  }
];

export {appRoutes};
