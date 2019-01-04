import {StoreRootState} from './app.state';

const USERS_SEARCH_ROUTE: string = 'usersSearch';

const searchRootStateSelector = (state: StoreRootState) => state.search;
const userListRootStateSelector = (state: StoreRootState) => state.userList;

export {
  USERS_SEARCH_ROUTE,
  searchRootStateSelector,
  userListRootStateSelector
};
