import {Action} from '@ngrx/store';

const SEARCH_SET_QUERY: string = '[Search] set query';

class SearchSetQuery implements Action {
  public readonly type: string = SEARCH_SET_QUERY

  constructor(public payload: string) {
  }
}

type SearchAction = SearchSetQuery;

export {SEARCH_SET_QUERY, SearchAction, SearchSetQuery};
