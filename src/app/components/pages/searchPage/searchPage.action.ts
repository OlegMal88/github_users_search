import {Action} from '@ngrx/store';
import {UserBasic} from '../../user/user.dictionary';

const SEARCH_SET_QUERY: string = '[Search] set query';
const SEARCH_SET_USERS: string = '[Search] set users';
const SEARCH_GET_USERS_FAILURE: string = '[Search] get users failure';

class SearchSetQuery implements Action {
  public readonly type: string = SEARCH_SET_QUERY;

  constructor(public payload: string) {
  }
}

class SearchSetUsers implements Action {
  public readonly type: string = SEARCH_SET_USERS;

  constructor(public payload: UserBasic[]) {
  }
}

class SearchGetUsersFailure implements Action {
  public readonly type: string = SEARCH_GET_USERS_FAILURE;
}

type SearchAction = SearchSetQuery | SearchSetUsers | SearchGetUsersFailure;

export {
  SEARCH_SET_QUERY,
  SEARCH_SET_USERS,
  SEARCH_GET_USERS_FAILURE,
  SearchAction,
  SearchSetQuery,
  SearchSetUsers,
  SearchGetUsersFailure
};
