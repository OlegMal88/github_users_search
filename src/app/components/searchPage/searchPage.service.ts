import {Injectable} from '@angular/core';
import {StoreRootState} from '../../app.state';
import {Store} from '@ngrx/store';
import {SearchSetQuery} from './searchPage.actions';
import {Observable} from 'rxjs';
import {searchGetResultsCountSelector} from './searchPage.reducer';

@Injectable()
class SearchPageService {

  public readonly resultsCount$: Observable<number> = this.store.select(searchGetResultsCountSelector);

  constructor(private store: Store<StoreRootState>) {
  }

  public onSearch(searchQuery: string): void {
    this.store.dispatch(new SearchSetQuery(searchQuery));
  }
}

export {SearchPageService};
