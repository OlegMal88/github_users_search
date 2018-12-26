import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListActions, UserListSetSelectedUser, UserListSetSelectedUserBasic} from './userList.actions';

interface UserListState {
  selectedUserBasic: SearchUserBasic;
  selectedUser: SearchUserBasic;
}

const defaultUserListState: UserListState = {
  selectedUserBasic: undefined,
  selectedUser: undefined
};

function userListReducer(state = defaultUserListState, action: UserListActions) {
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
