import {
  RepositoriesListActions,
  RepositoriesListLoadRepositories,
  RepositoriesListSetRepositories, RepositoriesListSetRepositoriesFailure
} from './repositoriesList.actions';
import {REPOSITORIES_LIST_GET_REPOSITORIES_ERROR, RepositoriesListItem} from './repositoriesList.dictionary';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {GitHubDataService} from '../../shared/services/GitHubData.service';
import 'rxjs/add/operator/filter';

@Injectable()
class RepositoriesListEffects {
  @Effect()
  public loadRepositories$ = this.actions$
    .filter((v: RepositoriesListActions) => v instanceof RepositoriesListLoadRepositories)
    .switchMap(({login}: RepositoriesListLoadRepositories) => this.gitHubDataService
      .loadRepositories<RepositoriesListItem[]>(login)
      .switchMap((items: RepositoriesListItem[]) => Observable
        .of(new RepositoriesListSetRepositories(items)))
      .catch((err: Error) => {
        console.error(REPOSITORIES_LIST_GET_REPOSITORIES_ERROR, err);
        return Observable.of(new RepositoriesListSetRepositoriesFailure());
      })
    );

  constructor(private actions$: Actions,
              private gitHubDataService: GitHubDataService) {
  }
}

export {RepositoriesListEffects};
