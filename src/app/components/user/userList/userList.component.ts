import {Component, Input} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListService} from './userList.service';
import {Observable} from 'rxjs';
import {UserListUserInfoExtended} from './userList.dictionary';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './userList.template.html',
  styleUrls: ['./userList.styles.css'],
  providers: [NgbAccordionConfig]
})
class UserListComponent {
  @Input()
  userList: SearchUserBasic[];

  public readonly selectedUser$: Observable<UserListUserInfoExtended> = this.userListService.selectedUser$;

  constructor(private ngbAccordionConfig: NgbAccordionConfig,
              private userListService: UserListService) {
    this.ngbAccordionConfig.closeOthers = true;
  }

  public trackByFn(index, item: SearchUserBasic): string {
    return item.login; // or item.id
  }

  public onUserViewMore(user: SearchUserBasic): void {
    this.userListService.onUserLoad(user);
  }
}

export {UserListComponent};
