import {Component, Input} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {UserListService} from './userList.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './userList.template.html',
  styleUrls: ['./userList.styles.css']
})
class UserListComponent {
  @Input()
  userList: SearchUserBasic[];

  constructor(private userListService: UserListService) {
  }

  public trackByFn(index, item: SearchUserBasic): string {
    return item.login; // or item.id
  }

  public onUserViewMore(user: SearchUserBasic): void {
    this.userListService.onUserLoad(user);
  }
}

export {UserListComponent};
