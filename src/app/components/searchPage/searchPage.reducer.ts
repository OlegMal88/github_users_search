import {SearchAction, SearchSetQuery, SearchSetSearchResultCount} from './searchPage.action';
import {createSelector} from '@ngrx/store';
import {searchRootStateSelector} from '../../app.dictionary';

interface SearchState {
  query: string;
  resultCount: number;
}

const searchDefaultState: SearchState = {
  query: undefined,
  resultCount: 0
};

function searchReducer(state: SearchState = searchDefaultState, action: SearchAction) {

  if (action instanceof SearchSetQuery) {
    return {...state, query: action.payload};
  }

  if (action instanceof SearchSetSearchResultCount) {
    return {...state, resultCount: action.payload};
  }

  return state;
}

const searchGetQuerySelector = createSelector(searchRootStateSelector, (state: SearchState) => state.query);
const searchGetResultsCountSelector = createSelector(searchRootStateSelector, (state: SearchState) => state.resultCount);

export {
  searchReducer,
  searchGetQuerySelector,
  searchGetResultsCountSelector,
  SearchState
};
