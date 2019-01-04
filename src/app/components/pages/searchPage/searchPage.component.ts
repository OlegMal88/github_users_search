import {Component} from '@angular/core';
import {SearchPageService} from './searchPage.service';
import {Observable} from 'rxjs';
import {UserListUserBasic} from "../../user/userList/userList.dictionary";

@Component({
  selector: 'app-search-page',
  templateUrl: './searchPage.template.html',
  styleUrls:['./searchPage.styles.scss']
})
class SearchPageComponent {

  public resultsCount$: Observable<number> = this.searchPageService.resultsCount$;

  constructor(private searchPageService: SearchPageService) {
  }

  public onSearchChange(searchQuery: string): void {
    this.searchPageService.onSearch(searchQuery);
  }

  public onUserViewMore(user: UserListUserBasic): void {
    console.log(user);
  }
}

export {SearchPageComponent};
