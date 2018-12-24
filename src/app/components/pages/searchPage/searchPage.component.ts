import {Component} from '@angular/core';
import {SearchPageService} from './searchPage.service';
import {Observable} from "rxjs";
import {SearchUserBasic} from "./searchPage.dictionary";

@Component({
  selector: 'app-search-page',
  templateUrl: './searchPage.template.html',
})
class SearchPageComponent {

  public users$: Observable<SearchUserBasic[]> = this.searchPageService.users$;
  public totslCount$: Observable<number> = this.searchPageService.totalCount$;

  constructor(private searchPageService: SearchPageService) {
  }

  public onSearchChange(searchQuery: string): void {
    this.searchPageService.onSearch(searchQuery);
  }

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

export {SearchPageComponent};
