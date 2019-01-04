import {NgModule} from '@angular/core';
import {repositoriesRoutes} from './repositories.routing';
import {REPOSITORIES_FEATURE_SELECTOR} from './repositories.state';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {repositoriesListReducer} from './repoeitoriesList/repositoriesList.reducer';
import {RepositoriesListComponent} from './repoeitoriesList/repositoriesList.component';
import {RepositoriesListService} from './repoeitoriesList/repositoriesList.service';
import {RepositoriesListResolver} from './repoeitoriesList/repositoriesList.resolver';
import {RepositoriesListEffects} from './repoeitoriesList/repositoriesList.effects';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    RepositoriesListComponent
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
