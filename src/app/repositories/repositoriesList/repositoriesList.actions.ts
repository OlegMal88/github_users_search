import {Action} from '@ngrx/store';
import {RepositoriesListItem} from '../repositories.dictionary';

const REPOSITORIES_LIST_SET_REPOSITORIES: string = '[Repositories] set repositories';
const REPOSITORIES_LIST_SET_REPOSITORIES_FAILURE: string = '[Repositories] set repositories failure';
const REPOSITORIES_LIST_LOAD_REPOSITORIES: string = '[Repositories] load repositories';

class RepositoriesListLoadRepositories implements Action {
  public readonly type: string = REPOSITORIES_LIST_LOAD_REPOSITORIES;

  constructor(public login: string) {
  }
}

class RepositoriesListSetRepositoriesFailure implements Action {
  public readonly type: string = REPOSITORIES_LIST_SET_REPOSITORIES_FAILURE;
}

class RepositoriesListSetRepositories implements Action {
  public readonly type: string = REPOSITORIES_LIST_SET_REPOSITORIES;

  constructor(public payload: RepositoriesListItem[]) {
  }
}

type RepositoriesListActions = RepositoriesListSetRepositories
  | RepositoriesListSetRepositoriesFailure
  | RepositoriesListLoadRepositories;

export {
  REPOSITORIES_LIST_SET_REPOSITORIES,
  REPOSITORIES_LIST_SET_REPOSITORIES_FAILURE,
  REPOSITORIES_LIST_LOAD_REPOSITORIES,
  RepositoriesListSetRepositories,
  RepositoriesListLoadRepositories,
  RepositoriesListSetRepositoriesFailure,
  RepositoriesListActions
};
