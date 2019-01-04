import {Routes} from '@angular/router';
import {RepositoriesListComponent} from './repositoriesList/repositoriesList.component';
import {REPOSITORIES_ROUTE_FULL_LINK} from './repositories.dictionary';
import {RepositoriesListResolver} from './repositoriesList/repositoriesList.resolver';

const repositoriesRoutes: Routes = [
  {
    path: REPOSITORIES_ROUTE_FULL_LINK,
    component: RepositoriesListComponent,
    resolve: {
      list: RepositoriesListResolver
    }
  }
];

export {repositoriesRoutes};
