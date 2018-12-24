import {Action} from '@ngrx/store';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {User} from '../user.dictionary';

const USER_LIST_SET_SELECTED_USER_BASIC: string = 'USER_LIST_SET_SELECTED_USER_BASIC';
const USER_LIST_SET_SELECTED_USER: string = 'USER_LIST_SET_SELECTED_USER';

class UserListSetSelectedUserBasic implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER_BASIC;

  constructor(payload: SearchUserBasic) {
  }
}
class UserListSetSelectedUser implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER;

  constructor(payload: User) {
  }
}

type UserListAction = UserListSetSelectedUserBasic
  | UserListSetSelectedUser;

export {
  UserListAction,
  USER_LIST_SET_SELECTED_USER_BASIC,
  USER_LIST_SET_SELECTED_USER,
  UserListSetSelectedUserBasic,
  UserListSetSelectedUser
};
