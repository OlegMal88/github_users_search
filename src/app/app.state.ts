import {searchReducer, SearchState} from "./components/search/search.reducer";
import {ActionReducerMap} from "@ngrx/store";

interface StoreRootState {
  readonly search: SearchState;
}

const reducerRef: ActionReducerMap<StoreRootState> = {
  search: searchReducer
};

export {StoreRootState, reducerRef};
