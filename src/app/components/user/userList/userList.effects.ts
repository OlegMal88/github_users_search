import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {
  UserListActions,
  UserListGetUsersFailure,
  UserListSetSelectedUser,
  UserListSetSelectedUserBasic
} from './userList.actions';
import {GitHubDataService} from '../../../shared/services/GitHubData.service';
import {USER_LIST_USER_FAILURE_ERROR_MESSAGE, UserListUserInfoExtended} from './userList.dictionary';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
class UserListEffects {

  @Effect()
  userSelected$ = this.actions$
    .filter((v: UserListActions) => v instanceof UserListSetSelectedUserBasic)
    .switchMap(({payload}: UserListSetSelectedUserBasic) => this.gitHubDataService
      .loadUserInfo<UserListUserInfoExtended>(payload.login)
      .map((user: UserListUserInfoExtended) => new UserListSetSelectedUser(user))
      .catch((error: HttpErrorResponse) => {
        console.error(USER_LIST_USER_FAILURE_ERROR_MESSAGE, error);
        return Observable.of(new UserListGetUsersFailure());
      }));

  constructor(private actions$: Actions,
              private gitHubDataService: GitHubDataService) {
  }
}

export {UserListEffects};

