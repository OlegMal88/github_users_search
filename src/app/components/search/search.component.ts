import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
})
class SearchComponent {

  @Input() resultsCount: number;

  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter();

  public searchQuery: string;

  public onSearch(): void {
    this.searchChange.emit(this.searchQuery);
  }
}


export {SearchComponent};
