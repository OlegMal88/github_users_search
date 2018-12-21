import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
})
class SearchComponent {
  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter();

  public searchQuery: string;

  public onSearch(): void {
    console.log('here', this.searchQuery)
    this.searchChange.emit(this.searchQuery);
  }
}


export {SearchComponent};
