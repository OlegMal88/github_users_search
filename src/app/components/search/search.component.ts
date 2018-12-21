import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
  styleUrls: ['./search.styles.css']
})
export class SearchComponent {

  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter();

  public set searchQuery(searchQuery: string) {
    this.searchChange.emit(searchQuery);
  }
}
