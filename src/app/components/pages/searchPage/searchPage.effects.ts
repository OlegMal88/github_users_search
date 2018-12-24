import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {
  SEARCH_SET_QUERY,
  SearchGetUsersFailure,
  SearchSetQuery,
  SearchSetSearchResultCount,
  SearchSetUsers
} from './searchPage.action';
import {GIT_HUB_API, GIT_HUB_SEARCH_USER_END_POINT} from '../../../app.dictionary';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {SearchResultUserInfo} from "./searchPage.dictionary";
import {Observable} from "rxjs";
import {SearchPageDataService} from "./searchPageData.service";

@Injectable()
class SearchPageEffects {
  @Effect()
  public onSearch = this.actions$
    .ofType(SEARCH_SET_QUERY)
    .switchMap(({payload}: SearchSetQuery) => this.searchDataService
      .searchUsers<SearchResultUserInfo>(payload)
      .switchMap(({items, total_count}: SearchResultUserInfo) => Observable
        .from([new SearchSetUsers(items), new SearchSetSearchResultCount(total_count)]))
      .catch((err: Error) => {
        console.error('[SearchPageEffects] Error has been occured while fetching users.', err);
        return of(new SearchGetUsersFailure());
      })
    );

  constructor(private actions$: Actions,
              private searchDataService: SearchPageDataService,
              private http: HttpClient) {
  }
}

export {SearchPageEffects};
