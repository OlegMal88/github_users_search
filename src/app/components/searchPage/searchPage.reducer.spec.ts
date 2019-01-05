import {searchDefaultState, searchReducer} from "./searchPage.reducer";
import {SearchSetQuery, SearchSetSearchResultCount} from "./searchPage.actions";

describe('searchReducer', () => {
  it('should get default of reducer', () => {
    expect(searchReducer(searchDefaultState, {} as any))
      .toBe(searchDefaultState);
  });

  it('should set search query', () => {
    expect(searchReducer(searchDefaultState, new SearchSetQuery('value')))
      .toEqual(jasmine.objectContaining({
        query: 'value'
      }));
  });

  it('should set search resultCount', () => {
    expect(searchReducer(searchDefaultState, new SearchSetSearchResultCount(12)))
      .toEqual(jasmine.objectContaining({
        resultCount: 12
      }));
  });
});
