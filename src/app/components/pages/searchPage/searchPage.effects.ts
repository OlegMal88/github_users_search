import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {SEARCH_SET_QUERY, SearchGetUsersFailure, SearchSetUsers} from './searchPage.action';
import {GIT_HUB_API, GIT_HUB_SEARCH_USER_END_POINT} from '../../../app.dictionary';
import {UserBasic} from '../../user/user.dictionary';
import {of} from 'rxjs/observable/of';

@Injectable()
class SearchPageEffects {
  @Effect()
  public onSearch = this.actions$
    .ofType(SEARCH_SET_QUERY)
    .switchMap(({payload}: {payload: string}) => {
        const params = new HttpParams({
          fromObject: {
            q: payload,
            sort: 'followers'
          }
        });

        return this.http
          .get(`${GIT_HUB_API}/${GIT_HUB_SEARCH_USER_END_POINT}`, {params})
          .map((users: UserBasic[]) => new SearchSetUsers(users))
          .catch((err: Error) => {
            console.error('[SearchPageEffects] Error has been occured while fetching users.', err);
            return of(new SearchGetUsersFailure());
          });
      }
    );

  constructor(private actions$: Actions,
              private http: HttpClient) {
  }
}

export {SearchPageEffects};
