import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {GIT_HUB_API, GIT_HUB_SEARCH_USER_END_POINT} from "../../../app.dictionary";

@Injectable()
class SearchPageDataService {
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
}

export {SearchPageDataService};
