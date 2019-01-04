import {
  UserListActions,
  UserListSetSelectedUser,
  UserListSetSelectedUserBasic,
  UserListSetUsersInfo
} from './userList.actions';
import {UserListUserBasic, UserListUserInfoExtended} from './userList.dictionary';
import {createSelector} from '@ngrx/store';
import {userListRootStateSelector} from '../../../app.dictionary';

interface UserListState {
  selectedUserBasic: UserListUserBasic;
  selectedUser: UserListUserInfoExtended;
  users: UserListUserBasic[]
}

const defaultUserListState: UserListState = {
  selectedUserBasic: undefined,
  selectedUser: undefined,
  users: undefined
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

  if (action instanceof UserListSetUsersInfo) {
    return {
      ...state,
      users: action.payload
    };
  }

  return state;
}

const userListGetExtendedUserInfoSelector = createSelector(userListRootStateSelector, (state: UserListState) => state.selectedUser);
const userListGetUsersSelector = createSelector(userListRootStateSelector, (state: UserListState) => state.users);

export {
  UserListState,
  userListReducer,
  userListGetExtendedUserInfoSelector,
  userListGetUsersSelector
};
