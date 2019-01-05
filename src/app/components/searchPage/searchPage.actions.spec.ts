import {
  SEARCH_SET_QUERY,
  SEARCH_SET_SEARCH_RESULT_COUNT,
  SearchSetQuery,
  SearchSetSearchResultCount
} from "./searchPage.actions";

describe('searchPage.actions', () => {
  it('should check SearchSetQuery parameters', () => {
    expect(new SearchSetQuery('value'))
      .toEqual(jasmine.objectContaining({
        type: SEARCH_SET_QUERY,
        payload: 'value'
      }));
  });

  it('should check SearchSetQuery parameters', () => {
    expect(new SearchSetSearchResultCount(12))
      .toEqual(jasmine.objectContaining({
        type: SEARCH_SET_SEARCH_RESULT_COUNT,
        payload: 12
      }));
  });
});
