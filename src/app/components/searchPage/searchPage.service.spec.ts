import {SearchPageService} from './searchPage.service';
import {SearchSetQuery} from './searchPage.actions';
import {searchGetResultsCountSelector} from './searchPage.reducer';

describe('SearchPageService', () => {
  let sut: SearchPageService,
    storeMock: any;

  beforeEach(() => {

    storeMock = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select')
    };

    sut = new SearchPageService(storeMock);
  });

  describe('resultsCount$', () => {
    it('should select specific values from Store', () => {

      expect(storeMock.select)
        .toHaveBeenCalledWith(searchGetResultsCountSelector);
    });
  });

  describe('onSearch', () => {
    it('should dispatch action', () => {

      sut.onSearch('value');

      expect(storeMock.dispatch)
        .toHaveBeenCalledWith(new SearchSetQuery('value'));
    });
  });
});
