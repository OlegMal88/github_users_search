import {Component, Input} from '@angular/core';
import {UserListUserInfoExtended} from '../userList/userList.dictionary';
import {Router} from '@angular/router';
import {REPOSITORIES_ROUTE_LINK} from '../../../repositories/repositories.dictionary';

@Component({
  selector: 'app-user-info',
  templateUrl: './userInfo.template.html',
})
class UserInfoComponent {
  @Input() user: UserListUserInfoExtended;

  constructor(private readonly router: Router) {
  }

  public selectRepository(user: UserListUserInfoExtended): void {
    this.router.navigate([REPOSITORIES_ROUTE_LINK, user.login]);
  }
}

export {UserInfoComponent};
