import {RepositoriesListState} from './repositoriesList/repositoriesList.reducer';
import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';

const REPOSITORIES_FEATURE_SELECTOR: string = 'repositories';

const repositoriesFeatureSelector: MemoizedSelector<Object, RepositoriesListState> =
  createFeatureSelector<RepositoriesListState>(REPOSITORIES_FEATURE_SELECTOR);

export {
  REPOSITORIES_FEATURE_SELECTOR,
  repositoriesFeatureSelector
};
