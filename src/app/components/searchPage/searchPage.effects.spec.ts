import {SearchPageEffects} from "./searchPage.effects";
import {getTestScheduler} from 'jasmine-marbles';
import {SearchSetQuery, SearchSetSearchResultCount} from "./searchPage.actions";
import {UserListGetUsersFailure, UserListSetUsersInfo} from "../user/userList/userList.actions";

describe('SearchPageEffects', () => {
  let sut: SearchPageEffects,
    githubServiceMock: any,
    testScheduler,
    actions$Mock: any;

  beforeEach(() => {
    testScheduler = getTestScheduler();

    actions$Mock = testScheduler.createColdObservable('-a-', {a: new SearchSetQuery('value')});

    githubServiceMock = {
      searchUsers: jasmine.createSpy('searchUsers')
        .and
        .returnValue(testScheduler.createColdObservable('--a----#', {a: {items: [], total_count: 12}}, 'Error'))
    };

    sut = new SearchPageEffects(actions$Mock, githubServiceMock);
  });

  describe('onSearch$', () => {
    it('should get data on SearchSetQuery action', () => {
      testScheduler
        .expectObservable(sut.onSearch$)
        .toBe('---(ab)-c-', {
          a: new UserListSetUsersInfo([]),
          b: new SearchSetSearchResultCount(12),
          c: new UserListGetUsersFailure()
        });

      testScheduler.flush();
    });
  });
});
