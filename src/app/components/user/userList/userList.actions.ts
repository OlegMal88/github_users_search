import {Action} from '@ngrx/store';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListUserInfoExtended} from "./userList.dictionary";

const USER_LIST_SET_SELECTED_USER_BASIC: string = '[UserList] set selected user basic';
const USER_LIST_SET_SELECTED_USER: string = '[UserList] set selected user';
const USER_LIST_GET_USER_INFO_FAILURE: string = '[UserList] get selected user failure';

class UserListSetSelectedUserBasic implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER_BASIC;

  constructor(public payload: SearchUserBasic) {
  }
}

class UserListSetSelectedUser implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER;

  constructor(public payload: UserListUserInfoExtended) {
  }
}

class UserListGetUserInfoFailure implements Action {
  public readonly type: string = USER_LIST_GET_USER_INFO_FAILURE;

  constructor(public payload: UserListUserInfoExtended) {
  }
}

type UserListActions = UserListSetSelectedUserBasic
  | UserListSetSelectedUser
  | UserListGetUserInfoFailure;

export {
  UserListActions,
  USER_LIST_SET_SELECTED_USER_BASIC,
  USER_LIST_SET_SELECTED_USER,
  USER_LIST_GET_USER_INFO_FAILURE,
  UserListSetSelectedUserBasic,
  UserListSetSelectedUser,
  UserListGetUserInfoFailure
};
