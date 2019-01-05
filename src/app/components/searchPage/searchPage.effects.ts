import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {
  SearchAction,
  SearchSetQuery,
  SearchSetSearchResultCount
} from './searchPage.actions';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs';
import {GitHubDataService} from '../../shared/services/GitHubData.service';
import {UserListUsersInfo} from '../user/userList/userList.dictionary';
import {UserListGetUsersFailure, UserListSetUsersInfo} from '../user/userList/userList.actions';

@Injectable()
class SearchPageEffects {
  @Effect()
  public onSearch = this.actions$
    .filter((v: SearchAction) => v instanceof SearchSetQuery)
    .switchMap(({payload}: SearchSetQuery) => this.gitHubDataService
      .searchUsers<UserListUsersInfo>(payload)
      .switchMap(({items, total_count}: UserListUsersInfo) => Observable
        .from([new UserListSetUsersInfo(items), new SearchSetSearchResultCount(total_count)]))
      .catch((err: Error) => {
        console.error('[SearchPageEffects] Error has been occured while fetching users.', err);
        return of(new UserListGetUsersFailure());
      })
    );

  constructor(private actions$: Actions,
              private gitHubDataService: GitHubDataService) {
  }
}

export {SearchPageEffects};
