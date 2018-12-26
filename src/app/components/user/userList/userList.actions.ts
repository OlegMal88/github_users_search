import {Action} from '@ngrx/store';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';

const USER_LIST_SET_SELECTED_USER_BASIC: string = '[User] set selected user basic';
const USER_LIST_SET_SELECTED_USER: string = '[User] set selected user';

class UserListSetSelectedUserBasic implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER_BASIC;

  constructor(public payload: SearchUserBasic) {
  }
}

class UserListSetSelectedUser implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER;

  constructor(public payload: SearchUserBasic) {
  }
}

type UserListActions = UserListSetSelectedUserBasic
  | UserListSetSelectedUser;

export {
  UserListActions,
  USER_LIST_SET_SELECTED_USER_BASIC,
  USER_LIST_SET_SELECTED_USER,
  UserListSetSelectedUserBasic,
  UserListSetSelectedUser
};
