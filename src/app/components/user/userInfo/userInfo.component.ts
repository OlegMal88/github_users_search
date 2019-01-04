import {Component, Input} from '@angular/core';
import {UserListUserInfoExtended} from '../userList/userList.dictionary';

@Component({
  selector: 'app-user-info',
  templateUrl: './userInfo.template.html',
})
class UserInfoComponent {
  @Input() user: UserListUserInfoExtended;
}

export {UserInfoComponent};
