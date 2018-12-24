import {Action} from '@ngrx/store';
import {SearchUserBasic} from "./searchPage.dictionary";

const SEARCH_SET_QUERY: string = '[Search] set query';
const SEARCH_SET_USERS: string = '[Search] set users';
const SEARCH_GET_USERS_FAILURE: string = '[Search] get users failure';
const SEARCH_SET_SEARCH_RESULT_COUNT: string = '[Search] set search result count';

class SearchSetQuery implements Action {
  public readonly type: string = SEARCH_SET_QUERY;

  constructor(public payload: string) {
  }
}

class SearchSetUsers implements Action {
  public readonly type: string = SEARCH_SET_USERS;

  constructor(public payload: SearchUserBasic[]) {
  }
}

class SearchSetSearchResultCount implements Action {
  public readonly type: string = SEARCH_SET_SEARCH_RESULT_COUNT;

  constructor(public payload: number) {
  }
}

class SearchGetUsersFailure implements Action {
  public readonly type: string = SEARCH_GET_USERS_FAILURE;
}

type SearchAction = SearchSetQuery
  | SearchSetUsers
  | SearchGetUsersFailure
  | SearchSetSearchResultCount;

export {
  SEARCH_SET_QUERY,
  SEARCH_SET_USERS,
  SEARCH_GET_USERS_FAILURE,
  SEARCH_SET_SEARCH_RESULT_COUNT,
  SearchAction,
  SearchSetQuery,
  SearchSetUsers,
  SearchGetUsersFailure,
  SearchSetSearchResultCount
};
