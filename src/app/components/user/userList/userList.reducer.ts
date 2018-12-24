import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListAction, UserListSetSelectedUser, UserListSetSelectedUserBasic} from './userList.action';

interface UserListState {
  selectedUserBasic: SearchUserBasic;
  selectedUser: SearchUserBasic;
}

const defaultUserListState: UserListState = {
  selectedUserBasic: undefined,
  selectedUser: undefined
};

function userListReducer(state = defaultUserListState, action: UserListAction) {
  if (action instanceof UserListSetSelectedUserBasic) {
    return {
      ...state,
      selectedUserBasic: action.payload
    };
  }

  if (action instanceof UserListSetSelectedUser) {
    return {
      ...state,
      selectedUser: action.payload
    };
  }

  return state;
}

export {
  UserListState,
  userListReducer
};
