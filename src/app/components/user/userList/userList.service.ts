import {Injectable} from '@angular/core';
import {StoreRootState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {UserListSetSelectedUserBasic} from './userList.actions';
import {Observable} from 'rxjs';
import {UserListUserBasic, UserListUserInfoExtended} from './userList.dictionary';
import {userListGetExtendedUserInfoSelector, userListGetUsersSelector} from './userList.reducer';

@Injectable()
class UserListService {

  public readonly selectedUser$: Observable<UserListUserInfoExtended> = this.store
    .select(userListGetExtendedUserInfoSelector);

  public readonly users$: Observable<UserListUserBasic[]> = this.store
    .select(userListGetUsersSelector);

  constructor(private store: Store<StoreRootState>) {
  }

  public onUserLoad(user: UserListUserBasic) {
    this.store.dispatch(new UserListSetSelectedUserBasic(user));
  }
}

export {
  UserListService
};
