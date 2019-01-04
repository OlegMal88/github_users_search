import {Action} from '@ngrx/store';
import {UserListUserBasic, UserListUserInfoExtended} from './userList.dictionary';

const USER_LIST_SET_USERS: string = '[UserList] set users';
const USER_LIST_GET_USERS_FAILURE: string = '[UserList] get users failure';
const USER_LIST_SET_SELECTED_USER_BASIC: string = '[UserList] set selected user basic';
const USER_LIST_SET_SELECTED_USER: string = '[UserList] set selected user';
const USER_LIST_GET_USER_INFO_FAILURE: string = '[UserList] get selected user failure';


class UserListSetUsersInfo implements Action {
  public readonly type: string = USER_LIST_SET_USERS;

  constructor(public payload: UserListUserBasic[]) {
  }
}

class UserListGetUsersFailure implements Action {
  public readonly type: string = USER_LIST_GET_USERS_FAILURE;
}

class UserListSetSelectedUserBasic implements Action {
  public readonly type: string = USER_LIST_SET_SELECTED_USER_BASIC;

  constructor(public payload: UserListUserBasic) {
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
  | UserListSetUsersInfo
  | UserListGetUsersFailure
  | UserListSetSelectedUser
  | UserListGetUserInfoFailure;

export {
  UserListActions,
  USER_LIST_SET_SELECTED_USER_BASIC,
  USER_LIST_SET_SELECTED_USER,
  USER_LIST_GET_USER_INFO_FAILURE,
  USER_LIST_SET_USERS,
  USER_LIST_GET_USERS_FAILURE,
  UserListSetUsersInfo,
  UserListGetUsersFailure,
  UserListSetSelectedUserBasic,
  UserListSetSelectedUser,
  UserListGetUserInfoFailure
};
