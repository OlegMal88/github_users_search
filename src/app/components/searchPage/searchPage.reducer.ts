import {SearchAction, SearchSetQuery, SearchSetSearchResultCount} from './searchPage.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {searchRootStateSelector} from '../../app.dictionary';
import {StoreRootState} from '../../app.state';

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

const searchGetQuerySelector: MemoizedSelector<StoreRootState, string> =
  createSelector(searchRootStateSelector, (state: SearchState) => state.query);
const searchGetResultsCountSelector: MemoizedSelector<StoreRootState, number> =
  createSelector(searchRootStateSelector, (state: SearchState) => state.resultCount);

export {
  searchReducer,
  searchDefaultState,
  searchGetQuerySelector,
  searchGetResultsCountSelector,
  SearchState
};
