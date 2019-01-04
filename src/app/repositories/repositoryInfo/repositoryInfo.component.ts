import {Component, Input} from '@angular/core';
import {RepositoriesListItem} from '../repositories.dictionary';

@Component({
  selector: 'app-repositories-info',
  templateUrl: './repositoryInfo.template.html'
})
class RepositoryInfoComponent {
  @Input() repository: RepositoriesListItem;
}

export {RepositoryInfoComponent};
