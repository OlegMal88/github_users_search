import {Component} from '@angular/core';
import {SearchPageService} from './searchPage.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './searchPage.template.html',
})
class SearchPageComponent {
  constructor(private searchPageService: SearchPageService) {
  }

  onSearchChange(searchQuery: string): void {
    this.searchPageService.onSearch(searchQuery);
  }
}

export {SearchPageComponent};
