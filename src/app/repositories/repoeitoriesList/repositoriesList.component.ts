import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {RepositoriesListService} from './repositoriesList.service';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositoriesList.template.html',
  styleUrls: ['./repositoriesList.styles.scss']
})
class RepositoriesListComponent {

  public repositories$: Observable<any[]> = this.repositoriesListService.repositories$;

  constructor(private repositoriesListService: RepositoriesListService) {
  }

  public trackByFn(index, item: any): string {
    return item.login; // or item.id
  }
}

export {RepositoriesListComponent};
