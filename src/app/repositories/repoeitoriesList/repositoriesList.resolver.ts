import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {RepositoriesListState} from './repositoriesList.reducer';
import {Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {
  RepositoriesListActions,
  RepositoriesListLoadRepositories,
  RepositoriesListSetRepositories, RepositoriesListSetRepositoriesFailure
} from './repositoriesList.actions';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

@Injectable()
class RepositoriesListResolver implements Resolve<any> {
  constructor(
    private store: Store<RepositoriesListState>,
    private actions$: Actions<RepositoriesListActions>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    this.store.dispatch(new RepositoriesListLoadRepositories(route.params.login));

    return this.actions$
      .filter((v: RepositoriesListActions) =>
        (v instanceof RepositoriesListSetRepositories) || (v instanceof RepositoriesListSetRepositoriesFailure))
      .take(1);
  }
}

export {RepositoriesListResolver};
