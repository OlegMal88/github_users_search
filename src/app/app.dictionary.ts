import {StoreRootState} from "./app.state";

const GIT_HUB_API: string = 'https://api.github.com';
const GIT_HUB_SEARCH_USER_END_POINT: string = 'search/users';

const searchRootStateSelector = (state: StoreRootState) => state.search;

export {GIT_HUB_API, GIT_HUB_SEARCH_USER_END_POINT, searchRootStateSelector};
