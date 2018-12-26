import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {
  USER_LIST_SET_SELECTED_USER_BASIC,
  UserListSetSelectedUser,
  UserListSetSelectedUserBasic
} from './userList.actions';
import {GitHubDataService} from '../../../services/GitHubData.service';
import {USER_LIST_USER_FAILURE_ERROR_MESSAGE, UserListUserInfoExtended} from './userList.dictionary';
import {SearchGetUsersFailure} from '../../pages/searchPage/searchPage.action';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
class UserListEffects {

  @Effect()
  userSelected$ = this.actions$
    .ofType(USER_LIST_SET_SELECTED_USER_BASIC)
    .switchMap(({payload}: UserListSetSelectedUserBasic) => this.gitHubDataService
      .loadUserInfo<UserListUserInfoExtended>(payload.login)
      .map((user: UserListUserInfoExtended) => new UserListSetSelectedUser(user))
      .catch((error: HttpErrorResponse) => {
        console.error(USER_LIST_USER_FAILURE_ERROR_MESSAGE, error);
        return Observable.of(new SearchGetUsersFailure());
      }));

  constructor(private actions$: Actions,
              private gitHubDataService: GitHubDataService) {
  }
}

export {UserListEffects};

