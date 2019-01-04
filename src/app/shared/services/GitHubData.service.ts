import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  GIT_HUB_API,
  GIT_HUB_REPOSITORIES_ENDPOINT,
  GIT_HUB_SEARCH_USER_END_POINT,
  GIT_HUB_USER_ENDPOINT
} from '../shared.dictionary';

@Injectable()
class GitHubDataService {
  constructor(private http: HttpClient) {
  }

  public searchUsers<T>(payload: string): Observable<T> {
    const params = new HttpParams({
      fromObject: {
        q: payload,
        sort: 'followers'
      }
    });

    return this.http
      .get<T>(`${GIT_HUB_API}/${GIT_HUB_SEARCH_USER_END_POINT}`, {params});
  }

  public loadUserInfo<T>(login: string): Observable<T> {
    return this.http
      .get<T>(`${GIT_HUB_API}/${GIT_HUB_USER_ENDPOINT}/${login}`);
  }

  public loadRepositories<T>(login: string): Observable<T> {
    const params = new HttpParams({
      fromObject: {
        type: 'all',
        sort: 'created'
      }
    });

    return this.http
      .get<T>(`${GIT_HUB_API}/${GIT_HUB_USER_ENDPOINT}/${login}/${GIT_HUB_REPOSITORIES_ENDPOINT}`, {params});
  }
}

export {GitHubDataService};
