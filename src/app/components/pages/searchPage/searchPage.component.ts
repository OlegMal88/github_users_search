import {Component} from '@angular/core';
import {SearchPageService} from './searchPage.service';
import {Observable} from 'rxjs';
import {SearchUserBasic} from './searchPage.dictionary';

@Component({
  selector: 'app-search-page',
  templateUrl: './searchPage.template.html',
  styleUrls:['./searchPage.styles.scss']
})
class SearchPageComponent {

  public users$: Observable<SearchUserBasic[]> = this.searchPageService.users$;
  public resultsCount$: Observable<number> = this.searchPageService.resultsCount$;

  constructor(private searchPageService: SearchPageService) {
  }

  public onSearchChange(searchQuery: string): void {
    this.searchPageService.onSearch(searchQuery);
  }
}

export {SearchPageComponent};
