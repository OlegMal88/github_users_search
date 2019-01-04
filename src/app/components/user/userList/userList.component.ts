import {Component} from '@angular/core';
import {UserListService} from './userList.service';
import {Observable} from 'rxjs';
import {UserListUserBasic, UserListUserInfoExtended} from './userList.dictionary';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './userList.template.html',
  styleUrls: ['./userList.styles.css'],
  providers: [NgbAccordionConfig]
})
class UserListComponent {

  public readonly users$: Observable<UserListUserBasic[]> = this.userListService.users$;
  public readonly selectedUser$: Observable<UserListUserInfoExtended> = this.userListService.selectedUser$;

  constructor(private ngbAccordionConfig: NgbAccordionConfig,
              private userListService: UserListService) {
    this.ngbAccordionConfig.closeOthers = true;
  }

  public trackByFn(index, item: UserListUserBasic): string {
    return item.login; // or item.id
  }

  public onUserViewMore(user: UserListUserBasic): void {
    this.userListService.onUserLoad(user);
  }
}

export {UserListComponent};
