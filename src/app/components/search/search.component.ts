import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
  styleUrls: ['./search.styles.css']
})
class SearchComponent {

  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter();

  public searchQuery: string = '';

  public onSearch(): void {
    this.searchChange.emit(this.searchQuery);
  }
}

export {SearchComponent};
