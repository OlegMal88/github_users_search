import {ActionReducerMap} from "@ngrx/store";
import {searchReducer, SearchState} from "./components/pages/searchPage/searchPage.reducer";
import {userListReducer, UserListState} from './components/user/userList/userList.reducer';

interface StoreRootState {
  readonly search: SearchState;
  readonly userList: UserListState;
}

const reducerRef: ActionReducerMap<StoreRootState> = {
  search: searchReducer,
  userList: userListReducer
};

export {
  StoreRootState,
  reducerRef
};
