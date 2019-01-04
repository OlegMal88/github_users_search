import {createSelector, MemoizedSelector} from '@ngrx/store';
import {RepositoriesListActions, RepositoriesListSetRepositories} from './repositoriesList.actions';
import {repositoriesFeatureSelector} from '../repositories.state';

interface RepositoriesListState {
  repositories: any[]
}

const repositoriesListDefaultState: RepositoriesListState = {
  repositories: undefined
};

function repositoriesListReducer(state: RepositoriesListState = repositoriesListDefaultState,
                                 action: RepositoriesListActions) {

  if (action instanceof RepositoriesListSetRepositories) {
    return {...state, repositories: action.payload};
  }

  return state;
}

const repositoriesListGetRepositoriesSelector: MemoizedSelector<Object, any[]> = createSelector(
  repositoriesFeatureSelector,
  (state: RepositoriesListState) => state.repositories
);

export {
  RepositoriesListState,
  repositoriesListDefaultState,
  repositoriesListReducer,
  repositoriesListGetRepositoriesSelector
};
