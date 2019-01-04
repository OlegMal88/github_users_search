import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {repositoriesListGetRepositoriesSelector, RepositoriesListState} from './repositoriesList.reducer';
import {Observable} from 'rxjs';

@Injectable()
class RepositoriesListService {

  public repositories$: Observable<any[]> = this.store.select(repositoriesListGetRepositoriesSelector);

  constructor(public store: Store<RepositoriesListState>) {
  }
}

export {RepositoriesListService};
