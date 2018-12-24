import {SearchAction, SearchSetQuery, SearchSetSearchResultCount, SearchSetUsers} from './searchPage.action';
import {SearchUserBasic} from './searchPage.dictionary';
import {createSelector} from '@ngrx/store';
import {searchRootStateSelector} from '../../../app.dictionary';

interface SearchState {
  query: string;
  users: SearchUserBasic[];
  resultCount: number;
}

const searchDefaultState: SearchState = {
  query: undefined,
  users: undefined,
  resultCount: 0
};

function searchReducer(state: SearchState = searchDefaultState, action: SearchAction) {

  if (action instanceof SearchSetQuery) {
    return {...state, query: action.payload};
  }

  if (action instanceof SearchSetUsers) {
    return {...state, users: action.payload};
  }

  if (action instanceof SearchSetSearchResultCount) {
    return {...state, resultCount: action.payload};
  }

  return state;
}

const searchGetQuerySelector = createSelector(searchRootStateSelector, (state: SearchState) => state.query);
const searchGetUsersSelector = createSelector(searchRootStateSelector, (state: SearchState) => state.users);
const searchGetResultsCountSelector = createSelector(searchRootStateSelector, (state: SearchState) => state.resultCount);

export {
  searchReducer,
  searchGetQuerySelector,
  searchGetUsersSelector,
  searchGetResultsCountSelector,
  SearchState
};
