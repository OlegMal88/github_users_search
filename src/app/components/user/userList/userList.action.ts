import {Action} from '@ngrx/store';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';

const USER_LIST_SET_SELECTED_USER: string = 'USER_LIST_SET_SELECTED_USER';

class UserListSetSelectedUser implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER;

  constructor(payload: SearchUserBasic) {
  }
}

type UserListAction = UserListSetSelectedUser;

export {
  UserListAction,
  USER_LIST_SET_SELECTED_USER,
  UserListSetSelectedUser
};
