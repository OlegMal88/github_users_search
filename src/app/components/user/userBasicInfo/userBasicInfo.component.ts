import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './userBasicInfo.template.html',
  styleUrls: ['./userBasicInfo.styles.css']
})
class UserBasicInfoComponent {
  private _user: SearchUserBasic;

  @Output()
  userViewMore: EventEmitter<SearchUserBasic> = new EventEmitter<SearchUserBasic>();

  @Input()
  set user(user) {
    this._user = user;
  }

  get user(): SearchUserBasic {
    return this._user;
  }

  public onUserViewMore(): void {
    this.userViewMore.emit(this.user);
  }
}

export {UserBasicInfoComponent};
