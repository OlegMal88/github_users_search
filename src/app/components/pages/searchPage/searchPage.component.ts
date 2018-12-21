import {Component} from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './searchPage.template.html',
})
class SearchPageComponent {
  onSearchChange(searchQuery: string): void {
  }
}

export {SearchPageComponent};
