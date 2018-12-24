import {Component, Input} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';

@Component({
  selector: 'app-user-list',
  templateUrl: './userList.template.html',
  styleUrls: ['./userList.styles.css']
})
class UserListComponent {
  @Input()
  userList: SearchUserBasic[];

  public trackByFn(index, item: SearchUserBasic): string {
    return item.login; // or item.id
  }

  public onUserViewMore(user: SearchUserBasic): void {
  }
}

export {UserListComponent};
