import {Injectable} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {StoreRootState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {UserListSetSelectedUserBasic} from './userList.actions';
import {Observable} from 'rxjs';
import {UserListUserInfoExtended} from './userList.dictionary';
import {userListGetExtendedUserInfoSelector} from './userList.reducer';

@Injectable()
class UserListService {

  public readonly selectedUser$: Observable<UserListUserInfoExtended> = this.store
    .select(userListGetExtendedUserInfoSelector);

  constructor(private store: Store<StoreRootState>) {
  }

  public onUserLoad(user: SearchUserBasic) {
    this.store.dispatch(new UserListSetSelectedUserBasic(user));
  }
}

export {
  UserListService
};
