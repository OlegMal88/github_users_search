import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserListUserBasic} from '../userList/userList.dictionary';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './userBasicInfo.template.html',
  styleUrls: ['./userBasicInfo.styles.css']
})
class UserBasicInfoComponent {
  private _user: UserListUserBasic;

  @Output()
  userViewMore: EventEmitter<UserListUserBasic> = new EventEmitter<UserListUserBasic>();

  @Input()
  set user(user) {
    this._user = user;
  }

  get user(): UserListUserBasic {
    return this._user;
  }

  public onUserViewMore(): void {
    this.userViewMore.emit(this.user);
  }
}

export {UserBasicInfoComponent};
