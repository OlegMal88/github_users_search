import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {USER_LIST_SET_SELECTED_USER_BASIC, UserListSetSelectedUserBasic} from './userList.actions';
import {GitHubDataService} from '../../../services/GitHubData.service';

@Injectable()
class UserListEffects {

  @Effect()
  userSelected$ = this.actions$
    .ofType(USER_LIST_SET_SELECTED_USER_BASIC)
    .switchMap(({payload}: UserListSetSelectedUserBasic) => this.gitHubDataService.loadUserInfo(payload.login))

  constructor(private actions$: Actions,
              private gitHubDataService: GitHubDataService) {
  }
}

export {UserListEffects};

