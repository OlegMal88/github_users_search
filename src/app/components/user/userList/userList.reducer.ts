import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListActions, UserListSetSelectedUser, UserListSetSelectedUserBasic} from './userList.actions';
import {UserListUserInfoExtended} from './userList.dictionary';
import {createSelector} from '@ngrx/store';
import {userListRootStateSelector} from '../../../app.dictionary';

interface UserListState {
  selectedUserBasic: SearchUserBasic;
  selectedUser: UserListUserInfoExtended;
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

const userListGetExtendedUserInfoSelector = createSelector(userListRootStateSelector, (state: UserListState) => state.selectedUser);

export {
  UserListState,
  userListReducer,
  userListGetExtendedUserInfoSelector
};
