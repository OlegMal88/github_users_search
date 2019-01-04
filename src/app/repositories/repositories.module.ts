import {NgModule} from '@angular/core';
import {repositoriesRoutes} from './repositories.routing';
import {REPOSITORIES_FEATURE_SELECTOR} from './repositories.state';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {repositoriesListReducer} from './repositoriesList/repositoriesList.reducer';
import {RepositoriesListComponent} from './repositoriesList/repositoriesList.component';
import {RepositoriesListService} from './repositoriesList/repositoriesList.service';
import {RepositoriesListResolver} from './repositoriesList/repositoriesList.resolver';
import {RepositoriesListEffects} from './repositoriesList/repositoriesList.effects';
import {SharedModule} from '../shared/shared.module';
import {RepositoryInfoComponent} from './repositoryInfo/repositoryInfo.component';


@NgModule({
  declarations: [
    RepositoriesListComponent,
    RepositoryInfoComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(repositoriesRoutes),
    StoreModule.forFeature(REPOSITORIES_FEATURE_SELECTOR, repositoriesListReducer),
    EffectsModule.forFeature([RepositoriesListEffects])
  ],
  providers: [
    RepositoriesListService,
    RepositoriesListResolver
  ]
})
class RepositoriesModule {
}

export {
  RepositoriesModule
};
