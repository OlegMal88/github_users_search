import {Injectable} from '@angular/core';
import {StoreRootState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {SearchSetQuery} from './searchPage.action';

@Injectable()
class SearchPageService {
  constructor(private store: Store<StoreRootState>) {
  }

  public onSearch(searchQuery: string) {
    this.store.dispatch(new SearchSetQuery(searchQuery));
  }
}

export {SearchPageService};
