import {Routes} from '@angular/router';
import {RepositoriesListComponent} from './repoeitoriesList/repositoriesList.component';
import {REPOSITORIES_ROUTE_FULL_LINK} from './repositories.dictionary';
import {RepositoriesListResolver} from './repoeitoriesList/repositoriesList.resolver';

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
