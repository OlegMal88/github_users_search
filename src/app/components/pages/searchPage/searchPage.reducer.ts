import {SEARCH_SET_QUERY, SearchAction} from "./searchPage.action";

interface SearchState {
  query: string;
}

const searchDefaultState: SearchState = {
  query: undefined
};

function searchReducer(state: SearchState = searchDefaultState, action: SearchAction) {

  // Section 3
  switch (action.type) {
    case SEARCH_SET_QUERY:
      return {...state, query: action.payload};
    default:
      return state;
  }
}

export {searchReducer, SearchState};
