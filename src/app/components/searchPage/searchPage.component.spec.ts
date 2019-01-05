import {SearchPageComponent} from "./searchPage.component";

describe('SearchPageComponent', () => {
  let sut: SearchPageComponent,
    serviceMock: any;

  beforeEach(() => {

    serviceMock = {
      onSearch: jasmine.createSpy('onSearch'),
      resultsCount$: 12
    };

    sut = new SearchPageComponent(serviceMock);
  });

  describe('resultsCount$', () => {
    it('should get resultCount$ value from the server ', () => {
      expect(sut.resultsCount$)
        .toBe(12 as any);
    });
  });

  describe('onSearchChange', () => {
    it('should execute search', () => {

      sut.onSearchChange('value');

      expect(serviceMock.onSearch)
        .toHaveBeenCalledWith('value');
    });
  });
});
