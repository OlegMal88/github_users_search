import {Action} from '@ngrx/store';

const SEARCH_SET_QUERY: string = '[Search] set query';
const SEARCH_SET_SEARCH_RESULT_COUNT: string = '[Search] set search result count';

class SearchSetQuery implements Action {
  public readonly type: string = SEARCH_SET_QUERY;

  constructor(public payload: string) {
  }
}

class SearchSetSearchResultCount implements Action {
  public readonly type: string = SEARCH_SET_SEARCH_RESULT_COUNT;

  constructor(public payload: number) {
  }
}

type SearchAction = SearchSetQuery | SearchSetSearchResultCount;

export {
  SEARCH_SET_QUERY,
  SEARCH_SET_SEARCH_RESULT_COUNT,
  SearchAction,
  SearchSetQuery,
  SearchSetSearchResultCount
};
