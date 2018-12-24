import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListAction, UserListSetSelectedUser} from './userList.action';

interface UserListState {
  selectedUserBasic: SearchUserBasic;
  selectedUser: SearchUserBasic;
}

const defaultUserListState: UserListState = {
  selectedUserBasic: undefined,
  selectedUser: undefined
};

function userListReducer(state = defaultUserListState, action: UserListAction) {
  if (action instanceof UserListSetSelectedUser) {
    return {
      ...state,
      selectedUserBasic: action.payload
    };
  }

  return state;
}

export {
  UserListState,
  userListReducer
};
