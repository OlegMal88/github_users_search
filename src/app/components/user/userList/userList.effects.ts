import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {USER_LIST_SET_SELECTED_USER_BASIC} from './userList.action';
import {GitHubDataService} from '../../../services/GitHubData.service';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';

@Injectable()
class UserListEffects {

  @Effect()
  userSelected$ = this.actions$
    .ofType(USER_LIST_SET_SELECTED_USER_BASIC)
    .do((v) => console.log('sssssssssss', v)) //tslint:disable-line
    .switchMap(({payload}: SearchUserBasic) => this.gitHubDataService.loadUserInfo(payload.login))
    .do((v) => console.log('sssssssssssssssss', v)) //tslint:disable-line

  constructor(private actions$: Actions,
              private gitHubDataService: GitHubDataService) {
  }

}

export {UserListEffects};

