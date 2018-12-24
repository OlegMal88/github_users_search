import {searchReducer, SearchState} from "./components/pages/searchPage/searchPage.reducer";
import {ActionReducerMap} from "@ngrx/store";

interface StoreRootState {
  readonly search: SearchState;
}

const reducerRef: ActionReducerMap<StoreRootState> = {
  search: searchReducer
};

const searchRootStateSelector = (state: StoreRootState) => state.search;

export {
  StoreRootState,
  reducerRef,
  searchRootStateSelector
};
