import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {repositoriesListGetRepositoriesSelector, RepositoriesListState} from './repositoriesList.reducer';
import {Observable} from 'rxjs';
import {RepositoriesListItem} from '../repositories.dictionary';

@Injectable()
class RepositoriesListService {

  public repositories$: Observable<RepositoriesListItem[]> = this.store.select(repositoriesListGetRepositoriesSelector);

  constructor(public store: Store<RepositoriesListState>) {
  }
}

export {RepositoriesListService};
