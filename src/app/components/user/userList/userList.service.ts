import {Injectable} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {StoreRootState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {UserListSetSelectedUserBasic} from './userList.action';

@Injectable()
class UserListService {

  constructor(private store: Store<StoreRootState>) {
  }

  public onUserLoad(user: SearchUserBasic) {
    this.store.dispatch(new UserListSetSelectedUserBasic(user));
  }
}

export {
  UserListService
};
