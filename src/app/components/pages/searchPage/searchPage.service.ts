import {Injectable} from '@angular/core';
import {StoreRootState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {SearchSetQuery} from './searchPage.action';
import {Observable} from 'rxjs';
import {SearchUserBasic} from './searchPage.dictionary';
import {searchGetResultsCountSelector, searchGetUsersSelector} from './searchPage.reducer';

@Injectable()
class SearchPageService {

  public readonly users$: Observable<SearchUserBasic[]> = this.store.select(searchGetUsersSelector);
  public readonly resultsCount$: Observable<number> = this.store.select(searchGetResultsCountSelector);

  constructor(private store: Store<StoreRootState>) {
  }

  public onSearch(searchQuery: string) {
    this.store.dispatch(new SearchSetQuery(searchQuery));
  }
}

export {SearchPageService};
