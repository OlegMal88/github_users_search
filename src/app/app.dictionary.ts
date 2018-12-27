import {StoreRootState} from "./app.state";

const GIT_HUB_API: string = 'https://api.github.com';
const GIT_HUB_SEARCH_USER_END_POINT: string = 'search/users';

const GIT_HUB_USER_ENDPOINT: string = 'users';

const searchRootStateSelector = (state: StoreRootState) => state.search;
const userListRootStateSelector = (state: StoreRootState) => state.userList;

export {
  GIT_HUB_API,
  GIT_HUB_SEARCH_USER_END_POINT,
  GIT_HUB_USER_ENDPOINT,
  searchRootStateSelector,
  userListRootStateSelector
};
