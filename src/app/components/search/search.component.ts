import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
  styleUrls: ['./search.styles.css']
})
class SearchComponent implements OnDestroy {

  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter();

  public searchQuerySink: Subject<string> = new Subject();
  private searchQuerySubscription: Subscription = this.searchQuerySink
    .subscribe((searchQuery: string) => this.searchChange.emit(searchQuery));

  ngOnDestroy(): void {
    this.searchQuerySubscription.unsubscribe();
  }
}

export {SearchComponent};
